import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// ! importing components
import Header from "./components/Header";
import HomeContainer from "./pages/home/HomeContainer";
import Footer from "./components/Footer";
import AboutContainer from "./pages/About/AboutContainer";
import ServiceContainer from './pages/Services/ServiceContainer'
import WebDevPage from './pages/Services/WebDevPage'
import AndroidDev from "./pages/Services/AndroidDev";
import PWADev from "./pages/Services/PWADev";
import UIUX from "./pages/Services/UIUX";
import WebDesign from "./pages/Services/WebDesign";
import DesktopDev from "./pages/Services/DesktopDev";
import OracleDev from "./pages/Services/OracleDev";
import Migration from "./pages/Services/Migration";
import APIs from "./pages/Services/APIs";
import CareerContainer from "./pages/Careers/CareersContainer";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServiceContainer />} />
        <Route path="/services/web-development" element={<WebDevPage />} />
        <Route path="/services/android-development" element={<AndroidDev />} />
        <Route path="/services/pwa-development" element={<PWADev />} />
        <Route path="/services/ui-ux" element={<UIUX />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/desktop-development" element={<DesktopDev />} />
        <Route path="/services/oracle-development" element={<OracleDev />} />
        <Route path="/services/migration" element={<Migration />} />
        <Route path="/services/apis-development" element={<APIs />} />
        <Route path="/careers" element={<CareerContainer />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
