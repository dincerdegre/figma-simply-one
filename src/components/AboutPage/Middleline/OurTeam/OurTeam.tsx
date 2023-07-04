import React from "react";
import People from "./People/People";

const OurTeam: React.FC = () => {
  return (
    <div className="flex flex-col items-start p-[60px] self-stretch bg-general text-generalsubstrate">
      <div className="flex flex-col items-center gap-[60px]">
        <div className="flex items-center w-[1320px]">
          <h2 className="flex flex-col flex-1 font-primary text-[56px] leading-[72px] font-light">Meet our team</h2>
          <p className="flex flex-col shrink-0 w-[530px] text-[16px] leading-[32px] font-light font-inter">
            Our team is built on a foundation of collaborative excellence,
            combining diverse talents and expertise to deliver outstanding
            results
          </p>
        </div>
        <People />
      </div>
    </div>
  );
};

export default OurTeam;
