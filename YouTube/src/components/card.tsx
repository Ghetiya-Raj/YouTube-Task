import React from "react";

const card = ({title,thumbnailKey,owner,viewCount}) => {
  return (
    <div className="">
      <div className="w-[340px] h-[360px] rounded-2xl">
        <div className="">
          <img
            className="h-[220px] w-[400px] object-cover rounded-2xl"
            src={thumbnailKey}
            alt=""
          />
        </div>
        <div className="mt-[10px] flex gap-1">
          <div className="h-[50px] w-[50px] rounded-[50%] mt-[5px]">
            <img className="h-[40px] w-[40px] rounded-[50%]" src="https://images.unsplash.com/photo-1678329885908-85eb768aa61b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlkZW8lMjB0aHVtYm5haWx8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <p className="h-fit w-[310px] overflow-hidden text-[18px] font-bold">
            {title}
          </p>
        </div>
        <div className="mt-[2px] ml-[54px] text-gray-500">
          <p className="">{owner}</p>
          <div className="mt-[2px] flex gap-[5px]">
            <p>{`${viewCount}M views`}</p>
            <p>• 8 months ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
