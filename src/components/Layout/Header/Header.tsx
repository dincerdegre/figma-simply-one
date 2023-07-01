import React from "react";
import Navigation from "./Navigation/Navigation";
import ContactUs from "./ContactUs/ContactUs";
import Logo from "./Logo/Logo";

const Header: React.FC = () => {
  return (
    <div className="h-[84px] self-stretch bg-white flex justify-between pr-[60px]  pl-[60px] border-b-[1px] border-generalsubstrate text-general">
      <Navigation />
      <Logo />
      <ContactUs />
    </div>
  );
};

export default Header;
