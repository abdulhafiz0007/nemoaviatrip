import React from 'react';
import citiesImg1 from "../../assets/images/toursImg3.jpg";
import citiesImg2 from "../../assets/images/citiesImg2.avif";
import citiesImg3 from "../../assets/images/citiesImg3.avif";
import citiesImg4 from "../../assets/images/citiesImg4.avif";
import { lang } from '../Lang/Lang';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import {motion} from "framer-motion";


export const Cities = () => {

    const {til} = useContext(LangContext);

  return (
    <div className='lg:w-full m-auto bg-[#F3F4F6] pb-[50px] scroll-mt-[60px] px-[20px]'>
        <div className='lg:w-[1216px] m-auto'>
            <h2 className='text-center text-[30px] font-bold mb-[30px]'>{lang[til].cities.title}</h2>
            <ul className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                <li className='rounded-xl lg:w-[286px] transition-transform duration-300 transform hover:scale-105'>
                    <img className='w-full h-[192px] rounded-t-xl' src={citiesImg1} alt="" />
                    <div className='flex flex-col items-start p-[24px] rounded-b-xl  shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                        <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].cities.cardTitle1}</h3>
                        <p className='text-[#4B5563] mb-[16px]'>{lang[til].cities.cardsubTitle1}</p>
                        <a href='#contact' className='w-full text-center py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].cities.learnMore}</a>
                    </div>
                </li>
                <li className='rounded-xl lg:w-[286px] transition-transform duration-300 transform hover:scale-105'>
                    <img className='w-full h-[192px] object-cover rounded-t-xl' src={citiesImg2} alt="" />
                    <div className='flex flex-col items-start p-[24px] rounded-b-xl  shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                        <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].cities.cardTitle2}</h3>
                        <p className='text-[#4B5563] mb-[16px]'>{lang[til].cities.cardsubTitle2}</p>
                        <a href='#contact' className='w-full text-center py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].cities.learnMore}</a>
                    </div>
                </li>
                <li className='rounded-xl lg:w-[286px] transition-transform duration-300 transform hover:scale-105'>
                    <img className='w-full h-[192px] object-cover rounded-t-xl' src={citiesImg3} alt="" />
                    <div className='flex flex-col items-start p-[24px] rounded-b-xl  shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                        <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].cities.cardTitle3}</h3>
                        <p className='text-[#4B5563] mb-[16px]'>{lang[til].cities.cardsubTitle3}</p>
                        <a href='#contact' className='w-full text-center py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].cities.learnMore}</a>
                    </div>
                </li>
                <li className='rounded-xl lg:w-[286px] transition-transform duration-300 transform hover:scale-105'>
                    <img className='w-full h-[192px] object-cover rounded-t-xl' src={citiesImg4} alt="" />
                    <div className='flex flex-col items-start p-[24px] rounded-b-xl  shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                        <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].cities.cardTitle4}</h3>
                        <p className='text-[#4B5563] mb-[16px]'>{lang[til].cities.cardsubTitle4}</p>
                        <a href='#contact' className='w-full text-center py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].cities.learnMore}</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
