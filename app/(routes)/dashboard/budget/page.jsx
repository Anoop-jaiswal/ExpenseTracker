import React from "react";
import BudgetsList from "./_components/BudgetsList";

function page() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">My Budgets</h2>
      <BudgetsList />
    </div>
  );
}

export default page;
