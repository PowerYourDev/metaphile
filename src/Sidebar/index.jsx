import React from "react";

import { IoLogoApple } from "react-icons/io";

import { sideBarItemData } from "../constants";
import SidebarItem from "./SidebarItem";

const Siderbar = () => {
  return (
    <div className="w-[180px] h-screen fixed px-2 py-1 border border-gray-300 ">
      <div className="flex items-start my-3 justify-center">
        <IoLogoApple />
        <h1>
          Metaphile Public <br /> School
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
    </div>
  );
};

export default Siderbar;
