import React from 'react'

import { RxDashboard } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

import IconComponent from '../common/IconComponent';


const Header = () => {
  return (
    <div className="flex justify-between items-center rounded-lg bg-[#73fcf4]  h-[50px] px-3">
      <div className="flex items-center">
        <RxDashboard />
        <h1>Dashboard</h1>
      </div>

      <div className="flex gap-x-2 items-center">
        <div className="flex items-center bg-white px-3 py-1 rounded-md">
          <input
            type="text"
            placeholder="Search here......"
            className="border-none outline-none pr-1"
          />
          <IoMdSearch />
        </div>

        <IconComponent
          Icon={IoIosNotificationsOutline}
          size={20}
          color="white"
        />

        <IconComponent Icon={TiMessages} size={20} color="white" />
        <IconComponent Icon={CgProfile} size={30} color="transparent" />
      </div>
    </div>
  );
};

export default Header