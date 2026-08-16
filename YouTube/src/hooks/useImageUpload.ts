import { useMutation } from "@tanstack/react-query";
import { getPresignedUrl } from "../data/query";
import axios from "axios";
import { useAuth } from "../store/store";

export const useImageUpload = (data) => {
  const { img, setImgKey } = useAuth();
  return useMutation({
    mutationFn: getPresignedUrl,
    onSuccess: (data) => {
      console.log(data.data.data.url);
      setImgKey(data.data.data.key);
      let res = axios.put(`${data.data.data.url}`, img[0]);
      console.log(res);
    },
    onError: () => {
      console.log("error");
    },
  });
};
