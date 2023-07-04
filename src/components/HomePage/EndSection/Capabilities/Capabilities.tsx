import React from "react";
import CapabilitiesItem from "./CapabilitiesItem/CapabilitiesItem";

const Capabilities: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-[60px] gap-[10px] self-stretch bg-generalsubstrate text-general">
      <div className="flex items-center w-[1320px] flex-col gap-[60px]">
        <div className="flex items-center w-full">
          <h2 className="text-[56px] leading-[72px] font-primary font-light">
            Amplifying Capabilities
          </h2>
        </div>
        <div className="flex justify-between items-start w-[1095px]">
            <CapabilitiesItem title="Tailored Solutions" desc="Customized solutions that amplify your capabilities, giving you a competitive edge." icon="angle" />
            <CapabilitiesItem title="Comprehensive Expertise" desc="Deep industry knowledge and diverse skills for tackling complex challenges and delivering exceptional results." icon="curly" />
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
