import React from "react";
import { IoReorderThree } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";

const Navbar = () => {

    
  return (
    <div className="sticky top-0 z-50">
      <div className="w-[100%] h-[60px] bg-gray-50 flex">
        <div className="flex ml-[20px]">
          <IoReorderThree className="w-[35px] h-[35px] mt-[10px] mr-[20px]" />
          <div className="flex mt-[10px]">
            <FaYoutube className="w-[35px] h-[35px] mr-[6px]" />
            <h1 className="text-2xl">YouTube</h1>
          </div>
        </div>
        <div>
          <div className="w-[500px] h-[42px] ml-[280px] mt-[8px] bg-gray-200 rounded-3xl positon">
            <input
              type="text"
              className="p-[10px] w-[500px] h-[42px] rounded-3xl text-[18px]"
            />
            <IoSearch className="absolute top-[20px] left-[950px] w-[20px] h-[20px]" />
          </div>
        </div>
        <div className="flex">
          <Link to="/admin/upload" >
            <div className="flex mt-[10px] ml-[350px] gap-[10px] bg-gray-200 w-[90px] h-[35px] rounded-2xl p-[4px]">
              <FaPlus className="mt-[6px] ml-[3px]" />
              <p className="font-bold">Create</p>
            </div>
          </Link>
          <Link to="/profile">
            <div className="mt-[13px] ml-[20px]">
              <CgProfile className="w-[30px] h-[30px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
