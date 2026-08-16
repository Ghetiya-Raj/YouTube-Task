import { useMutation } from "@tanstack/react-query";
import { getRefreshToken } from "../data/query";

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: getRefreshToken,
    onSuccess: (data) => {
      console.log(data);
      const acToken = data.data.data.accessToken;
      const reToken = data.data.data.refreshToken;
      sessionStorage.setItem("accessToken", acToken);
      sessionStorage.setItem("refreshToken", reToken);
    },
    onError: () => {
        // alert("Token can not be update");
    },
  });
};
