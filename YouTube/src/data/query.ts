import axios from "axios";

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

export function getVideoData() {
  let key = sessionStorage.getItem("accessToken");
  let res = axios.get("https://yt-assesment.onrender.com/api/v1/videos", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return res;
}

export function getUser() {
  let key = sessionStorage.getItem("accessToken");
  let res = axios.get("https://yt-assesment.onrender.com/api/v1/user/me", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });

  return res;
}
