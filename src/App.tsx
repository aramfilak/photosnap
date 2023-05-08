import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Errors/Loading";
import Error from "./components/Errors/Error";

// lazy loading
const Features: React.LazyExoticComponent<React.FC> = lazy(
  () => import("./pages/Features/Features")
);
const Pricing: React.LazyExoticComponent<React.FC> = lazy(() => import("./pages/Pricing/Pricing"));
const Stories: React.LazyExoticComponent<React.FC> = lazy(() => import("./pages/Stories/Stories"));

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={"/"}>
              <Route index element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="stories" element={<Stories />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default App;
