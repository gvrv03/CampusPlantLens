import PopUpModal from "campusplantlens/Components/PopUpModal";

import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const galleryContext = createContext();
export function GalleryContexProvider({ children }) {
  const [updater, setupdater] = useState("");
  const [gallery, setgallery] = useState({ isLoading: true, images: [] });

  const addImagesInGallery = async (imgUrl) => {
    const res = await fetch("/api/AddInGallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl: imgUrl,
      }),
    });

    const data = await res.json();
    if (data.msg) {
      setupdater(Math.random());
      return data.msg;
    } else {
      return data.error;
    }
  };

  const getsImagesInGallery = async () => {
    setgallery({ isLoading: true, images: [] });

    const res = await fetch("/api/AddInGallery", {
      method: "GET",
    });

    const data = await res.json();
    if (!data.error) {
      setgallery({ isLoading: false, images: data });
      return data;
    } else {
      return data.error;
    }
  };


  const deleteImageInGallery = async (imgID) => {
    const res = await fetch("/api/AddInGallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageID: imgID,
      }),
    });

    const data = await res.json();
    if (data.msg) {
      setupdater(Math.random());
      return data.msg;
    } else {
      return data.error;
    }
  };

  useEffect(() => {
    getsImagesInGallery();
  }, [updater]);

  return (
    <galleryContext.Provider
      value={{ addImagesInGallery, gallery, setupdater ,deleteImageInGallery}}
    >
      {children}
    </galleryContext.Provider>
  );
}

export function usegalleryContext() {
  return useContext(galleryContext);
}
