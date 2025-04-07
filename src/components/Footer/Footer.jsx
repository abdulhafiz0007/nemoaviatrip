import React from "react";
import SiteLogo from "../../assets/images/logo.png";
import { TelegramIcon, InstagramIcon } from "../../assets/images/Icons";
import { lang } from "../Lang/Lang";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import {motion} from 'framer-motion';

export const Footer = () => {

   const {til} = useContext(LangContext);

   return (
      <motion.footer className="mt-[30px] bg-[#111827] lg:w-full m-auto">
         <div className="lg:w-[1280px] m-auto px-[32px] py-[48px]">
            <ul className="flex flex-col lg:flex-row gap-5 items-start justify-between">
               <li className="flex flex-col gap-[20px]">
                  <img className="w-[112px] h-[37px]" src={SiteLogo} alt="site logo" />
                  <p className="text-[#9CA3AF]">{lang[til].footer.footerAddress}</p>
               </li>
               <li className="flex flex-col gap-[20px]"> 
                  <h3  className="text-[20px] text-white font-medium">{lang[til].footer.footerContact}</h3>
                  <div className="flex flex-col gap-1">
                      <a className="text-[#9CA3AF]" href="tel:+998 95 150 00 00">{lang[til].footer.footerTel}</a>
                      <a className="text-[#9CA3AF]" href="mailto:info@nemoavia.uz">{lang[til].footer.footerEmail}</a>
                  </div>
               </li>
               <li className="flex flex-col gap-[20px]">
                  <h3 className="text-[20px] text-white font-medium" >{lang[til].footer.footerSocialmedia}</h3>
                  <ul className="flex items-center gap-[10px]">
                    <li>
                        <TelegramIcon />
                    </li>
                    <li>
                        <InstagramIcon />
                    </li>
                    <li>
                        <TelegramIcon />
                    </li>
                  </ul>
               </li>
               <li className="flex flex-col gap-[20px]">
                  <h3 className="text-[20px] text-white font-medium" >Address</h3>
                  <p className="text-[#9CA3AF]">{lang[til].footer.footerAddress2}</p>
               </li>
            </ul>
            <span className="block lg:w-[1280px] mt-[32px] border-t-[1.2px] border-[#1F2937]"></span>
            <p className="text-[#9CA3AF] text-center pt-[32px]">{lang[til].footer.footerCopyRight}</p>
         </div>
      </motion.footer>
   );
};
