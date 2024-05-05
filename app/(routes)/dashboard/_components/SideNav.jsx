"use client";

import Image from "next/image";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budget",
      icon: PiggyBank,
      path: "/dashboard/budget",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-5 border shadow-sm">
      <Image src={"./logo.svg"} height={100} width={160} alt="logo" />
      <div className="p-5">
        {menuList.map((menu, index) => (
          <Link href={menu.path}>
            <h2
              className={`flex items-center gap-2 text-gray-500 font-mdeium p-5 
               cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 mt-2
               ${path == menu.path && "text-primary bg-blue-100"}`}
            >
              {<menu.icon />}
              {menu.name}
            </h2>
          </Link>
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
