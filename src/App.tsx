import React, { lazy, Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

// lazy loading
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Stories = lazy(() => import("./pages/Stories"));

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default App;
