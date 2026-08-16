import { useMutation } from "@tanstack/react-query";
import { removeLike } from "../data/query";
import { useQueryClient } from "@tanstack/react-query";

export const useRemoveLike = (id:string)=>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:()=>removeLike(id),
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["video",id]
            })
        }
    })
}