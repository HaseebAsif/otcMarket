import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";
import ScrollToTop from "./ScrollToTop";
import "./i18n.js";
import Loading from "../src/pages/Loading.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Suspense fallback={<Loading />} >
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Suspense>
  </React.Fragment>
);
