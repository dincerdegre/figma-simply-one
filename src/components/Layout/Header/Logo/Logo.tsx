import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  const logo: String = "{SimplyOne}";
  return (
    <div className="basis-1/3 flex items-center justify-center">
      <Link className="font-primary text-[16px] leading-[24px] font-medium " to="/">
        {logo}
      </Link>
    </div>
  );
};

export default Logo;
