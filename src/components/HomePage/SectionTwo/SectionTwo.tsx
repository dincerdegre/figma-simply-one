import React from "react";
import KickstartLine from "../../Shared/KickstartLine/KickstartLine";
import VideoSection from "./VideoSection/VideoSection";

const SectionTwo: React.FC = () => {
  return (
    <div className="flex flex-col items-center self-stretch">
      <KickstartLine text="Kickstart your Masterpiece!" colorType="primary" />
      <VideoSection />
    </div>
  );
};

export default SectionTwo;
