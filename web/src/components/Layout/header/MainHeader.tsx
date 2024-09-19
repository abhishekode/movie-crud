import Link from "next/link";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";

const MainHeader = () => {
  return (
    <div className="bg-blue-600 text-gray-100 h-36">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MdAddCall className="text-3xl" />
            <div className="">
              <p className="font-semibold">Call Now</p>
              <p>+012 345 6789</p>
            </div>
          </div>
          <div className=""><Link href='/'>Crystal Pathshala</Link></div>
          <div className="flex items-center gap-2">
            <IoMdMail className="text-3xl" />
            <div className="">
              <p className="font-bold">Mail Now</p>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
