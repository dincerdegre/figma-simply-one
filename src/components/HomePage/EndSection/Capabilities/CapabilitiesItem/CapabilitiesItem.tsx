import React from "react";
import {
  BracketsAngle,
  BracketsCurly,
} from "../../../../../assets/icons/icons";

interface Props {
  title: string;
  desc: string;
  icon: "angle" | "curly";
}

const CapabilitiesItem: React.FC<Props> = ({ title, desc, icon }) => {
  let iconType;
  if (icon === "angle") {
    iconType = <BracketsAngle />;
  } else if (icon === "curly") {
    iconType = <BracketsCurly />;
  }
  return (
    <div className="flex flex-col items-start gap-[30px] w-[420px]">
      {iconType}
      <h3 className="text-[24px] leading-[40px] font-primary font-normal uppercase">
        {title}
      </h3>
      <p className="text-[16px] leading-[32px] font-inter font-light">{desc}</p>
    </div>
  );
};

export default CapabilitiesItem;
