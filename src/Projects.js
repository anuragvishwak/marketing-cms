import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaPlus } from "react-icons/fa";
import AddProjectForm from "./Add Details/AddProjectForm";

function Projects() {
  const [openingProjectForm, setOpeningProjectForm] = useState(false);

  return (
    <div>
      <div className="flex p-3 sm:p-0 items-center bg-[#2f4858] sm:bg-white justify-between sm:block">
        <p className="sm:hidden text-xl text-white font-bold">Projects</p>
        <Navbar />
      </div>
      <div className="sm:p-3">
        <div className="flex items-center justify-between mb-5">
          <p className="text-3xl hidden sm:block text-[#2f4858] font-bold">
            Projects
          </p>
          <button
            onClick={() => {
              setOpeningProjectForm(true);
            }}
            className="bg-[#2f4858] text-sm mt-3 sm:mt-0 sm:text-base mx-3 sm:mx-0 py-1.5 px-4 text-white"
          >
            <div className="flex items-center space-x-2">
              <FaPlus />
              <p className="font-semibold">Add Project</p>
            </div>
          </button>
        </div>
      </div>

      {openingProjectForm && (
        <AddProjectForm setOpeningProjectForm={setOpeningProjectForm} />
      )}
    </div>
  );
}

export default Projects;
