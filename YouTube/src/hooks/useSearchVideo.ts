import { useQuery } from "@tanstack/react-query";
import { getSearchVideo } from "../data/query";

export const useSearchVideo = (search: string) => {
  return useQuery({
    queryKey: ["video", search],
    queryFn: () => getSearchVideo(search),
  });
};
