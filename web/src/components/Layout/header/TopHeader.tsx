import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import SocialLinks from "../footer/SocialLinks";

const TopHeader = () => {
  return (
    <div className="bg-blue-600 text-gray-100 z-[999999] px-4">
      <nav className="max-w-7xl py-3 mx-auto">
        <div className="flex justify-between">
          <div className="flex text-sm gap-4">
            <p className="flex items-center">
              <BiLocationPlus className="mr-1" />
              1st floor, Chahat complex, Sector-15 , Noida, Uttar Pradesh
            </p>
          </div>
          <div>
            <ul className="lg:flex hidden text-sm">
              <li>
                <SocialLinks />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopHeader;
