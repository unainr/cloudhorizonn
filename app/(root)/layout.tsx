import NavbarWrapper from "@/components/headers/NavbarWrapper";
import Sidebar from "@/components/headers/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarWrapper />
      <div className="flex">
        <aside className="hidden md:block  ">
          <Sidebar />
        </aside>
        <main className="flex-1 overflow-y-auto p-6 ">
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;
