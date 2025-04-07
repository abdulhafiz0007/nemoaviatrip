import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";


export const Flights = () => {

   const {til} = useContext(LangContext);
   const [returnActive, setReturnActive] = useState(false);

   return (
      <div id="flights" className="py-[90px] bg-[#F3F4F6] px-[20px]">
         <div className="lg:w-[1216px] m-auto">
            <h2 className="text-[30px] font-bold mb-[30px]">{lang[til].flights.title}</h2>
            <form className="p-[24px] rounded-xl shadow-xl bg-white">
               <div className="mb-[20px]">
                  <button onClick={() => setReturnActive(false)} className={` ${returnActive ? "bg-[#F3F4F6] text-[#4B5563]" : "text-white bg-[#F26522]"} px-[20px] text-[#4B5563] py-[10px] font-medium rounded-lg mr-4 cursor-pointer `}>
                    {lang[til].flights.send}
                  </button>
                  <button onClick={() => setReturnActive(true)} className={` ${returnActive ? "bg-[#F26522] text-white" : "bg-[#F3F4F6]"} text-[#4B5563] px-[20px] py-[10px] font-medium rounded-lg cursor-pointer`}>
                    {lang[til].flights.return}
                  </button>
               </div>
               <ul className="flex flex-col lg:flex-row lg:gap-2 gap-5 flex-wrap items-center justify-between">
                  <li className="flex flex-col">
                     <label className="mb-1 font-medium text-[#4B5563]" htmlFor="">{lang[til].flights.from}</label>
                     <input
                        className="outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                        type="text"
                        placeholder=""
                     />
                  </li>
                  <li className="flex flex-col">
                     <label className="mb-1 font-medium text-[#4B5563]" htmlFor="">{lang[til].flights.to}</label>
                     <input
                        className=" outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                        type="text"
                        placeholder=""
                     />
                  </li>
                  <li className="flex flex-col">
                     <label className="mb-1 font-medium text-[#4B5563]" htmlFor="">{lang[til].flights.deparetureData}</label>
                     <input
                        className="outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                        type="date"
                        placeholder=""
                     />
                  </li>
                  <li className={` ${returnActive ? "flex flex-col" : "hidden"} `}>
                     <label className="mb-1 font-medium text-[#4B5563]" htmlFor="">{lang[til].flights.returnData}</label>
                     <input
                        className="outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                        type="date"
                        placeholder=""
                     />
                  </li>
                  <li className="flex flex-col">
                     <label className="mb-1 font-medium text-[#4B5563]" htmlFor="">{lang[til].flights.passengers}</label>
                     <input
                        className="outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                        type="number"
                        placeholder=""
                     />
                  </li>
               </ul>
               <button type="submit" className="text-white bg-[#F26522] py-[10px] mt-7 m-auto w-full rounded-lg ">{lang[til].flights.search}</button>
            </form>
         </div>
      </div>
   );
};
