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
  const [allUserDetail, setallUserDetail] = useState({});

  useEffect(() => {
    const getToken = () => {
      settoken(localStorage.getItem("token"));
    };
    getToken();
  }, []);

  async function logOut() {
    const res = await signOut(auth);
    localStorage.removeItem("firebaseuid");
    localStorage.removeItem("token");
    return;
  }

  const getSingleUserData = async () => {
    const res = await fetch(
      "/api/User/" + localStorage.getItem("firebaseuid"),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const userData = await res.json();
    if (userData.error) {
      return {
        notFound: true,
      };
    }
    setallUserDetail(userData);
    return userData;
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

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
        allUserDetail,
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
