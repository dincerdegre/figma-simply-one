import React from "react";

interface Props {
  colorType: "primary" | "secondary",
}

const Kickstart: React.FC<Props> = ({ colorType }) => {
  let bgColor ="bg-primary", textColor = "text-general", iconColor = "text-genaral";
  if (colorType === "secondary") {
    bgColor = "bg-general";
    textColor= "text-generalsubstrate";
    iconColor = "text-primary";
  }
  return (
    <div className={`${bgColor} pt-[32px] pb-[32px] w-full overflow-hidden`}>
      <div className="flex flex-nowrap  inline-block w-[2000px]">
        <h2 className={`${textColor} font-primary text-[56px] leading-[72px]  `}>
          Kickstart your Masterpiece!
        </h2>
        <span className={`${iconColor} font-primary text-[62px] leading-[72px] pr-[20px] pl-[20px]`}>
          ✹
        </span>
        <h2 className={`${textColor} font-primary text-[56px] leading-[72px]  `}>
          Kickstart your Masterpiece!
        </h2>
      </div>
    </div>
  );
};

export default Kickstart;
