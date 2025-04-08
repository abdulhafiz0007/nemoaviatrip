import React from "react";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";

export const Contact = () => {

   const {til} = useContext(LangContext);

   return (
      <div id="contact" className="py-[48px] lg:w-full bg-[#F3F4F6] scroll-mt-[64px] px-[20px]">
         <h2 className="text-[30px] font-bold text-center mb-[10px]">
            {lang[til].contacts.title}
         </h2>
         <p className="text-[20px] text-center mb-[40px]">
         {lang[til].contacts.subTitle}
         </p>
         <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 items-center justify-between lg:w-[1280px] m-auto">
            <form className="flex flex-col lg:w-[624px] w-full h-[665px] p-[24px] bg-white rounded-xl shadow-xl">
               <label className="mb-[8px]" htmlFor="">{lang[til].contacts.name}</label>
               <input
                  className="mb-[20px] w-full outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                  type="text"
                  placeholder=""
               />
               <label className="mb-[8px]" htmlFor="">{lang[til].contacts.email}</label>
               <input
                  className="mb-[20px] w-full outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                  type="text"
                  placeholder=""
               />
               <label className="mb-[8px]" htmlFor="">{lang[til].contacts.phone}</label>
               <input
                  className="mb-[20px] w-full outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                  type="text"
                  placeholder=""
               />
               <label className="mb-[8px]" htmlFor="">{lang[til].contacts.subject}</label>
               <input
                  className="mb-[20px] w-full outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]"
                  type="text"
                  placeholder=""
               />
               <label className="mb-[8px]" htmlFor="">{lang[til].contacts.subject}</label>
                <textarea className="w-full h-[125px] outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px] w-[280px]">

                </textarea>
                <button className="text-white bg-[#2C2C2C] py-[8px] rounded-lg mt-[30px]">{lang[til].contacts.submit}</button>
            </form>
            <div className="flex flex-col gap-[30px] lg:w-[624px] w-full">
                <div className="w-full lg:h-[236px] flex flex-col gap-[16px] bg-white p-[24px] shadow-xl rounded-xl">
                    <h3 className="text-[22px] text-[#2C2C2C] font-medium">{lang[til].contacts.contactInfo}</h3>
                    <p className="font-medium">{lang[til].contacts.address}</p>
                    <a className="font-medium" href="tel:+998 95 150 00 00">{lang[til].contacts.tel}</a>
                    <a className="font-medium" href="matilto:info@nemoavia.uz">{lang[til].contacts.contactEmail}</a>
                    <p className="font-medium">{lang[til].contacts.workinghours}</p>
                </div>
                <div className="w-full h-[398px] p-[24px] bg-white rounded-xl shadow-xl">
                    <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5996.567462581604!2d69.241538!3d41.280929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af549caa943%3A0xb57ba020a1de5d09!2z0YPQu9C40YbQsCDQnNGD0LrQuNC80LggNDQsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2sus!4v1743917957463!5m2!1sru!2sus" ></iframe>
                </div>
            </div>
         </div>
      </div>
   );
};
