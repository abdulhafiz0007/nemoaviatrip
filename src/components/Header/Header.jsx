import React, { act } from "react";
import { useState } from "react";
import SiteLogo from "../../assets/images/logo.png";
import EnglandImg from "../../assets/images/usaImg.webp";
import RussiaImg from "../../assets/images/russiaImg.webp";
import UzbImg from "../../assets/images/uzbImg.png";
import { lang } from "../Lang/Lang";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { useEffect } from "react";
import SiteLogo2 from "../../assets/images/logo2.png";
import MenuImg from "../../assets/images/menu-img.png";
import { BottomArrow, TopArrow, MenuIcon, CloseIcon } from "../../assets/images/Icons";

export const Header = () => {
   const [langActive, setLangActive] = useState("EN");
   const [langClick, setLangClick] = useState(false);
   const [headerFixed, setHeaderFixed] = useState(false);
   const [activeLink, setActiveLink] = useState("#home");
   const [menuActive, setMenuActive] = useState(false);
   const [arrowActive, setArrowActive] = useState(false);
   const [closeActive, setCloseActive] = useState(false);


   const { til, setTil } = useContext(LangContext);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 100) {
            setHeaderFixed(true);
         } else {
            setHeaderFixed(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <header
         className={` ${
            headerFixed
               ? "fixed bg-white w-full z-50 shadow-lg "
               : "bg-[#F26522]"
         } px-[20px] `}
      >
         <div className="flex items-center justify-between lg:w-[1216px] m-auto py-3">
            {headerFixed ? (
               <a href="#">
                  <img
                     className="w-[64px] h-[40px]"
                     src={SiteLogo2}
                     alt="this is a site logo"
                  />
               </a>
            ) : (
               <a href="#">
                  <img
                     className="w-[121px] h-[40px]"
                     src={SiteLogo}
                     alt="this is a site logo"
                  />
               </a>
            )}
            <nav className={` hidden lg:block`}>
               <ul className="flex items-center gap-[25px]">
                  <li
                     onClick={() => setActiveLink("#home")}
                     className={` ${
                        headerFixed
                           ? ` ${
                                activeLink === "#home"
                                   ? "text-[#F26522]"
                                   : "text-black font-medium text-[14px] hover:text-[#F26522]"
                             } `
                           : "text-white font-bold text-[14px]"
                     } `}
                  >
                     <a href="#home">{lang[til].header.home}</a>
                  </li>
                  <li
                     onClick={() => setActiveLink("#about")}
                     className={` ${
                        headerFixed
                           ? ` ${
                                activeLink === "#about"
                                   ? "text-[#F26522]"
                                   : "text-black font-medium text-[14px] hover:text-[#F26522]"
                             } `
                           : "text-white font-bold text-[14px]"
                     } `}
                  >
                     <a href="#about">{lang[til].header.about}</a>
                  </li>
                  <li
                     onClick={() => setActiveLink("#tours")}
                     className={` ${
                        headerFixed
                           ? ` ${
                                activeLink === "#tours"
                                   ? "text-[#F26522]"
                                   : "text-black font-medium text-[14px] hover:text-[#F26522]"
                             } `
                           : "text-white font-bold text-[14px]"
                     } `}
                  >
                     <a href="#tours">{lang[til].header.tours}</a>
                  </li>
                  <li
                     onClick={() => setActiveLink("#hotels")}
                     className={` ${
                        headerFixed
                           ? ` ${
                                activeLink === "#hotels"
                                   ? "text-[#F26522]"
                                   : "text-black font-medium text-[14px] hover:text-[#F26522]"
                             } `
                           : "text-white font-bold text-[14px]"
                     } `}
                  >
                     <a href="#hotels">{lang[til].header.hotels}</a>
                  </li>
                  <li
                     onClick={() => setActiveLink("#flights")}
                     className={` ${
                        headerFixed
                           ? ` ${
                                activeLink === "#flights"
                                   ? "text-[#F26522]"
                                   : "text-black font-medium text-[14px] hover:text-[#F26522]"
                             } `
                           : "text-white font-bold text-[14px]"
                     } `}
                  >
                     <a href="#flights">{lang[til].header.flights}</a>
                  </li>
                  <li
                     onClick={() => setActiveLink("#contact")}
                     className={` ${
                        headerFixed
                           ? ` ${
                                activeLink === "#contact"
                                   ? "text-[#F26522]"
                                   : "text-black font-medium text-[14px] hover:text-[#F26522]"
                             } `
                           : "text-white font-bold text-[14px]"
                     } `}
                  >
                     <a href="#contact">{lang[til].header.contact}</a>
                  </li>
               </ul>
            </nav>
            {langActive === "EN" && (
               <div
                  onClick={() => {
                     setLangClick(!langClick);
                     setArrowActive(!arrowActive);
                  }}
                  className="flex items-cener cursor-pointer"
               >
                  <p
                     className={`${
                        headerFixed ? "text-black" : "text-white"
                     } mr-2`}
                  >
                     EN
                  </p>
                  <button
                     onClick={() => setArrowActive(!arrowActive)}
                     className={`${headerFixed ? "text-black" : "text-white"}`}
                  >
                     <BottomArrow
                        arrowActive={arrowActive}
                        headerFixed={headerFixed}
                     />
                     <TopArrow
                        arrowActive={arrowActive}
                        headerFixed={headerFixed}
                     />
                  </button>
               </div>
            )}
            {langActive === "UZ" && (
               <div
                  onClick={() => {
                     setLangClick(!langClick);
                     setArrowActive(!arrowActive);
                  }}
                  className={` ${
                     langActive === "UZ"
                        ? "block flex items-cener cursor-pointer"
                        : "hidden "
                  }`}
               >
                  <p
                     className={`${
                        headerFixed ? "text-black" : "text-white"
                     } mr-2`}
                  >
                     UZ
                  </p>
                  <button
                     onClick={() => setArrowActive(!arrowActive)}
                     className={`${headerFixed ? "text-black" : "text-white"}`}
                  >
                     <BottomArrow
                        arrowActive={arrowActive}
                        headerFixed={headerFixed}
                     />
                     <TopArrow
                        arrowActive={arrowActive}
                        headerFixed={headerFixed}
                     />
                  </button>
               </div>
            )}
            {langActive === "RU" && (
               <div
                  onClick={() => {
                     setLangClick(!langClick);
                     setArrowActive(!arrowActive);
                  }}
                  className={` ${
                     langActive === "RU"
                        ? "block flex items-cener cursor-pointer"
                        : "hidden"
                  }`}
               >
                  <p
                     className={`${
                        headerFixed ? "text-black" : "text-white"
                     } mr-2`}
                  >
                     RU
                  </p>
                  <button
                     onClick={() => setArrowActive(!arrowActive)}
                     className={`${headerFixed ? "text-black" : "text-white"}`}
                  >
                     <BottomArrow
                        arrowActive={arrowActive}
                        headerFixed={headerFixed}
                     />
                     <TopArrow
                        arrowActive={arrowActive}
                        headerFixed={headerFixed}
                     />
                  </button>
               </div>
            )}
            <div
               onClick={() => setMenuActive(!menuActive)}
               className={` lg:hidden`}
            >
               <div onClick={() => setCloseActive(!closeActive)}>
                  <MenuIcon closeActive={closeActive} headerFixed={headerFixed} />
               </div>
               <div onClick={() => setCloseActive(!closeActive)}>
                  <CloseIcon closeActive={closeActive} headerFixed={headerFixed} />
               </div>
            </div>
            <div
               className={` ${
                  menuActive ? "fixed top-[60px] bg-[#F26522] w-full" : "hidden"
               }`}
            >
               <nav className="mr-[40px] bg-white">
                  <ul className="flex flex-col items-start gap-[25px] pl-[15px] pt-[10px] pb-[20px]">
                     <li
                        onClick={() => setActiveLink("#home")}
                        className={` ${
                           activeLink === "#home"
                              ? "text-[#F26522] font-bold"
                              : "text-black font-medium text-[14px] font-bold hover:text-[#F26522]"
                        } `}
                     >
                        <a href="#home">{lang[til].header.home}</a>
                     </li>
                     <li
                        onClick={() => setActiveLink("#about")}
                        className={` ${
                           activeLink === "#about"
                              ? "text-[#F26522] font-bold"
                              : "text-black font-medium text-[14px] font-bold hover:text-[#F26522]"
                        } `}
                     >
                        <a href="#about">{lang[til].header.about}</a>
                     </li>
                     <li
                        onClick={() => setActiveLink("#tours")}
                        className={` ${
                           activeLink === "#tours"
                              ? "text-[#F26522] font-bold"
                              : "text-black font-medium text-[14px] font-bold hover:text-[#F26522]"
                        } `}
                     >
                        <a href="#tours">{lang[til].header.tours}</a>
                     </li>
                     <li
                        onClick={() => setActiveLink("#hotels")}
                        className={` ${
                           activeLink === "#hotels"
                              ? "text-[#F26522] font-bold"
                              : "text-black font-medium text-[14px] font-bold hover:text-[#F26522]"
                        } `}
                     >
                        <a href="#hotels">{lang[til].header.hotels}</a>
                     </li>
                     <li
                        onClick={() => setActiveLink("#flights")}
                        className={` ${
                           activeLink === "#flights"
                              ? "text-[#F26522] font-bold"
                              : "text-black font-medium text-[14px] font-bold hover:text-[#F26522]"
                        } `}
                     >
                        <a href="#flights">{lang[til].header.flights}</a>
                     </li>
                     <li
                        onClick={() => setActiveLink("#contact")}
                        className={` ${
                           activeLink === "#contact"
                              ? "text-[#F26522] font-bold"
                              : "text-black font-medium text-[14px] font-bold hover:text-[#F26522]"
                        } `}
                     >
                        <a href="#contact">{lang[til].header.contact}</a>
                     </li>
                  </ul>
               </nav>
            </div>
            <div
               className={` ${
                  langClick
                     ? `fixed lg:top-[50px] top-[40px] lg:right-[200px] right-[100px] bg-white rounded-lg`
                     : "hidden "
               } `}
            >
               <ul className="flex flex-col items-start gap-2 z">
                  <li
                     onClick={() => {
                        setLangActive("EN");
                        setLangClick(false);
                        setTil("en");
                     }}
                     className="flex items-center gap-3 hover:bg-slate-300 px-[30px] py-[5px] pt-[15px] cursor-pointer w-[150px] rounded-t-lg"
                  >
                     <img
                        className="w-[16px] h-[16px]"
                        src={EnglandImg}
                        alt="England img for language"
                     />
                     <p>Enlish</p>
                  </li>
                  <li
                     onClick={() => {
                        setLangActive("UZ");
                        setLangClick(false);
                        setTil("uz");
                     }}
                     className="flex items-center gap-3 hover:bg-slate-300 px-[30px] py-[5px] cursor-pointer w-[150px]"
                  >
                     <img
                        className="w-[16px] h-[16px]"
                        src={UzbImg}
                        alt="Uzbkistan img for language"
                     />
                     <p>O'zbek</p>
                  </li>
                  <li
                     onClick={() => {
                        setLangActive("RU");
                        setLangClick(false);
                        setTil("ru");
                     }}
                     className="flex items-center gap-3 hover:bg-slate-300 px-[30px] py-[5px] pb-[15px] cursor-pointer w-[150px] rounded-b-lg"
                  >
                     <img
                        className="w-[16px] h-[16px]"
                        src={RussiaImg}
                        alt="Russia img for language"
                     />
                     <p>Русский</p>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
};
