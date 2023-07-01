import React from "react";

const Hero: React.FC = () => {
  return (
      <div className="h-[470px] bg-white flex items-end contents-center">
        <div className="h-[297px] w-full mr-[60px] ml-[60px] flex">
          <div className="basis-1/2">
            <h1 className="font-primary text-[90px] leading-[1.1em] w-[685px] text-general">
              Hello!
              <br />
              Nice to <br />
              meet you!
            </h1>
          </div>
          <div className="basis-1/2 pl-[30px] flex flex-col justify-between">
            
            <p className="text-[16px] leading-[32px] text-general">
              We are thrilled to have you here on our Hiro Block, the gateway to
              an
              <br /> extraordinary digital journey. Allow us to introduce
              ourselves as pioneers in the <br /> realm of cutting-edge
              technology and transformative solutions!
            </p>
          </div>
        </div>
      </div>
  );
};

export default Hero;
