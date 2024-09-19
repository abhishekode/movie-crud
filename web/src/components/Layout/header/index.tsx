import React from "react";
import TopHeader from "./TopHeader";
import StickyNav from "./StickyNav";

const Navbar = () => {

  return (
    <div className=" bg-transparent">
      <TopHeader />
      <StickyNav />
    </div>
  );
};

export default Navbar;
