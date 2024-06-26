import React from "react";

function CreateBudget() {
  return (
    <div className="mt-7">
      <div
        className="bg-slate-200 p-10 rounded-md items-center flex flex-col border-2 
      border-dashed cursor-pointer hover:shadow-md"
      >
        <h2 className="text-3xl">+</h2>
        <h2>Create New Budget</h2>
      </div>
    </div>
  );
}

export default CreateBudget;
