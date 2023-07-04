import React from "react";
interface Props {
  text: string;
}

const Blockquote: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex justify-center items-end gap-[10px]">
      <h2 className="font-primary font-light w-[1320px] text-[56px] leading-[72px] text-general">
        {text}
      </h2>
    </div>
  );
};

export default Blockquote;
