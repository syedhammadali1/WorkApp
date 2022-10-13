import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQPAGEPage from "./pages/FAQPAGE";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQPAGEPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
