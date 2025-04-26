import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [currentTab, setcurrentTab] = useState("Dashboard");
  const [openingNotification, setOpeningNotification] = useState(false);


console.log(currentTab)

  return (
    <div className="flex items-center justify-between m-3">
     
      <div className="hidden sm:flex items-center justify-center space-x-10 text-lg font-semibold ">
        <button
          onClick={() => {
            setcurrentTab("Dashboard");
            navigate("/");
          }}
          className={currentTab === "Dashboard" ? "text-[#9ee493]" : "text-[#2f4858]"}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            setcurrentTab("Employees");
            navigate("/Employees");
          }}
          className={currentTab === "Employees" ? "text-[#9ee493]" : "text-[#2f4858]"}
        >
          Employees
        </button>
        <button
          onClick={() => {
            setcurrentTab("Projects");
            navigate("/Projects");
          }}
          className={currentTab === "Projects" ? "text-[#9ee493]" : "text-[#2f4858]"}
        >
          Projects
        </button>
        <button
          onClick={() => {
            setcurrentTab("Clients");
            navigate("/Clients");
          }}
          className={currentTab === "Clients" ? "text-[#9ee493]" : "text-[#2f4858]"}
        >
          Clients
        </button>
        <button
          onClick={() => {
            setcurrentTab("Billing & Payments");
            navigate("/Billing & Payments");
          }}
          className={
            currentTab === "Billing & Payments" ? "text-[#9ee493]" : "text-[#2f4858]"
          }
        >
          Billing & Payments
        </button>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <button className="bg-[#2f4858] text-white p-2 rounded-full" onClick={() => setOpeningNotification(!openingNotification)}>
            <IoMdNotifications size={22} />
        </button>
        <button className="bg-[#2f4858] text-white p-2.5 rounded-full">
          <FaUser/>
        </button>
      </div>

      {openingNotification && (
        <Notification setOpeningNotification={setOpeningNotification} />
      )}
    </div>
  );
}

export default Navbar;
