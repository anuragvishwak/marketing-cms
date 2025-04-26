import React from "react";
import { BiCross } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { motion } from "motion/react";

function AddEmployeeForm({ setOpeningEmployeeForm }) {
  return (
    <div className="bg-black z-50 flex justify-center items-center fixed inset-0 bg-opacity-30">
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white w-96 sm:w-auto h-[600px] mx-5 overflow-auto sm:h-auto p-5 rounded">
        <div className="flex items-center mb-7 justify-between">
          <p className="text-2xl font-bold text-[#2f4858]">Add Employee</p>
          <button onClick={() => setOpeningEmployeeForm(false)}>
            <RxCross1 />
          </button>
        </div>

        <div>
          <p className="text-[#9ee493] font-semibold text-lg">
            Basic Information
          </p>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
              <div>
                <p className="font-semibold text-[#2f4858]">Name</p>
                <input className="border w-full border-gray-300 p-1 rounded"></input>
              </div>
              <div>
                <p className="font-semibold text-[#2f4858]">Contact</p>
                <input className="border w-full border-gray-300 p-1 rounded"></input>
              </div>
              <div>
                <p className="font-semibold text-[#2f4858]">Gender</p>
                <select className="border w-full border-gray-300 p-1 rounded">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Address</p>
              <textarea className="border w-full border-gray-300 p-1 rounded"></textarea>
            </div>
          </div>
        </div>

        <hr className="my-3" />

        <div>
          <p className="text-[#9ee493] font-semibold text-lg">
            Professional Information
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Job Title / Role</p>
              <input className="border w-full border-gray-300 p-1 rounded"></input>
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">Date of Joining</p>
              <input className="border w-full border-gray-300 p-1 rounded"></input>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Department</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Department</option>
                <option>Photography</option>
                <option>Videography</option>
                <option>Editing</option>
                <option>Social Media Management</option>
                <option>Content Management</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Report Manager</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Manager</option>
                <option>Ritika</option>
                <option>Jiten</option>
              </select>
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">Official E-Mail</p>
              <input className="border w-full border-gray-300 p-1 rounded"></input>
            </div>
          </div>
        </div>

        <hr className="my-3" />

        <div>
          <p className="text-[#9ee493] font-semibold text-lg">Bank Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Bank Name</p>
              <input className="border w-full border-gray-300 p-1 rounded"></input>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Bank Account No</p>
              <input className="border w-full border-gray-300 p-1 rounded"></input>
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">IFSC Code</p>
              <input className="border w-full border-gray-300 p-1 rounded"></input>
            </div>
          </div>

          <div className="">
            <p className="font-semibold text-[#2f4858]">UPI ID</p>
            <input className="border w-full border-gray-300 p-1 rounded"></input>
          </div>
        </div>

        <div className="flex justify-end mt-5">
            <button className="bg-[#9ee493] shadow hover:bg-[#2f4858] text-white rounded py-2 px-3 mt-5">Create Employee</button>
        </div>
      </motion.div>
    </div>
  );
}

export default AddEmployeeForm;
