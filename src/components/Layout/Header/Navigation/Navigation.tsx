import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div className="basis-1/3 flex items-center">
      <ul className="flex gap-[60px] items-start w-[201px] text-[16px] leading-[32px] font-inter font-light">
        <li>
          <Link to="/aboutus" className="hover:underline">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/info" className="hover:underline">
            Info Page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
