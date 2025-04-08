import React from "react";
import { useContext } from "react";
import { HeroIcon1 } from "../../assets/images/Icons";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";
import {motion} from "framer-motion";
import { ContactIcon } from "../../assets/images/Icons";
import { TimeIcon } from "../../assets/images/Icons";

export const Hero = () => {
   const { til } = useContext(LangContext);

   return (
      <div id="home" className="h-screen bg-[#F26522] flex justify-center pb-[110px] scroll-mt-[60px]">
         <div className="flex flex-col justify-center items-center">
            <div className="lg:w-full w-[350px]">
               <motion.h1 initial={{y: "150px", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, type: "tween"}} className="text-white leading-10 lg:mb-8 text-[32px] text-center lg:text-[60px] font-bold mb-[24px]">
                  {lang[til].hero.title}
               </motion.h1>
            </div>
            <motion.p initial={{y: "150px", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.9, type: "tween"}} className="text-white text-[20px] lg:text-[24px] mb-[48px]">
               {lang[til].hero.subTitle}
            </motion.p>
            <div className="flex flex-col lg:flex-row items-center gap-[24px] lg:gap-[40px] bg-white lg:px-[40px] px-[28px] py-[25px] lg:py-[25px] lg:rounded-[50px] rounded-[30px]">
               <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-[22px] lg:gap-[30px]">
                  <li className="flex items-center gap-3 lg:w-[165px]">
                     <ContactIcon />
                     <div>
                        <h3 className="text-[14px] text-[#1F2937]"> {lang[til].hero.clients}</h3>
                        <strong>45000+</strong>
                     </div>
                  </li>
                  <li className="flex items-center gap-3 lg:w-[165px]">
                     <ContactIcon />
                     <div>
                        <h3 className="text-[14px] text-[#1F2937]"> {lang[til].hero.countries}</h3>
                        <strong>30+</strong>
                     </div>
                  </li>
                  <li className="flex items-center gap-3 lg:w-[165px]">
                     <ContactIcon />
                     <div>
                        <h3 className="text-[14px] text-[#1F2937]"> {lang[til].hero.experience}</h3>
                        <strong> {lang[til].hero.year}</strong>
                     </div>
                  </li>
               </ul>
               <a href="#contact" className="text-white text-center py-2 w-full bg-[#F26522] rounded-full lg:w-[160px] text-[16px]">
                  {lang[til].hero.learnMore}
               </a>
            </div>
         </div>
      </div>
   );
};
