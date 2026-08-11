import { getVideoData } from "../data/query";
import { useQuery } from "@tanstack/react-query";

export const useVideo = ()=>{
    return useQuery({
        queryKey:["video"],
        queryFn:getVideoData
    })
}