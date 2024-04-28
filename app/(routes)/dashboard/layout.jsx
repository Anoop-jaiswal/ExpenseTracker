import React from "react";
import SideNav from "./_components/sidenav";

function Dashboardlayout({ children }) {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64"> {children}</div>
    </div>
  );
}

export default Dashboardlayout;
