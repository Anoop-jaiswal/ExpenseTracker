import React from "react";
import SideNav from "./_components/sidenav";
import DashboardHeader from "./_components/DashboardHeader";

function Dashboardlayout({ children }) {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <div className="border shadow-sm p-3">
          <DashboardHeader />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Dashboardlayout;
