import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotificationProvider from "./context/NotificationContext.jsx";
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // Set the default language
  resources: {
    en: {
      translation: await import("./translation/en/en.json"),
    },
    fa: {
      translation: await import("./translation/fa/fa.json"),
    },
    pa: {
      translation: await import("./translation/pa/pa.json"),
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <NotificationProvider>
    <I18nextProvider i18n={i18next}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </React.StrictMode>
    </I18nextProvider>
  </NotificationProvider>
);
