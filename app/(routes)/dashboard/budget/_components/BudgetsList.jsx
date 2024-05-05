import React from "react";
import CreateBudget from "./CreateBudget";

function BudgetsList() {
  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        <CreateBudget />
      </div>
    </div>
  );
}

export default BudgetsList;
