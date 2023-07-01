import React from "react";

interface Props {
  number: number;
  title: string;
  desc: string;
}

const ExampleItem: React.FC<Props> = ({ number, title, desc }) => {
    const formattedNumber = number.toString().padStart(2,'0');
    const formattedTitle = title.toUpperCase();
  return (
    <div className="pb-[60px] text-general">
      <div className="text-[24px] leading-[40px] font-primary pb-[30px] font-medium">{formattedNumber}</div>
      <div className="text-[24px] leading-[40px] font-primary pb-[30px] font-normal">{formattedTitle}</div>
      <div className="font-inter text-[16px] leading-[32px] font-normal whitespace-pre-wrap">{desc}</div>
    </div>
  );
};

export default ExampleItem;
