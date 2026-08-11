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
  let key =  sessionStorage.getItem("accessToken")
  let res = axios.get("https://yt-assesment.onrender.com/api/v1/videos", {
  
  });
  return res;
}
