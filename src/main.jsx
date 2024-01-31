import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto-condensed";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import "aos/dist/aos.css";

import AOS from "aos";

AOS.init({
  duration: 650,
  // once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#08C1FF",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
