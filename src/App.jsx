import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LanguageSwitch from "./components/LanguageSwitch";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [language, setLanguage] = useState("en");

  const direction = language === "ar" ? "rtl" : "ltr";

  return (
    <div dir={direction}>
      <Header language={language} />

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/menu" element={<Menu language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
      </Routes>

      <Footer language={language} />

      <LanguageSwitch
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  );
}

export default App;