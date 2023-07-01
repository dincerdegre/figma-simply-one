import React from "react";
import { ReactComponent as BracketsAngle } from "../../../assets/icons/BracketsAngle.svg";

interface Props {
  title: string;
  desc: string;
}

const CapabilityItem: React.FC<Props> = ({ title, desc }) => {
  const formattedTitle = title.toUpperCase();
  return (
    <div className="flex w-[420px] flex-col items-start gap-[30px]">
      <div className="h-[30px] w-[30px]">
        <BracketsAngle />
      </div>
      <div className="font-primary text-[24px] leading-[40px] font-normal">{formattedTitle}</div>
      <div className="font-inter text-[16px] leading-[32px] font-light">{desc}</div>
    </div>
  );
};

export default CapabilityItem;
