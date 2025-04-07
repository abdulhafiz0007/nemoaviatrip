import React from "react";
import { About } from "./components/About/About";
import { Cities } from "./components/Cities/Cities";
import { Contact } from "./components/Contact/Contact";
import { Flights } from "./components/Flights/Flights";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Hotels } from "./components/Hotels/Hotels";
import { Partners } from "./components/Partners/Partners";
import { Team } from "./components/Team/Team";
import { Tours } from "./components/Tours/Tours";
import './assets/styles/main.css';

function App() {
   return (
      <>
         <Header />
         <Hero />
         <About />
         <Team />
         <Tours />
         <Hotels />
         <Flights />
         <Cities />
         <Partners />
         <Contact />
         <Footer />
      </>
   );
}

export default App;
