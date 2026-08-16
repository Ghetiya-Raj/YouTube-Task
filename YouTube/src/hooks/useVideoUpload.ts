import { useMutation } from "@tanstack/react-query";
import { getPresignedVideo } from "../data/query";
import { useAuth } from "../store/store";
import axios from "axios";

export const useVideoUpload = () => {
  const CHUNK_SIZE = 5 * 1024 * 1024;

  const {
    video,
    setData,
    title,
    description,
    category,
    imgKey,
    setBtn,
  } = useAuth();
  const totalParts = Math.ceil(video?.size / CHUNK_SIZE);
  let key = sessionStorage.getItem("accessToken");

  const parts = new Array();
  return useMutation({
    mutationFn: getPresignedVideo,
    onSuccess: async (data) => {
      let temp = data.data.data;
      setData(temp);
      let partNumber = 1;
      while (partNumber <= temp.totalParts) {
        console.log("hii");
        const start = (partNumber - 1) * CHUNK_SIZE;
        const end = Math.min(start + CHUNK_SIZE, video?.size);
        const fileChunk = video?.slice(start, end);

        let res = await axios.post(
          `https://yt-assesment.onrender.com/api/v1/uploads/videos/${temp.uploadId}/parts/presign`,
          { partNumbers: [partNumber] },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${key}`,
            },
          },
        );

        let res2 = await axios.put(`${res.data.data?.[0].url}`, fileChunk);
        parts.push({
          partNumber: partNumber,
          eTag: res2.headers.get("etag").replace(/['"]+/g, ""),
        });

        // console.log(parts);
        partNumber++;
      }

      let res3 = await axios.request({
        method: "POST",
        url: `https://yt-assesment.onrender.com/api/v1/uploads/videos/${temp.uploadId}/complete`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        data: {
          parts,
        },
      });

      // console.log(res3.data.data.videoKey)
      // setVideoKey(res3.data.data.videoKey);

      let obj = {
        title,
        description,
        category,
        thumbnailKey: imgKey,
        videoKey:res3.data.data.videoKey,
      };

      console.log(obj);
      let res = await axios.post(
        "https://yt-assesment.onrender.com/api/v1/videos",

        obj,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
        },
      );

      alert("Video uploaded Successfully")
      setBtn(true);
      // console.log(btn);
    },
    onError: () => {
      console.log("error");
    },
  });
};
