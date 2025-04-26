import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Notification({ setOpeningNotification }) {
  const [notificationForm, setNotificationForm] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    setSelectedMessage({
      title: "Regarding Termination of Employement",
      body: "After careful evaluation of your performance over the past few months, we regret to inform you that your performance has not met the expectations set for your role as Sofware Developer at Softcoding Solutions. Despite multiple discussions and support provided to help you improve, the required progress has not been achieved.",
    });
  }, []);

  return (
    <div className="bg-black z-50 flex justify-end items-center fixed inset-0 bg-opacity-30">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 300 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
        }}
        className="bg-white rounded overflow-auto h-screen w-full sm:w-[500px] sm:mx-10 sm:mt-40"
      >
        <div className="flex items-center p-2.5 bg-[#2f4858] text-white justify-between">
          <p className="text-xl font-bold">Notification Panel</p>

          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setNotificationForm(!notificationForm)}
              className='bg-[#9ee493] hover:bg-white shadow text-[#2f4858] font-semibold rounded-full py-0.5 px-3'
            >
              {notificationForm === false ? "+ Add" : "x close"}
            </button>
            <button onClick={() => setOpeningNotification(false)}>
              <RxCross1 size={25} />
            </button>
          </div>
        </div>

        <div className="p-5">
          <div className="w-full">
            {notificationForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col w-full">
                  <input
                    className="border-b border-gray-400 italic p-2 mt-5"
                    type="text"
                    placeholder="Title"
                  />
                  <textarea
                    className="border-b border-gray-400 italic p-2 mt-5"
                    placeholder="Description..."
                  />
                </div>
                <div className="flex justify-end">
                  <button className="bg-[#9ee493] shadow hover:bg-[#2f4858] text-white rounded-full py-2 px-3 mt-5">
                    <div className="flex items-center justify-center space-x-2">
                      <p className="font-semibold">Send</p> <IoSend />
                    </div>
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          <div className="mt-5">
            <div className="border-y border-gray-300 py-2">
              <div className="flex items-center space-x-2">
                <p className="font-bold text-white py-2 px-3.5 rounded-full bg-orange-500">
                  JJ
                </p>
                <div>
                  <p className="font-semibold ">Regarding Jemma Jewellers</p>
                  <p className="text-sm p-0 m-0 text-gray-500 italic">
                    jiten@gmail.com
                  </p>
                </div>
              </div>
              <p className="mt-2 text-gray-500">
                Please upload 400 photos to the editor immediately. And also
                give your status.
              </p>
            </div>

            <div className="border-y border-gray-300 py-2">
              <div className="flex items-center space-x-2">
                <p className="font-bold text-white py-2 px-2.5 rounded-full bg-red-500">
                  RV
                </p>
                <div>
                  <p className="font-semibold ">Regarding Jemma Jewellers</p>
                  <p className="text-sm p-0 m-0 text-gray-500 italic">
                    ritika@gmail.com
                  </p>
                </div>
              </div>
              <p className="mt-2 text-gray-500">
                Please upload 400 photos to the editor immediately. And also
                give your status.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Notification;
