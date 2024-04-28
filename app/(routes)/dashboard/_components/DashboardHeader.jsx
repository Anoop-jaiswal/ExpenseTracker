import { UserButton } from "@clerk/nextjs";
import React from "react";

function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>SearchBar</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardHeader;
