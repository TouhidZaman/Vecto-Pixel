import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/User/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/User/Home/Home";
import Services from "./pages/User/Services/Services";
import About from "./pages/User/About/About";
import Portfolio from "./pages/User/Portfolio/Portfolio";
import AdminPage from "./pages/admin/AdminPage";

export default function MyRoute() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route element={<NotFound />} />
         </Routes>
      </div>
   );
}
