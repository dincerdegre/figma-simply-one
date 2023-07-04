import React from "react";

interface Props {
  number: number;
  title: string;
  desc: string;
}

const ExampleItem: React.FC<Props> = ({ number, title, desc }) => {
  const formattedNumber = number.toString().padStart(2, "0");
  const formattedTitle = title.toUpperCase();
  return (
    <div className="flex flex-col items-start gap-[30px] w-[420px] text-general">
      <div className="text-[24px] leading-[40px] font-primary font-medium">
        {formattedNumber}
      </div>
      <h3 className="text-[24px] leading-[40px] font-primary font-normal">
        {formattedTitle}
      </h3>
      <p className="font-inter text-[16px] leading-[32px] font-light whitespace-pre-wrap">
        {desc}
      </p>
    </div>
  );
};

export default ExampleItem;
