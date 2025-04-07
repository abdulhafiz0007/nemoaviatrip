import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import slideImg1 from "../../assets/images/slideImg1.jpg";
import slideImg2 from "../../assets/images/slideImg2.jpg";
import slideImg3 from "../../assets/images/slideImg3.jpg";
import slideImg4 from "../../assets/images/slideImg4.jpg";
import slideImg5 from "../../assets/images/slideImg5.jpg";
import { lang } from "../Lang/Lang";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";


export const Partners = () => {

    const {til} = useContext(LangContext);

   return (
      <div className="py-[30px] pt-[80px]">
         <h2 className="text-[30px] font-bold mb-[30px] text-center">
            {lang[til].partners.title}
         </h2>
         <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={2000}
            allowTouchMove={false} 
            grabCursor={false}
            loopedslides={999}
            navigation={false}
            freemode="true"
            freemodemomentum="false"
         >
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img className="w-[170px] h-[96px] object-cover rounded-lg" src={slideImg5} alt="slide img 1" />
                    <p className="text-[#4B5563] font-medium">Emirates</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img  className="w-[170px] h-[96px] object-cover rounded-lg" src={slideImg1} alt="slide img 1" />
                    <p className="text-[#4B5563] font-medium">Qatar Airways</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img className="w-[170px] h-[96px] object-cover rounded-lg" src={slideImg3} alt="slide img 1" />
                    <p className="text-[#4B5563] font-medium">Uzairways</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img  className="w-[170px] h-[96px] object-cover rounded-lg" src={slideImg4} alt="slide img 1" />
                    <p className="text-[#4B5563] font-medium">Centrum Air</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img  className="w-[170px] h-[96px] object-cover rounded-lg" src={slideImg2} alt="slide img 1" />
                    <p className="text-[#4B5563] font-medium">Turkish Airlines</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img  className="w-[170px] h-[96px] object-cover rounded-lg" src={slideImg1} alt="slide img 1" />
                    <p className="text-[#4B5563] font-medium">Qatar Airways</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center">
                    <img  className="w-[170px] h-[96px] object-cover rounded-lg" src={slideImg3} alt="slide img 1" />
                    <p className="text-[#4B5563] font-medium">Uzairways</p>
                </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};
