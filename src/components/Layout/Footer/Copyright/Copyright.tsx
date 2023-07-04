import React from "react";

const Copyright: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-[30px] text-general">
      <div className="text-[16px] leading-[32px] font-light font-inter w-[420px]">
      COPYRIGHT
      </div>
      <div className="text-[24px] leading-[40px] font-inter font-light w-[420px]">
      © 2023 Designee. Some rights reserved. Made with <span className="text-primary">❤️</span> by Viacheslav #fr0st2o11.
      </div>
    </div>
  );
};

export default Copyright;
