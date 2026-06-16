import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./index.css";
import Home from "./Pages/Home";
import Kuis from "./Pages/Kuis";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kuis" element={<Kuis/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
