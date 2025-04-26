import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaPlus } from "react-icons/fa";
import AddEmployeeForm from "./Add Details/AddEmployeeForm";

function Employees() {
  const [openingEmployeeForm, setOpeningEmployeeForm] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between sm:block">
        <p className="sm:hidden text-xl p-3 text-[#2f4858] font-bold">Employees</p>
        <Navbar />
      </div>
      <div className="sm:p-3">
        <div className="flex items-center justify-between mb-5">
          <p className="text-3xl hidden sm:block text-[#2f4858] font-bold">
            Employees
          </p>
          <button
            onClick={() => {
              setOpeningEmployeeForm(true);
            }}
            className="bg-[#2f4858] mx-3 sm:mx-0 py-1.5 px-4 text-white"
          >
            <div className="flex items-center space-x-2">
              <FaPlus />
              <p className="font-semibold">Add Employee</p>
            </div>
          </button>
        </div>
      </div>

      {openingEmployeeForm && (
        <AddEmployeeForm setOpeningEmployeeForm={setOpeningEmployeeForm} />
      )}
    </div>
  );
}

export default Employees;
