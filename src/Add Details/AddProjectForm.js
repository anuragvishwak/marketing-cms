import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "motion/react";

function AddProjectForm({ setOpeningProjectForm }) {
  return (
    <div className="bg-black z-50 flex justify-center items-center fixed inset-0 bg-opacity-30">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white overflow-auto h-full sm:h-auto p-5 rounded"
      >
        <div className="flex items-center mb-7 justify-between">
          <p className="text-2xl font-bold text-[#2f4858]">Add Project</p>
          <button onClick={() => setOpeningProjectForm(false)}>
            <RxCross1 />
          </button>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Project Name</p>
              <input className="border w-full border-gray-300 p-1 rounded"></input>
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">Client</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Client</option>
                <option>Client1</option>
                <option>Client2</option>
                <option>Client3</option>
              </select>
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">Status</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>

          <div className="grid my-5 grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Start Date</p>
              <input className="border w-full border-gray-300 p-1 rounded"></input>
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">End Date</p>
              <input className="border w-full border-gray-300 p-1 rounded"></input>
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">Team Members</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Member</option>
                <option>Member 1</option>
                <option>Member 2</option>
                <option>Member 3</option>
              </select>
            </div>
          </div>

          <div className="grid mb-5 grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Budget</p>
              <input className="border w-full border-gray-300 p-1 rounded"></input>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Priority</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Description</p>
              <textarea className="border w-full border-gray-300 p-1 rounded"></textarea>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Notes / Remarks</p>
              <textarea className="border w-full border-gray-300 p-1 rounded"></textarea>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-[#9ee493] shadow hover:bg-[#2f4858] text-white rounded py-2 px-3 mt-5">
            Create Employee
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default AddProjectForm;
