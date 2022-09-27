import { React, useEffect, useState } from "react";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "../src/assets/font/font-awesome.css";
import routes from "./pages";
import Page404 from "./pages/404";
import { useTranslation } from "react-i18next";

function App() {
  // Contains the value and text for the options
  const languages = [
    { value: "en", text: "English" },
    { value: "ko", text: "Korean" },
  ];
  // It is a hook imported from 'react-i18next'
  const { t } = useTranslation();

  const [lang, setLang] = useState("en");

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    const langValue = languages.find((x) => x.text === e.target.innerText);
    setLang(langValue.value);
    console.log(e);
    let loc = "https://otcmarket.biz/";
    window.location.replace(loc + "?lng=" + langValue.value);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header
        t={t}
        value={lang}
        handleChange={handleChange}
        languages={languages}
      />

      <Routes>
        {routes.map((data, idx) => (
          <Route
            t={t}
            key={idx}
            path={data.path}
            element={data.component}
            exact
          />
        ))}

        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer t={t} />
    </>
  );
}

export default App;
