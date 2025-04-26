import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "motion/react";

function AddClientForm({ setOpeningClientForm }) {
  return (
    <div className="bg-black z-50 flex justify-center items-center fixed inset-0 bg-opacity-30">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white w-full sm:w-auto h-full overflow-auto sm:h-auto p-5 rounded"
      >
        <div className="flex items-center mb-7 justify-between">
          <p className="text-2xl font-bold text-[#2f4858]">Add Client</p>
          <button onClick={() => setOpeningClientForm(false)}>
            <RxCross1 />
          </button>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Client Name</p>
              <input className="border w-full border-gray-300 p-1 rounded" />
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Contact Person</p>
              <input className="border w-full border-gray-300 p-1 rounded" />
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Email</p>
              <input
                type="email"
                className="border w-full border-gray-300 p-1 rounded"
              />
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Phone Number</p>
              <input
                type="tel"
                className="border w-full border-gray-300 p-1 rounded"
              />
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Company Name</p>
              <input className="border w-full border-gray-300 p-1 rounded" />
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Website (optional)</p>
              <input className="border w-full border-gray-300 p-1 rounded" />
            </div>
          </div>

          <div className="grid my-5 grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Client Type</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Type</option>
                <option>Corporate</option>
                <option>Individual</option>
                <option>Agency</option>
              </select>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">
                Upload Logo (optional)
              </p>
              <input
                type="file"
                className="border w-full border-gray-300 p-1 rounded"
              />
            </div>
          </div>

          <div className="grid my-5 grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Address</p>
              <textarea className="border w-full border-gray-300 p-1 rounded"></textarea>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">
                Billing Address (optional)
              </p>
              <textarea className="border w-full border-gray-300 p-1 rounded"></textarea>
            </div>
          </div>

          

          <div>
            <p className="font-semibold text-[#2f4858]">
              Notes / Special Instructions
            </p>
            <textarea className="border w-full border-gray-300 p-1 rounded"></textarea>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-[#9ee493] shadow hover:bg-[#2f4858] text-white rounded py-2 px-3 mt-5">
            Add Client
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default AddClientForm;
