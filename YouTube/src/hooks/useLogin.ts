import { useNavigate } from "react-router";
import { loginData } from "../data/query";
import {
  useMutation,
} from "@tanstack/react-query";
import { useAuth } from "../store/store";

export const useLogin = () => {
 
  const navigate = useNavigate();
  const {setSub} = useAuth();
  return useMutation({
    mutationFn: loginData,
    onSuccess: (data) => {
      sessionStorage.setItem("accessToken", data.data.data.accessToken);
      sessionStorage.setItem("refreshToken", data.data.data.refreshToken);
      navigate("/home");
      setSub(true);
    },
    onError: (error) => {
      const msg = error.response.data.error.message;
      alert(msg);
      setSub(true);
    },
  });
};
