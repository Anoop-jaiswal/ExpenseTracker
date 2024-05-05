"use client";

import React, { useEffect } from "react";
import SideNav from "./_components/sidenav";
import DashboardHeader from "./_components/DashboardHeader";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "../../../utils/dbConfig";
import { Budgets } from "../../../utils/schema";

function Dashboardlayout({ children }) {
  const { user } = useUser();
  const router = useRouter();

  const checkUserBudgets = async () => {
    const results = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    console.log(results);
    if (results?.length === 0) {
      router.push("/dashboard/budget");
    }
  };

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

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
