import React from "react";

interface Props {
  colorType: "primary" | "secondary";
  text: string;
  repeat?: number;
}

const KickstartLine: React.FC<Props> = ({ text, colorType, repeat = 3 }) => {
  let bgColor = "bg-primary",
    textColor = "text-general",
    iconColor = "text-genaral";
  if (colorType === "secondary") {
    bgColor = "bg-general";
    textColor = "text-generalsubstrate";
    iconColor = "text-primary";
  }
  const repeatedText = Array.from({ length: repeat }, (_, index) => (
    <>
      <h2
        key={index}
        className={`${textColor} font-primary text-[56px] leading-[72px]`}
      >
        {text}
      </h2>
      <span
        className={`${iconColor} font-primary text-[62px] leading-[72px] pr-[20px] pl-[20px]`}
      >
        ✹
      </span>
    </>
  ));
  return (
    <div className={`${bgColor} pt-[30px] pb-[30px] w-full relative overflow-hidden`}>
        <div className="scroll">
          <div>{repeatedText}</div>
          <div>{repeatedText}</div>
        </div>
    </div>
  );
};

export default KickstartLine;
