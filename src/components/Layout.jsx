import React from "react";
import SideNav from "./SideNav";

export default function ({ children }) {
  return (
    <div className="flex  h-screen">
      <SideNav />
      <div className="w-[calc(100vw-250px)] bg-secondry py-7 px-8">
        {children}
      </div>
    </div>
  );
}
