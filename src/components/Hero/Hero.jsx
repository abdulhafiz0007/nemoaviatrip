import React from "react";
import { useContext } from "react";
import { HeroIcon1 } from "../../assets/images/Icons";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";
import {motion} from "framer-motion";

export const Hero = () => {
   const { til } = useContext(LangContext);

   return (
      <div id="home" className="h-screen bg-[#F26522] flex justify-center pb-[110px] scroll-mt-[60px]">
         <div className="flex flex-col justify-center items-center">
            <motion.h1 initial={{y: "150px", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, type: "tween"}} className="text-white text-[32px] text-center lg:text-[60px] font-bold mb-[24px]">
               {lang[til].hero.title}
            </motion.h1>
            <motion.p initial={{y: "150px", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.9, type: "tween"}} className="text-white text-[20px] lg:text-[24px] font-bold mb-[48px]">
               {lang[til].hero.subTitle}
            </motion.p>
            <div className="flex flex-col lg:flex-row items-center gap-[40px] bg-white px-[40px] py-[25px] rounded-[30px]">
               <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-[30px]">
                  <li className="flex items-center gap-3">
                     <HeroIcon1 />
                     <div>
                        <h3> {lang[til].hero.clients}</h3>
                        <strong>45000+</strong>
                     </div>
                  </li>
                  <li className="flex items-center gap-3">
                     <HeroIcon1 />
                     <div>
                        <h3> {lang[til].hero.countries}</h3>
                        <strong>30+</strong>
                     </div>
                  </li>
                  <li className="flex items-center gap-3">
                     <HeroIcon1 />
                     <div>
                        <h3> {lang[til].hero.experience}</h3>
                        <strong> {lang[til].hero.year}</strong>
                     </div>
                  </li>
               </ul>
               <a href="#contact" className="text-white py-2 px-4 bg-[#F26522] rounded-full text-[20px]">
                  {lang[til].hero.learnMore}
               </a>
            </div>
         </div>
      </div>
   );
};
