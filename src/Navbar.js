import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import Notification from "./Notification";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openingNotification, setOpeningNotification] = useState(false);
  const [openingNavbar, setopeningNavbar] = useState(false);

  return (
    <div className="flex items-center justify-between sm:m-3">
      <div className="hidden sm:flex items-center justify-center space-x-10 text-lg font-semibold">
        <button
          onClick={() => navigate("/")}
          className={
            location.pathname === "/" ? "text-[#9ee493]" : "text-[#2f4858]"
          }
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/Employees")}
          className={
            location.pathname === "/Employees"
              ? "text-[#9ee493]"
              : "text-[#2f4858]"
          }
        >
          Employees
        </button>
        <button
          onClick={() => navigate("/Projects")}
          className={
            location.pathname === "/Projects"
              ? "text-[#9ee493]"
              : "text-[#2f4858]"
          }
        >
          Projects
        </button>
        <button
          onClick={() => navigate("/Clients")}
          className={
            location.pathname === "/Clients"
              ? "text-[#9ee493]"
              : "text-[#2f4858]"
          }
        >
          Clients
        </button>
        <button
          onClick={() => navigate("/BilllingPayments")}
          className={
            location.pathname === "/BilllingPayments"
              ? "text-[#9ee493]"
              : "text-[#2f4858]"
          }
        >
          Billing & Payments
        </button>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => {
            setopeningNavbar(!openingNavbar);
          }}
          className="sm:bg-[#2f4858] sm:hidden text-white sm:p-2.5 rounded-full"
        >
          <FaBars />
        </button>
        <button
          className="sm:bg-[#2f4858] text-white sm:p-2 rounded-full"
          onClick={() => setOpeningNotification(!openingNotification)}
        >
          <IoMdNotifications size={22} />
        </button>
        <button className="sm:bg-[#2f4858] text-white sm:p-2.5 rounded-full">
          <FaUser />
        </button>
      </div>

      {openingNavbar && (
        <div className="fixed top-10 right-10 z-50 sm:hidden">
          <div className="flex flex-col p-4 shadow-xl bg-white h-auto w-full">
          <button
            onClick={() => navigate("/")}
            className={
              location.pathname === "/" ? "text-[#9ee493]" : "text-[#2f4858]"
            }
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/Employees")}
            className={
              location.pathname === "/Employees"
                ? "text-[#9ee493]"
                : "text-[#2f4858]"
            }
          >
            Employees
          </button>
          <button
            onClick={() => navigate("/Projects")}
            className={
              location.pathname === "/Projects"
                ? "text-[#9ee493]"
                : "text-[#2f4858]"
            }
          >
            Projects
          </button>
          <button
            onClick={() => navigate("/Clients")}
            className={
              location.pathname === "/Clients"
                ? "text-[#9ee493]"
                : "text-[#2f4858]"
            }
          >
            Clients
          </button>
          <button
            onClick={() => navigate("/BilllingPayments")}
            className={
              location.pathname === "/BilllingPayments"
                ? "text-[#9ee493]"
                : "text-[#2f4858]"
            }
          >
            Billing & Payments
          </button>
        </div>
          </div>
      )}

      {openingNotification && (
        <Notification setOpeningNotification={setOpeningNotification} />
      )}
    </div>
  );
}

export default Navbar;
