"use client";

import React from "react";
import Image from "next/image";
// import Button from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image src={"./logo.svg"} width={160} height={100} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-400 sm:w-auto"
          href="/sign-in"
        >
          Get Started
        </a>
      )}
    </div>
  );
}

export default Header;
