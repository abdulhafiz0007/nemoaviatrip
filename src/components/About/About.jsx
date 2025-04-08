import React, { useContext } from "react";
import { motion } from "framer-motion";
import NemoOfficeImg1 from "../../assets/images/nemoOfficeImg1.jpg";
import NemoOfficeImg2 from "../../assets/images/nemoOfficeImg2.jpg";
import NemoOfficeImg3 from "../../assets/images/nemoOfficeImg3.jpg";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";

export const About = () => {
   const { til } = useContext(LangContext);

   return (
      <div
         id="about"
         className="lg:w-[1487px] m-auto scroll-mt-[120px] px-[20px] overflow-x-hidden"
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         initial={{ opacity: 0 }}
         transition={{ duration: 1.5 }}
         viewport={{ once: true }}
      >
         <h2 className="text-[40px] mt-[60px] font-bold text-center mb-[16px]">
            {lang[til].about.title}
         </h2>
         <p className="text-[22px] text-center">{lang[til].about.subTitle}</p>

         <ul className="flex flex-col lg:flex-row items-center justify-center gap-[58px] mt-[40px]">
            <li
               className="px-[30px] pr-[40px] lg:w-[719px] lg:h-[160px] m-auto  py-[30px] shadow-xl rounded-xl"
               whileInView={{ x: 0, opacity: 1 }}
               initial={{ x: -200, opacity: 0 }}
               transition={{ duration: 1 }}
            >
               <h3 className="text-[24px] mb-[20px] font-bold">
                  {lang[til].about.mission}
               </h3>
               <p className="text-[#4B5563]">{lang[til].about.missionText}</p>
            </li>

            <li
               className="px-[30px] pr-[40px] lg:w-[719px] lg:h-[160px] m-auto  py-[30px] shadow-xl rounded-xl"
               whileInView={{ x: 0, opacity: 1 }}
               initial={{ x: 200, opacity: 0 }}
               transition={{ duration: 1 }}
            >
               <h3 className="text-[24px] mb-[20px] font-bold">
                  {lang[til].about.vision}
               </h3>
               <p className="text-[#4B5563]">{lang[til].about.visionText}</p>
            </li>
         </ul>

         <div className="flex flex-col lg:flex-row gap-5 items-center justify-between lg:w-[1280px] m-auto mt-[60px]">
            <motion.div
               className="flex flex-col lg:w-[624px]"
               initial={{ x: -250, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ duration: 1, type: "tween" }}
               viewport={{ once: false, amount: 0.2 }}
            >
               <p className="text-[#4B5563] text-[17px] mb-[16px]">
                  {lang[til].about.aboutDesc1}
               </p>
               <p className="text-[#4B5563] text-[17px]">
                  {lang[til].about.aboutDesc2}
               </p>
            </motion.div>

            <motion.div
               className="flex flex-col gap-[16px]"
               initial={{ x: 250, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ duration: 1, type: "tween" }}
               viewport={{ once: false, amount: 0.2 }}
            >
               <img
                  className="w-[624px] h-[256px] object-cover rounded-xl"
                  src={NemoOfficeImg1}
                  width="624"
                  height="256"
                  alt="Nemo office img"
               />
               <div className="flex items-center gap-[16px]">
                  <img
                     className="w-[304px] h-[160px] object-cover rounded-xl"
                     src={NemoOfficeImg2}
                     width="304"
                     height="160"
                     alt="Nemo office img"
                  />
                  <img
                     className="w-[304px] h-[160px] object-cover rounded-xl"
                     src={NemoOfficeImg3}
                     width="304"
                     height="160"
                     alt="Nemo office img"
                  />
               </div>
            </motion.div>
         </div>
      </div>
   );
};
