import React from 'react';
import { useContext } from 'react';
import toursImg1 from "../../assets/images/toursImg1.jpg";
import toursImg2 from "../../assets/images/toursImg2.jpg";
import toursImg3 from "../../assets/images/toursImg3.jpg";
import toursImg4 from "../../assets/images/toursImg4.jpg";
import { LangContext } from '../../context/LangContext';

import { lang } from '../Lang/Lang';



export const Tours = () => {

    const {til} = useContext(LangContext);

  return (
    <div id='tours' className='lg:w-[1487px] m-auto mt-[100px] scroll-mt-[90px] px-[20px]'>
        <h2 className='text-center text-[35px] font-bold mb-[10px]'>{lang[til].tours.title}</h2>
        <p className='text-center mb-[40px] text-[#4B5563] text-[20px]'>{lang[til].tours.subTitle}</p>
        <ul className="flex flex-col gap-5 lg:flex-row items-center justify-between lg:w-full w-[600px]">
            <li className='rounded-xl lg:w-[347px] '>
                <img className='w-[347px] h-[192px] rounded-t-xl' src={toursImg1} alt="" />
                <div className='flex flex-col items-start p-[24px] rounded-b-xl  shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                    <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].tours.cardTitle1}</h3>
                    <p className='text-[#4B5563] mb-[16px]'>{lang[til].tours.cardsubTitle1}</p>
                    <a href='#contact' className='px-[20px] py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].tours.details}</a>
                </div>
            </li>
            <li className='rounded-xl lg:w-[347px] '>
                <img className='w-[347px] h-[192px] rounded-t-xl' src={toursImg2} alt="" />
                <div className='flex flex-col items-start p-[24px] rounded-b-xl shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                    <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].tours.cardTitle2}</h3>
                    <p className='text-[#4B5563] mb-[16px]'>{lang[til].tours.cardsubTitle2}</p>
                    <a href='#contact' className='px-[20px] py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].tours.details}</a>
                </div>
            </li>
            <li className='rounded-xl lg:w-[347px] '>
                <img className='w-[347px] h-[192px] rounded-t-xl' src={toursImg3} alt="" />
                <div className='flex flex-col items-start p-[24px] rounded-b-xl shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                    <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].tours.cardTitle3}</h3>
                    <p className='text-[#4B5563] mb-[16px]'>{lang[til].tours.cardsubTitle3}</p>
                    <a href='#contact' className='px-[20px] py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].tours.details}</a>
                </div>
            </li>
            <li className='rounded-xl lg:w-[347px]'>
                <img className='w-[347px] h-[192px] rounded-t-xl' src={toursImg4} alt="" />
                <div className='flex flex-col items-start p-[24px] rounded-b-xl shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                    <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].tours.cardTitle4}</h3>
                    <p className='text-[#4B5563] mb-[16px]'>{lang[til].tours.cardsubTitle4}</p>
                    <a href='#contact' className='px-[20px] py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].tours.details}</a>
                </div>
            </li>
        </ul>
    </div>
  )
}
