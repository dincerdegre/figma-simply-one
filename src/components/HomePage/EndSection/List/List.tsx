import React from "react";
import Examples from "./Examples/Examples";
import { ArrowIcon } from "../../../../assets/icons/icons";

const List: React.FC = () => {
  return (
    <div className="flex flex-col justify-center self-stretch gap-[10px] items-end">
      <div className="flex justify-between items-center w-[1267px]">
        <Examples />
        <div className="flex pt-[60px] pr-[60px] pb-[60px] pl-[142px] flex-col justify-center items-end gap-[650px] bg-list-image bg-cover bg-center bg-gray-300">
        <span className='right-[60px] bottom-[60px]'><ArrowIcon className="fill-general" /></span>
        <p className="text-generalsubstrate text-[16px] leading-[32px] font-inter font-light">by Wences Sanz-Alonso on Unsplash</p>
        </div>
      </div>
    </div>
  );
};

export default List;
