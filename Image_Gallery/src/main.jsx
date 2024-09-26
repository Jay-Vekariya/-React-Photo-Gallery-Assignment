import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home_Page from "./Components/Home_Page.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Image_Model from "./Components/Image_Model.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Here i have used the React Router for navigate between different pages */}
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/Image_Model" element={<Image_Model />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>
);
