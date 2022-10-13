import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQPAGEPage from "./pages/FAQPAGE";
import NotFound from "./pages/NotFound";
const LazyHome = React.lazy(() => import("./pages/Home"));

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback='Loading..'>
            <LazyHome />
          </React.Suspense>
        } />
        <Route path="/faq" element={<FAQPAGEPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
