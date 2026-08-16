import { useMutation } from "@tanstack/react-query";
import { postlike } from "../data/query";
import { useQueryClient } from "@tanstack/react-query";

export const useLike = (id:string,type:string)=>{
    const queryClient = useQueryClient();
    console.log(id);
    return useMutation({
        mutationFn: ()=>postlike(id,type),
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["video",id]
            })
        }
    })
}