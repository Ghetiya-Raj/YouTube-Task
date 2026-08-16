import { useState } from "react";
import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";
import { useImageUpload } from "../hooks/useImageUpload";
import { useAuth } from "../store/store";
import { useVideoUpload } from "../hooks/useVideoUpload";

const Upload = () => {
  const {
    img,
    setImg,
    video,
    setVideo,
    setTitle,
    setDescription,
    setCategory,
  } = useAuth();

  const imagemutation = useImageUpload();
  const videomutation = useVideoUpload();
  // let key = sessionStorage.getItem("accessToken");

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  const [btn, setBtn] = useState(true);

  const navigate = useNavigate();

  async function handleImgUpload() {
    let fileName = img[0].name;
    let contentType = img[0].type;
    console.log(img);

    const obj = {
      fileName,
      contentType,
    };

    await imagemutation.mutate(obj);
  }

  async function handlevideo() {
    const fileName = video.name;
    const fileSize = video.size;
    const contentType = video.type;
    // const CHUNK_SIZE = 5 * 1024 * 1024;
    // const totalParts = Math.ceil(video?.size / CHUNK_SIZE);
    let key = sessionStorage.getItem("accessToken");

    const obj = {
      fileName,
      fileSize,
      contentType,
    };
    await videomutation.mutate(obj);
  }

  async function handleSubmit() {
    setBtn(false);
    try {
      let img1 = await handleImgUpload();
      let video1 = await handlevideo();
    } catch (error) {
      console.log("error");
    }

    // let obj = {
    //   title,
    //   description,
    //   category,
    //   thumbnailKey: imgKey,
    //   videoKey,
    // };

    // let res = await axios.post(
    //   "https://yt-assesment.onrender.com/api/v1/videos",

    //   obj,
    //   {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${key}`,
    //     },
    //   },
    // );
    // setBtn(true);
  }

  return (
    <div>
      <div className="w-[100px] h-[40px] bg-slate-200 rounded-2xl mt-[20px] ml-[20px] flex justify-center items-center gap-[6px]">
        <div className="mt-[3px]">
          <IoMdArrowBack />
        </div>
        <div className="">
          <button className="" onClick={() => navigate("/home")}>
            Back
          </button>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center mt-[40px]">
        Upload Your Video
      </h1>
      {/* <div className="flex justify-center mt-[70px]">
        <div className="w-[500px] h-[500px] bg-slate-200 ">
          <div className="flex flex-col justify-center items-center ml-[20px] mt-[10px] gap-[20px]">
            <label htmlFor="img" className="text-center mt-[20px]">
              Upload image
            </label>
            <input
              type="file"
              id="img"
              className="bg-slate-100 cursor-pointer w-[210px]  p-[10px]"
              onChange={(e) => setImg(e.target.files)}
            />
            <button onClick={handleUpload}>Upload</button>
            <label htmlFor="video" className="text-center mt-[20px]">
              Upload video
            </label>
            <input
              type="file"
              id="video"
              className="bg-slate-100 cursor-pointer w-[210px]  p-[10px]"
              onChange={(e) => setVideo(e.target.files?.[0])}
            />
            <button onClick={handlevideo}>Upload</button>
          </div>
        </div>
      </div> */}

      <div className="w-[500px] h-[500px] bg-slate-100 ml-[510px] mt-[50px]">
        <div className="p-[20px]">
          <div className="flex flex-col gap-[20px]">
            <input
              type="text"
              placeholder="Enter Title"
              className="p-[10px] bg-slate-200 rounded-2xl "
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex gap-[20px]">
              <label className="mt-[10px]" htmlFor="img">
                Enter Image
              </label>
              <input
                type="file"
                id="img"
                className="p-[10px] bg-slate-200"
                onChange={(e) => setImg(e.target.files)}
                accept="image/png, image/jpeg, .png, .jpg, .jpeg, .webg"
              />
            </div>
            <div className="flex gap-[20px]">
              <label className="mt-[10px]" htmlFor="">
                Enter Video
              </label>
              <input
                type="file"
                className="p-[10px] bg-slate-200 ml-[3px]"
                onChange={(e) => setVideo(e.target.files?.[0])}
              />
            </div>
            <label htmlFor="">Description</label>
            <textarea
              placeholder="Enter Description"
              className="p-[10px] bg-slate-200 rounded-2xl "
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex gap-[35px]">
              <label className="mt-[10px]" htmlFor="">
                Categary
              </label>
              <select
                className="bg-slate-200 p-[10px]"
                name=""
                id=""
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="MUSIC">Music</option>
                <option value="GAMING">Gaming</option>
                <option value="SPORTS">Sports</option>
                <option value="EDUCATION">EDUCATION</option>
                <option value="ENTERTAINMENT">ENTERTAINMENT</option>
                <option value="TECHNOLOGY">TECHNOLOGY</option>
                <option value="NEWS">NEWS</option>
              </select>
            </div>
            <button
              className={`mt-[10px] p-[10px] bg-slate-200 rounded-2xl ${btn ? " disabled:opacity-50" : ""}`}
              onClick={handleSubmit}
              disabled={!btn}
            >
              {btn ? "Submit" : "Submitting..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
