import { useNavigate } from "react-router";
import { loginData } from "../data/query";
import {
  MutationCache,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginData,
    onSuccess: (data) => {
      sessionStorage.setItem("accessToken", data.data.data.accessToken);
      sessionStorage.setItem("refreshToken", data.data.data.refreshToken);
      navigate("/home");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
