import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaPlus } from "react-icons/fa";
import AddEmployeeForm from "./Add Details/AddEmployeeForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./FirebaseConfig";

function Employees() {
  const [openingEmployeeForm, setOpeningEmployeeForm] = useState(false);
  const [gatheringEmployeeData, setGatheringEmployeeData] = useState([]);

  async function getEmployeeData() {
    try {
      const querySnapshot = await getDocs(
        collection(database, "employees_details")
      );
      const employees = [];
      querySnapshot.forEach((doc) => {
        employees.push({ id: doc.id, ...doc.data() });
      });
      setGatheringEmployeeData(employees);
    } catch (error) {
      console.error("Error fetching employees: ", error);
    }
  }

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <div>
      <div className="flex p-3 sm:p-0 items-center bg-[#2f4858] sm:bg-white justify-between sm:block">
        <p className="sm:hidden text-xl text-white font-bold">Employees</p>
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
            className="bg-[#2f4858] text-sm mt-3 sm:mt-0 sm:text-base mx-3 sm:mx-0 py-1.5 px-4 text-white"
          >
            <div className="flex items-center space-x-2">
              <FaPlus />
              <p className="font-semibold">Add Employee</p>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 h-[600px] overflow-auto p-3 bg-gray-100 shadow-inner rounded-xl gap-5">
          {gatheringEmployeeData.map((emp) => (
            <div className="bg-white rounded-xl border shadow-xl ">
              <div className="bg-[#2f4858] rounded-xl p-3 text-center text-white">
                <p className="text-2xl font-bold">{emp.employeeName}</p>
                <p>{emp.jobTitle}</p>
                <p>{emp.address}</p>
              </div>
              <div className="p-3">
                <div>
                  <p className="text-[#9ee493] text-xl font-bold">
                    Basic Details
                  </p>
                  <div className="text-[#2f4858]">
                    <div className="flex items-center justify-between">
                      <p>Phone:</p>
                      <p>+91 {emp.contact}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Gender:</p>
                      <p>{emp.gender}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#9ee493] text-xl font-bold">
                    Professional Details
                  </p>
                  <div className="text-[#2f4858]">
                    <div className="flex items-center justify-between">
                      <p>Official Email:</p>
                      <p>{emp.officialEmail}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Date of Joining:</p>
                      <p>{emp.dateOfJoining}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Department:</p>
                      <p>{emp.department}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Report Manager:</p>
                      <p>{emp.reportManager}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#9ee493] text-xl font-bold">
                    Bank Details
                  </p>
                  <div className="text-[#2f4858]">
                    <div className="flex items-center justify-between">
                      <p>Bank Name:</p>
                      <p>{emp.bankName}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>
                        Bank Acc No:
                      </p>
                      <p>{emp.bankAccountNo}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>IFSC Code:</p>
                      <p>{emp.ifscCode}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>UPI Id:</p>
                      <p>{emp.upiId}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openingEmployeeForm && (
        <AddEmployeeForm setOpeningEmployeeForm={setOpeningEmployeeForm} />
      )}
    </div>
  );
}

export default Employees;
