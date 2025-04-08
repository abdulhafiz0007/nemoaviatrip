import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import axios from "axios";


export const Flights = () => {
   const { til } = useContext(LangContext);
   const [returnActive, setReturnActive] = useState(false);
   const fromRef = useRef();
   const toRef = useRef();
   const deparetureRef = useRef();
   const returnRef = useRef();
   const passengersRef = useRef();

   const sendMessage = (evt) => {
      evt.preventDefault();
      const token = "8180736086:AAGOE1f8Sv39f5jrU4fsaWmbnJtLzxCr240";
      const chat_id = "6552496082";
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const fromValue = fromRef.current.value;
      const toValue = toRef.current.value;
      const deparetureValue = deparetureRef.current.value;
      const returnValue = returnRef.current.value;
      const passengersValue = passengersRef.current.value;
      if (!fromValue || !toValue || !deparetureValue || !passengersValue) {
         toast.error("Please fill in all required fields.");
         return;
      }
      if (passengersValue <= 0) {
         toast.error("Number of passengers must be greater than 0.");
         return;
      }
      if (returnActive && !returnValue) {
         toast.error("Please enter a return date.");
         return;
      }
      const messageContent = `Qayerdan: ${fromValue} \nQayerga: ${toValue} \nJo'nash sanasi: ${deparetureValue} \nQaytish sanasi: ${returnValue} \nYo'lovchilar: ${passengersValue}`;
      axios({
         url: url,
         method: "POST",
         data: {
            chat_id: chat_id,
            text: messageContent,
         },
      })
         .then((res) => {
            if (res.status === 200) {
               toast.success("Message sent!");
            }
         })
         .catch((err) => toast.error("Failed to sent!"));
   };

   return (
      <div id="flights" className="py-[90px] bg-[#F3F4F6] px-[20px]">
         <div className="lg:w-[1216px] m-auto">
            <h2 className="text-[30px] font-bold mb-[30px]">
               {lang[til].flights.title}
            </h2>
            <form
               onSubmit={sendMessage}
               className="p-[24px] rounded-xl shadow-xl bg-white"
            >
               <div className="mb-[20px]">
                  <button
                     type="button"
                     onClick={() => setReturnActive(false)}
                     className={` ${
                        returnActive
                           ? "bg-[#F3F4F6] text-[#4B5563]"
                           : "text-white bg-[#F26522]"
                     } px-[20px] text-[#4B5563] py-[10px] font-medium rounded-lg mr-4 cursor-pointer `}
                  >
                     {lang[til].flights.send}
                  </button>
                  <button
                     type="button"
                     onClick={() => setReturnActive(true)}
                     className={` ${
                        returnActive
                           ? "bg-[#F26522] text-white"
                           : "bg-[#F3F4F6]"
                     } text-[#4B5563] px-[20px] py-[10px] font-medium rounded-lg cursor-pointer`}
                  >
                     {lang[til].flights.return}
                  </button>
               </div>
               <ul className="flex flex-col lg:flex-row lg:gap-2 gap-5 flex-wrap items-center justify-between">
                  <li className="flex flex-col w-full md:w-[280px]">
                     <label
                        className="mb-1 font-medium text-[#4B5563]"
                        htmlFor=""
                     >
                        {lang[til].flights.from}
                     </label>
                     <input
                        ref={fromRef}
                        className="outline-none w-full border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                        type="text"
                        placeholder=""
                     />
                  </li>
                  <li className="flex flex-col w-full md:w-[280px]">
                     <label
                        className="mb-1 font-medium text-[#4B5563]"
                        htmlFor=""
                     >
                        {lang[til].flights.to}
                     </label>
                     <input
                        ref={toRef}
                        className=" outline-none w-full border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                        type="text"
                        placeholder=""
                     />
                  </li>
                  <li className="flex flex-col w-full md:w-[280px]">
                     <label
                        className="mb-1 font-medium text-[#4B5563]"
                        htmlFor=""
                     >
                        {lang[til].flights.deparetureData}
                     </label>
                     <input
                        ref={deparetureRef}
                        className="outline-none w-full border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                        type="date"
                        placeholder=""
                     />
                  </li>
                  <li
                     className={` ${
                        returnActive ? "flex flex-col w-full md:w-[280px]" : "hidden"
                     } `}
                  >
                     <label
                        className="mb-1 font-medium text-[#4B5563]"
                        htmlFor=""
                     >
                        {lang[til].flights.returnData}
                     </label>
                     <input
                        ref={returnRef}
                        className="outline-none w-full border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                        type="date"
                        placeholder=""
                     />
                  </li>
                  <li className="flex flex-col w-full md:w-[280px]">
                     <label
                        className="mb-1 font-medium text-[#4B5563]"
                        htmlFor=""
                     >
                        {lang[til].flights.passengers}
                     </label>
                     <input
                        ref={passengersRef}
                        className="outline-none w-full border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                        type="number"
                        placeholder=""
                     />
                  </li>
               </ul>
               <button
                  type="submit"
                  className="text-white bg-[#F26522] py-[10px] mt-7 m-auto w-full rounded-lg "
               >
                  {lang[til].flights.search}
               </button>
            </form>
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick={false}
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
               toastClassName="!w-[80%] sm:!w-[400px] !mx-auto mt-5"
               bodyClassName="text-sm"
            />
         </div>
      </div>
   );
};
