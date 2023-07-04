import React from "react";
import List from "./List/List";
import Capabilities from "./Capabilities/Capabilities";
import KickstartLine from "../../Shared/KickstartLine/KickstartLine";
import WideImage from "./WideImage/WideImage";

const EndSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center self-stretch">
      <List />
      <Capabilities />
      <KickstartLine text="Kickstart your Masterpiece!" colorType="secondary" />
      <WideImage />
    </div>
  );
};

export default EndSection;
