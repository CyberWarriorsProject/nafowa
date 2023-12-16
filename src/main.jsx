import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto-condensed";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { ConfigProvider } from "antd";
=======
import { Services } from "./pages/Services.jsx";
>>>>>>> 3970600bd3e414da47e03dfb918d03b58150cad2

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
