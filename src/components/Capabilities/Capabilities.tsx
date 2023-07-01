import React from "react";
import CapabilityItem from "./CapabilityItem/CapabilityItem";

const Capabilities: React.FC = () => {
  return <div className="flex p-[60px] flex-col items-center bg-generalsubstrate text-general">
    <div className="w-full">
    <h2 className="text-[56px] leading-[72px] font-primary font-light">Amplifying Capabilities</h2>
    </div>
    <div className="mt-[60px] mb-[60px] w-[1095px] flex items-start justify-between">
        <CapabilityItem title="Tailored Solutions" desc="Customized solutions that amplify your capabilities, giving you a competitive edge." />
        <CapabilityItem title="Comprehensive Expertise" desc="Deep industry knowledge and diverse skills for tackling complex challenges and delivering exceptional results." />
    </div>
    <div className="w-[1095px] flex justify-between items-center">
        <div className="w-[683px]"><p className=" uppercase text-[16px] leading-[32px] font-light">We constantly strive to stay at the forefront of emerging technologies  <br /> and trends, embracing the latest advancements to fuel your success</p></div>
        <div className="font-inter text-[64px] leading-none">✹</div>
    </div>
  </div>;
};

export default Capabilities;
