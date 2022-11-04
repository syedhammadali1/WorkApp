import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loader } from "./pages/Loader";
import NotFound from "./pages/NotFound";
const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyFAQ = React.lazy(() => import("./pages/FAQPAGE"));
const LazyUseCase = React.lazy(() => import("./pages/UseCases"));
const LazyPrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));

const ProjectRoutes = () => {

  const allRoutes = [
    {
      path: '/',
      isLazy: true,
      for: <LazyHome />
    },
    {
      path: '/faq',
      isLazy: true,
      for: <LazyFAQ />
    },
    {
      path: '/usecases-all',
      isLazy: true,
      for: <LazyUseCase />
    },
    {
      path: '/privacy-policy',
      isLazy: true,
      for: <LazyPrivacyPolicy />
    },
    {
      path: '*',
      isLazy: false,
      for: <NotFound />
    }
  ]

  return (
    <Router>
      <Routes>
        {
          allRoutes.map((value: any, index: number) => {
            return (
              value.isLazy
                ? <Route key={index} path={value.path} element={
                  <React.Suspense fallback={<Loader />}>
                    {value.for}
                  </React.Suspense>
                } />
                : <Route key={index} path={value.path} element={value.for} />
            )
          })
        }
      </Routes>
    </Router >
  );
};

export default ProjectRoutes;
