import React from "react";

import { IoLogoApple } from "react-icons/io";

import { sideBarItemData } from "../constants";
import SidebarItem from "./SidebarItem";

const Siderbar = () => {
  return (
    <div className="w-[200px] h-screen fixed px-2 py-1 border border-gray-300 ">
      <div className="flex items-start my-3 justify-center">
        <IoLogoApple />
        <h1 className="font-bold text-center">
          Metaphile Public <br/> School
        </h1>
      </div>

      <div className="bg-[#73fcf4] p-2 rounded-lg">
        {sideBarItemData.map((item, index) => {
          return (
            <SidebarItem
              ItemName={item.ItemName}
              Icon={item.Icon}
              key={index}
            />
          );
        })}
      </div>

      <div className="  flex justify-center mt-5  ">
         <h1 className="bg-[#73fcf4] px-5 py-1 rounded-md">Logout</h1>
      </div>
    </div>
  );
};

export default Siderbar;
