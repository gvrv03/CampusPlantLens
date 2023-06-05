import React, { useContext, useEffect, useState, createContext } from "react";

const GalleryContext = createContext();

export function GalleryContextProvider({ children }) {
  const [updater, setUpdater] = useState("");
  const [gallery, setGallery] = useState({ isLoading: true, images: [] });

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
      setUpdater(Math.random());
      return data.msg;
    } else {
      return data.error;
    }
  };

  const getsImagesInGallery = async () => {
    setGallery({ isLoading: true, images: [] });

    const res = await fetch("/api/AddInGallery", {
      method: "GET",
    });

    const data = await res.json();
    if (!data.error) {
      setGallery({ isLoading: false, images: data });
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
      setUpdater(Math.random());
      return data.msg;
    } else {
      return data.error;
    }
  };

  useEffect(() => {
    getsImagesInGallery();
  }, [updater]);

  return (
    <GalleryContext.Provider
      value={{ addImagesInGallery, gallery, setUpdater, deleteImageInGallery }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGalleryContext() {
  return useContext(GalleryContext);
}
