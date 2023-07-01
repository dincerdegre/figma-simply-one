import React from "react";

const Navigation: React.FC = () => {
  return (
    <div className="basis-1/3 flex items-center">
      <ul className="flex gap-[60px] items-start w-[201px] text-[16px] leading-[32px] font-inter font-light">
        <li>
          <a href="/" className="hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Info Page
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
