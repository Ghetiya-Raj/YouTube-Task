import { useQuery } from "@tanstack/react-query";
import { getUser } from "../data/query";

export const useUser = () => {
  return useQuery({
    queryKey: ["User"],
    queryFn: getUser,
  });
};
