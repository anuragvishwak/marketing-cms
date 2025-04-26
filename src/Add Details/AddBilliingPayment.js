import { motion } from "motion/react";
import React from "react";
import { RxCross1 } from "react-icons/rx";

function AddBilliingPayment({ setAddbillingForm }) {
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
          <p className="text-2xl font-bold text-[#2f4858]">
            Add Billing & Payment
          </p>
          <button onClick={() => setAddbillingForm(false)}>
            <RxCross1 />
          </button>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Client</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Client</option>
                <option>Client 1</option>
                <option>Client 2</option>
              </select>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Project</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Project</option>
                <option>Project 1</option>
                <option>Project 2</option>
              </select>
            </div>
          </div>

          <div className="grid my-5 grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Invoice Number</p>
              <input className="border w-full border-gray-300 p-1 rounded" />
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">Invoice Date</p>
              <input
                type="date"
                className="border w-full border-gray-300 p-1 rounded"
              />
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">Due Date</p>
              <input
                type="date"
                className="border w-full border-gray-300 p-1 rounded"
              />
            </div>
          </div>

          <div className="grid mb-5 grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Amount</p>
              <input
                type="number"
                className="border w-full border-gray-300 p-1 rounded"
              />
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Status</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Status</option>
                <option>Paid</option>
                <option>Unpaid</option>
                <option>Partially Paid</option>
              </select>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Payment Mode</p>
              <select className="border w-full border-gray-300 p-1 rounded">
                <option>Select Mode</option>
                <option>Bank Transfer</option>
                <option>Credit Card</option>
                <option>Cash</option>
                <option>Cheque</option>
                <option>UPI</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">
                Transaction ID (if Paid)
              </p>
              <input className="border w-full border-gray-300 p-1 rounded" />
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">
                Upload Invoice Copy (optional)
              </p>
              <input
                type="file"
                className="border w-full border-gray-300 p-1 rounded"
              />
            </div>
          </div>

          <div className="my-5">
            <p className="font-semibold text-[#2f4858]">
              Notes / Payment Details
            </p>
            <textarea className="border w-full border-gray-300 p-1 rounded"></textarea>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-[#9ee493] shadow hover:bg-[#2f4858] text-white rounded py-2 px-3 mt-5">
            Save Billing Info
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default AddBilliingPayment;
