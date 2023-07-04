import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


const Layout: React.FC = () => {
  return (
    <div className="flex m-auto w-[1440px] pb-0 flex-col items-center gap-[60px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
