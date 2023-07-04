import React from "react";

interface Props {
  color: "general" | "primary" | "substrate";
}

const ColorItem: React.FC<Props> = ({ color }) => {
  let bgColor, text, hex, textColor;
  if (color === "general") {
    bgColor = "bg-general";
    text = "General";
    hex = "#111C24";
    textColor = "text-generalsubstrate";
  } else if (color === "primary") {
    bgColor = "bg-primary";
    text = "Primary";
    hex = "#CAFC01";
    textColor = "text-general";
  } else if (color === "substrate") {
    bgColor = "bg-generalsubstrate";
    text = "Substrate";
    hex = "#F9FAFC";
    textColor = "text-general";
  }
  return (
    <div
      className={`${bgColor} ${textColor} flex flex-col justify-center items-center pt-[64px] pb-[64px] pr-[56px] pl-[56px] font-inter font-light`}
    >
      <span className="text-[24px] leading-[40px]">{text}</span>
      <span className="text-[16px] leading-[32px]">{hex}</span>
    </div>
  );
};

export default ColorItem;
