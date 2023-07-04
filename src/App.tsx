import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Info from "./pages/Info/Info";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<About />} />
        <Route path="info" element={<Info />} />
      </Route>
    </Routes>
  );
};

export default App;
