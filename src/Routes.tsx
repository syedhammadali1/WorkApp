import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loader } from "./pages/Loader";
import NotFound from "./pages/NotFound";
const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyFAQ = React.lazy(() => import("./pages/FAQPAGE"));
const LazyUseCase = React.lazy(() => import("./pages/UseCases"));

const ProjectRoutes = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<Loader />}>
            <LazyHome />
          </React.Suspense>
        } />
        <Route path="/faq" element={
          <React.Suspense fallback={<Loader />}>
            <LazyFAQ />
          </React.Suspense>
        } />
        <Route path="/usecases" element={
          <React.Suspense fallback={<Loader />}>
            <LazyUseCase />
          </React.Suspense>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
