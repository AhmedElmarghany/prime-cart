"use client";

import { RiMenu2Line } from "@remixicon/react";
import { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <RiMenu2Line className="hover:text-primary hoverEffect md:hidden hover:cursor-pointer" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
