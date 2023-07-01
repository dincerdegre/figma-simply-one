import React from "react";
import { ArrowIcon } from "../../assets/icons/icons";

const HeroSecond: React.FC = () => {
  return <div className="flex h-[600px] justify-between pt-[60px] pr-[60px] pb-[490px] pl-[60px] gap-[1063px] bg-second-hero bg-gray-300  bg-center bg-cover">
    <div className="font-inter text-general text-[16px] leading-[32px] font-light">by Scott Webb on Unsplash</div>
    <div>
        <ArrowIcon className="fill-general" />
    </div>
  </div>;
};

export default HeroSecond;
