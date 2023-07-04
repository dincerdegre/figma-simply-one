import React from "react";
import { ArrowIcon } from "../../../assets/icons/icons";

const Hero: React.FC = () => {
  return (
    <div className="h-[470px] flex flex-col justify-end items-center gap-[10px]">
      <div className="w-[1320px] gap-[30px] flex items-end">
        <div className="flex flex-col">
          <h1 className="text-general font-primary text-[90px] w-[685px] font-light leading-[1.1em]">
            Hello!<br/>Nice to <br />meet you!
          </h1>
        </div>
        <div className="flex flex-col self-stretch justify-between items-start w-[645px]">
          <ArrowIcon className="fill-primary" />
          <p className="text-[16px] leading-[32px] font-light text-general font-inter">
            We are thrilled to have you here on our Hiro Block, the gateway to
            an <br/>extraordinary digital journey. Allow us to introduce ourselves as
            pioneers in <br/>the realm of cutting-edge technology and transformative
            solutions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
