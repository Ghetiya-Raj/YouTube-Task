import { createContext, useContext, useState } from "react";

const AuthProvider = createContext(null);

export const Store = ({ children }) => {
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [imgKey, setImgKey] = useState("");
  const [videoKey, setVideoKey] = useState("");
  const [sub, setSub] = useState(true);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  return (
    <AuthProvider.Provider
      value={{
        img,
        setImg,
        video,
        setVideo,
        imgKey,
        setImgKey,
        videoKey,
        setVideoKey,
        sub,
        setSub,
        data,
        setData,
        title,
        setTitle,
        description,
        setDescription,
        category,
        setCategory,
        search,
        setSearch,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthProvider);
};
