import React from 'react';
import { useContext } from 'react';
import hotelsImg1 from "../../assets/images/hotelsImg1.jpg";
import hotelsImg2 from "../../assets/images/hotelsImg2.jpg";
import hotelsImg3 from "../../assets/images/hotelsImg3.jpg";
import { LangContext } from '../../context/LangContext';

import { lang } from '../Lang/Lang';

export const Hotels = () => {

    const {til} = useContext(LangContext);

  return (
    <div id='hotels' className='lg:w-[1487px] m-auto mt-[80px] pb-[100px] scroll-mt-[90px] px-[20px]'>
        <h2 className='text-center text-[35px] font-bold mb-[25px]'>{lang[til].hotels.title}</h2>
        <ul className="flex flex-col lg:flex-row gap-5 items-center justify-between">
            <li className='rounded-xl lg:w-[474px]'>
                <img className='w-[474px] h-[192px] rounded-t-xl' src={hotelsImg1} alt="" />
                <div className='flex flex-col items-start p-[24px] rounded-b-xl  shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                    <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].hotels.hotelTitle1}</h3>
                    <p className='text-[#4B5563] mb-[16px]'>{lang[til].hotels.hotelAddress1}</p>
                    <p className='text-[#4B5563] mb-[16px]'>{lang[til].hotels.hotelsubTitle1}</p>
                    <a href='#contact' className='px-[20px] py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].hotels.details}</a>
                </div>
            </li>
            <li className='rounded-xl lg:w-[474px]'>
                <img className='w-[474px] h-[192px] rounded-t-xl' src={hotelsImg2} alt="" />
                <div className='flex flex-col items-start p-[24px] rounded-b-xl  shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                    <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].hotels.hotelTitle2}</h3>
                    <p className='text-[#4B5563] mb-[16px]'>{lang[til].hotels.hotelAddress2}</p>
                    <p className='text-[#4B5563] mb-[16px]'>{lang[til].hotels.hotelsubTitle2}</p>
                    <a href='#contact' className='px-[20px] py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].hotels.details}</a>
                </div>
            </li>
            <li className='rounded-xl lg:w-[474px]'>
                <img className='w-[474px] h-[192px] rounded-t-xl' src={hotelsImg3} alt="" />
                <div className='flex flex-col items-start p-[24px] rounded-b-xl  shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
                    <h3 className='text-[20px] font-bold mb-[8px]'>{lang[til].hotels.hotelTitle3}</h3>
                    <p className='text-[#4B5563] mb-[16px]'>{lang[til].hotels.hotelAddress3}</p>
                    <p className='text-[#4B5563] mb-[16px]'>{lang[til].hotels.hotelsubTitle3}</p>
                    <a href='#contact' className='px-[20px] py-[10px] rounded-full text-white bg-[#F26522]'>{lang[til].hotels.details}</a>
                </div>
            </li>
        </ul>
    </div>
  )
}
