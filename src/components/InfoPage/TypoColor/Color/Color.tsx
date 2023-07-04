import React from "react";
import ColorItem from "./ColorItem/ColorItem";

const Color: React.FC = () => {
  return (
    <div className="flex flex-row items-start gap-[10px] w-[1320px]">
      <ColorItem color="general" />
      <ColorItem color="primary" />
      <ColorItem color="substrate" />
    </div>
  );
};

export default Color;
