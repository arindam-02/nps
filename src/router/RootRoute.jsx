import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import Teacher from "../pages/Teacher";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Admission from "../pages/Admission/Admission";

const RootRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </>
  );
};

export default RootRoute;
