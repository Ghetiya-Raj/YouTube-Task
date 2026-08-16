import axios from "axios";
import { data } from "react-router";

interface user {
  email: string;
  password: string;
}

export function loginData(user: user) {
  let res = axios.post(
    "https://yt-assesment.onrender.com/api/v1/auth/login",
    user,
  );
  return res;
}

export function getVideoData(page:number) {
  let key = sessionStorage.getItem("accessToken");
  let res = axios.get("https://yt-assesment.onrender.com/api/v1/videos", {
    params: {
      page: page,
    },
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return res;
}

export function getSearchVideo(search: string) {
  let key = sessionStorage.getItem("accessToken");
  let res = axios.get("https://yt-assesment.onrender.com/api/v1/videos", {
    params: {
      search,
    },
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return res;
}

export function getVideo(id: string) {
  let key = sessionStorage.getItem("accessToken");
  let res = axios.get(`https://yt-assesment.onrender.com/api/v1/videos/${id}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });

  return res;
}

export function getUser() {
  let key = sessionStorage.getItem("accessToken");
  let res = axios.get("https://yt-assesment.onrender.com/api/v1/users/me", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return res;
}

export function getRefreshToken() {
  let key = sessionStorage.getItem("refreshToken");
  let res = axios.post(
    "https://yt-assesment.onrender.com/api/v1/auth/refresh",
    {
      refreshToken: key,
    },
  );

  return res;
}

export function getPresignedUrl(data) {
  console.log(data);
  let key = sessionStorage.getItem("accessToken");

  let res = axios.post(
    "https://yt-assesment.onrender.com/api/v1/uploads/thumbnails/presign",
    data,
    {
      headers: {
        Authorization: `Bearer ${key}`,
      },
    },
  );
  return res;
}

export function getPresignedVideo(data) {
  console.log(data);
  let key = sessionStorage.getItem("accessToken");

  let res = axios.post(
    "https://yt-assesment.onrender.com/api/v1/uploads/videos/initiate",
    data,
    {
      headers: {
        Authorization: `Bearer ${key}`,
      },
    },
  );
  return res;
}

export function postlike(id:string, type:string) {
  let key = sessionStorage.getItem("accessToken");


  let res = axios.post(
    `https://yt-assesment.onrender.com/api/v1/videos/${id}/reaction`,
    { type },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    },
  );
  return res;
}

export function removeLike(id:string) {
  let key = sessionStorage.getItem("accessToken");

  console.log(id);
  let res = axios.delete(
    `https://yt-assesment.onrender.com/api/v1/videos/${id}/reaction`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${key}`,
      },
    },
  );
  return res;
}
