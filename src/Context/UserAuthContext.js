import { useContext } from "react";
import { createContext } from "react";

import {
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../firebase";
import { useEffect } from "react";
import { useState } from "react";

const userAuthContext = createContext();
export function UserAuthContexProvider({ children }) {
  const [user, setuser] = useState("");
  const [token, settoken] = useState("");

  useEffect(() => {
    const getToken = () => {
      settoken(localStorage.getItem("token"));
    };
    getToken();
  }, []);

  function logOut() {
    return signOut(auth);
  }

  async function signWithGoogle() {
    try {
      const googleAuthProvider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, googleAuthProvider);
      const { displayName, email, photoURL, reloadUserInfo, uid } = res.user;
      await fetch("/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userPhoto: photoURL,
          fName: displayName,
          email: email,
          password: reloadUserInfo.passwordHash,
          firebaseID: uid,
        }),
      });
      localStorage.setItem("token", await res.user.getIdToken());
      localStorage.setItem("firebaseuid", res.user.uid);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,

        logOut,
        token,
        signWithGoogle,
      }}
    >
      {" "}
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
