import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";
import Portfolio from "./components/Features";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Whymyob from "./components/whymyob";
import Hero from "./components/Hero";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { useDocTitle } from "./components/CustomHook";

const App = () => {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("Manage Your Own Business");

  return (
    <>
      <Hero />
      <Whymyob />
      <Services />
      <Portfolio />
      <Pricing />
      <Clients />
      <ContactUs />

      <WhatsAppWidget phoneNumber="447445028046" />
      {/* <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="447445028046" /> */}
    </>
  );
};

export default App;
