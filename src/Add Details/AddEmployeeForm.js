import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "motion/react";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../FirebaseConfig";

function AddEmployeeForm({ setOpeningEmployeeForm }) {
  const [employeeName, setEmployeeName] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [reportManager, setReportManager] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNo, setBankAccountNo] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [upiId, setUpiId] = useState("");

  async function addEmployee() {
    try {
      const docRef = await addDoc(collection(database, "employees_details"), {
        employeeName: employeeName,
        contact: contact,
        gender: gender,
        address: address,
        dateOfJoining: dateOfJoining,
        jobTitle: jobTitle,
        department: department,
        reportManager: reportManager,
        officialEmail: officialEmail,
        bankName: bankName,
        bankAccountNo: bankAccountNo,
        ifscCode: ifscCode,
        upiId: upiId,
      });
      console.log("Employee added with ID: ", docRef.id);
      setOpeningEmployeeForm(false);
    } catch (error) {
      console.error("Error adding employee: ", error);
      return { success: false, error };
    }
  }

  return (
    <div className="bg-black z-50 flex justify-center items-center fixed inset-0 bg-opacity-30">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white w-full sm:w-auto h-full overflow-auto sm:h-auto p-5 sm:rounded"
      >
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
                <p className="font-semibold text-[#2f4858]">Employee Name</p>
                <input
                  onChange={(e) => setEmployeeName(e.target.value)}
                  className="border w-full border-gray-300 p-1 rounded"
                ></input>
              </div>
              <div>
                <p className="font-semibold text-[#2f4858]">Contact</p>
                <input
                  onChange={(e) => setContact(e.target.value)}
                  className="border w-full border-gray-300 p-1 rounded"
                ></input>
              </div>
              <div>
                <p className="font-semibold text-[#2f4858]">Gender</p>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  className="border w-full border-gray-300 p-1 rounded"
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Address</p>
              <textarea
                onChange={(e) => setAddress(e.target.value)}
                className="border w-full border-gray-300 p-1 rounded"
              ></textarea>
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
              <input
                onChange={(e) => setJobTitle(e.target.value)}
                className="border w-full border-gray-300 p-1 rounded"
              ></input>
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">Date of Joining</p>
              <input
                onChange={(e) => setDateOfJoining(e.target.value)}
                className="border w-full border-gray-300 p-1 rounded"
              ></input>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Department</p>
              <select
                onChange={(e) => setDepartment(e.target.value)}
                className="border w-full border-gray-300 p-1 rounded"
              >
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
              <select
                onChange={(e) => setReportManager(e.target.value)}
                className="border w-full border-gray-300 p-1 rounded"
              >
                <option>Select Manager</option>
                <option>Ritika</option>
                <option>Jiten</option>
              </select>
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">Official E-Mail</p>
              <input
                onChange={(e) => setOfficialEmail(e.target.value)}
                className="border w-full border-gray-300 p-1 rounded"
              ></input>
            </div>
          </div>
        </div>

        <hr className="my-3" />

        <div>
          <p className="text-[#9ee493] font-semibold text-lg">Bank Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <div>
              <p className="font-semibold text-[#2f4858]">Bank Name</p>
              <input
                onChange={(e) => setBankName(e.target.value)}
                className="border w-full border-gray-300 p-1 rounded"
              ></input>
            </div>
            <div>
              <p className="font-semibold text-[#2f4858]">Bank Account No</p>
              <input
                onChange={(e) => setBankAccountNo(e.target.value)}
                className="border w-full border-gray-300 p-1 rounded"
              ></input>
            </div>

            <div>
              <p className="font-semibold text-[#2f4858]">IFSC Code</p>
              <input
                onChange={(e) => setIfscCode(e.target.value)}
                className="border w-full border-gray-300 p-1 rounded"
              ></input>
            </div>
          </div>

          <div className="">
            <p className="font-semibold text-[#2f4858]">UPI ID</p>
            <input
              onChange={(e) => setUpiId(e.target.value)}
              className="border w-full border-gray-300 p-1 rounded"
            ></input>
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button
            onClick={() => {
              addEmployee();
            }}
            className="bg-[#9ee493] shadow hover:bg-[#2f4858] text-white rounded py-2 px-3 mt-5"
          >
            Create Employee
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default AddEmployeeForm;
