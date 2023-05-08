import React, { lazy, Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// lazy loading
const Features: React.LazyExoticComponent<React.FC> = lazy(() => import("./pages/Features"));
const Pricing: React.LazyExoticComponent<React.FC> = lazy(() => import("./pages/Pricing"));
const Stories: React.LazyExoticComponent<React.FC> = lazy(() => import("./pages/Stories"));

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={"/"}>
              <Route index element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="stories" element={<Stories />} />
              <Route path="*" element={<div>No Page Found</div>} />
            </Route>
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default App;
