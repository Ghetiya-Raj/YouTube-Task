import { useQuery } from "@tanstack/react-query";
import { getVideo } from "../data/query";
import { string } from "yup";

export const useVideo = (id : string | undefined) => {
  return useQuery({
    queryKey: ["video", id],
    queryFn: () => getVideo(id || ''),
    enabled: !!id,
  });
};
