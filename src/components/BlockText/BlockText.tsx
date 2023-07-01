import React from "react";

interface Props {
  heading: string;
}

const BlockText: React.FC<Props> = ({ heading }) => {
  return (
    <div className="flex flex-col items-center w-[1440px] gap-[60px]">
      <div>
        <h2 className="font-primary text-[56px] leading-[72px] text-general">
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default BlockText;
