import React from "react";
import Image from "next/image";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
    },
    {
      id: 2,
      name: "Budget",
      icon: PiggyBank,
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
    },
  ];
  return (
    <div className="h-screen p-5 border shadow-sm">
      <Image src={"./logo.svg"} height={100} width={160} />
      <div className="p-5">
        {menuList.map((menu, index) => (
          <h2
            className="flex items-center gap-2 text-gray-500 font-mdeium p-5 
          cursor-pointer rounded-md hover:text-primary hover:bg-blue-100"
          >
            {<menu.icon />}
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 gap-4 flex items-center">
        <UserButton />
        Profile
      </div>
    </div>
  );
}

export default SideNav;
