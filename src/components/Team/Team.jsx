import React from 'react'
import { useContext } from 'react'
import { LangContext } from '../../context/LangContext'
import { lang } from '../Lang/Lang'

export const Team = () => {

  const {til} = useContext(LangContext);

  return (
    <div className='my-[50px] lg:w-[1487px] m-auto px-[20px]'>
        <h2 className='text-[35px] font-bold mb-[40px] text-center'>{lang[til].team.title}</h2>
        <ul className="lg:flex grid grid-cols-2 gap-5 items-center justify-between m-auto lg:flex-row ">
            <li className='lg:w-[347.8px]  p-[42px] shadow-[0_0_7px_rgba(0,0,0,0.15)] rounded-xl text-center text-[#1F2937] font-medium text-[20px]'>{lang[til].team.director}</li>
            <li className='lg:w-[347.8px] p-[42px] shadow-[0_0_7px_rgba(0,0,0,0.15)] rounded-xl text-center text-[#1F2937] font-medium text-[20px]'>{lang[til].team.lawyer}</li>
            <li className='lg:w-[347.8px] p-[42px] shadow-[0_0_7px_rgba(0,0,0,0.15)] rounded-xl text-center text-[#1F2937] font-medium text-[20px]'>{lang[til].team.operator}</li>
            <li className='lg:w-[347.8px] p-[42px] shadow-[0_0_7px_rgba(0,0,0,0.15)] rounded-xl text-center text-[#1F2937] font-medium text-[20px]'>{lang[til].team.administrator}</li>
        </ul>
    </div>
  )
}
