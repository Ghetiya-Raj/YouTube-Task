import { getVideoData } from "../data/query";
import { useQuery } from "@tanstack/react-query";

export const useVideoData = (page:number)=>{
    return useQuery({
        queryKey:["video",page],
        queryFn:()=>getVideoData(page)
    })
}