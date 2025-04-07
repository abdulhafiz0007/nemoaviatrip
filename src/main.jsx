import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LangContext.jsx";

createRoot(document.getElementById("root")).render(
   <LanguageProvider>
      <App />
   </LanguageProvider>
);
