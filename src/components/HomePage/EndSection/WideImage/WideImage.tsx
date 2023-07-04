import React from "react";
import { ArrowIcon } from "../../../../assets/icons/icons";

const WideImage: React.FC = () => {
  return (
    <div className="flex h-[600px] justify-center items-center gap-[1063px] self-stretch pt-[60px]  pr-[60px]  pl-[60px]  pb-[490px]  bg-wide-image bg-cover bg-center bg-gray-300">
      <p className="text-[16px] leading-[32px] font-light font-inter text-general">
        by Scott Webb on Unsplash
      </p>
      <span>
        <ArrowIcon className="fill-general" />
      </span>
    </div>
  );
};

export default WideImage;
