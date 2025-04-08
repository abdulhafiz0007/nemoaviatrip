import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { LangContext } from "../../context/LangContext";
import { lang } from "../Lang/Lang";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
   name: yup.string().required("Name is required"),
   email: yup.string().email("Invalid email").required("Email is required"),
   phone: yup
      .string()
      .matches(/^[0-9+\-() ]+$/, "Invalid phone number")
      .required("Phone number is required"),
   subject: yup.string().required("Subject is required"),
   message: yup.string().required("Message is required"),
});

export const Contact = () => {
   const { til } = useContext(LangContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(schema),
   });

   const onSubmit = (data) => {
      const token = "8180736086:AAGOE1f8Sv39f5jrU4fsaWmbnJtLzxCr240";
      const chat_id = "6552496082";
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      const messageContent = `Ism: ${data.name} \nEmail: ${data.email} \nTelefon raqam: ${data.phone} \nMavzu: ${data.subject} \nXabar: ${data.message}`;

      axios
         .post(url, {
            chat_id,
            text: messageContent,
         })
         .then((res) => {
            if (res.status === 200) {
               toast.success("Message sent!");
               reset(); // clear the form
            }
         })
         .catch((err) => {
            toast.error("Failed to send!");
         });
   };

   return (
      <div id="contact" className="py-[48px] lg:w-full bg-[#F3F4F6] scroll-mt-[64px] px-[20px]">
         <h2 className="text-[30px] font-bold text-center mb-[10px]">
            {lang[til].contacts.title}
         </h2>
         <p className="text-[20px] text-center mb-[40px]">
            {lang[til].contacts.subTitle}
         </p>
         <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 justify-between lg:w-[1280px] m-auto">
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="flex flex-col lg:w-[624px] h-[665px] w-full h-full p-[24px] bg-white rounded-xl shadow-xl"
            >
               <label className="mb-[8px]">{lang[til].contacts.name}</label>
               <input
                  {...register("name")}
                  className="mb-[20px] w-full outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px]"
                  type="text"
               />
               {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>}

               <label className="mb-[8px]">{lang[til].contacts.email}</label>
               <input
                  {...register("email")}
                  className="mb-[20px] w-full outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px]"
                  type="text"
               />
               {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

               <label className="mb-[8px]">{lang[til].contacts.phone}</label>
               <input
                  {...register("phone")}
                  className="mb-[20px] w-full outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px]"
                  type="text"
               />
               {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone.message}</p>}

               <label className="mb-[8px]">{lang[til].contacts.subject}</label>
               <input
                  {...register("subject")}
                  className="mb-[20px] w-full outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px]"
                  type="text"
               />
               {errors.subject && <p className="text-red-500 text-sm mb-2">{errors.subject.message}</p>}

               <label className="mb-[8px]">{lang[til].contacts.message}</label>
               <textarea
                  {...register("message")}
                  className="w-full h-[125px] outline-none border-2 border-slate-300 rounded-lg px-[20px] py-[8px]"
               />
               {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message.message}</p>}

               <button
                  type="submit"
                  className="text-white bg-[#2C2C2C] py-[8px] rounded-lg mt-[30px]"
               >
                  {lang[til].contacts.submit}
               </button>
            </form>
            <div className="flex flex-col gap-[30px] lg:w-[624px] w-full">
               <div className="w-full lg:h-[236px] flex flex-col gap-[16px] bg-white p-[24px] shadow-xl rounded-xl">
                  <h3 className="text-[22px] text-[#2C2C2C] font-medium">{lang[til].contacts.contactInfo}</h3>
                  <p className="font-medium">{lang[til].contacts.address}</p>
                  <a className="font-medium" href="tel:+998 95 150 00 00">{lang[til].contacts.tel}</a>
                  <a className="font-medium" href="mailto:info@nemoavia.uz">{lang[til].contacts.contactEmail}</a>
                  <p className="font-medium">{lang[til].contacts.workinghours}</p>
               </div>
               <div className="w-full h-[398px] p-[24px] bg-white rounded-xl shadow-xl">
                  <iframe
                     className="w-full h-full rounded-xl"
                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5996.567462581604!2d69.241538!3d41.280929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af549caa943%3A0xb57ba020a1de5d09!2z0YPQu9C40YbQsCDQnNGD0LrQuNC80LggNDQsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2sus!4v1743917957463!5m2!1sru!2sus"
                     allowFullScreen=""
                     loading="lazy"
                  ></iframe>
               </div>
            </div>
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick={false}
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
               toastClassName="!w-[80%] sm:!w-[400px] !mx-auto mt-5"
               bodyClassName="text-sm"
            />
         </div>
      </div>
   );
};
