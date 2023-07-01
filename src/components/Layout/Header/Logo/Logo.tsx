import React from "react";

const Logo: React.FC = () => {
  const logo: String = "{SimplyOne}";
  return (
    <div className="basis-1/3 flex items-center justify-center">
      <a className="font-primary text-[16px] leading-[24px] font-medium " href="/">
        {logo}
      </a>
    </div>
  );
};

export default Logo;
