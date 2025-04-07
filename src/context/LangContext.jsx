import { createContext } from "react";
import { useState } from "react";

export const LangContext = createContext();

export const LanguageProvider = ({ children }) => {
   const [til, setTil] = useState("en");

   return (
      <LangContext.Provider value={{ til, setTil }}>
         {children}
      </LangContext.Provider>
   );
};
