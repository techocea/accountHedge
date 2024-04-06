import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact";
import DemoProduct from "./pages/DemoProduct";
// import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";
ReactDOM.render(
  <>
    <Router>
      <NavBar />
      {/* <ScrollToTop> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-demo" element={<DemoProduct />} />
      </Routes>
      {/* </ScrollToTop> */}
      <Footer />
    </Router>

    {/* <WhatsAppWidget
      phoneNumber="XXXXXXXXXX"
      companyName="Support Agent"
      replyTimeText="MYOB AccountEdge Pro Hosting Solution"
    /> */}
  </>,
  document.getElementById("root")
);
