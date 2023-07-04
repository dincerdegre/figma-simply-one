import React from "react";
import symbolImages from '../../../assets/images/161d04d849b04bc1f3b55a08a8b45e56.png';

const Frame: React.FC = () => {
  return <div className="flex h-[700px] pr-[447px] pl-[60px] items-center bg-neutral-100">
    <img src={symbolImages} className="w-[933px] h-[700px]" alt="frame" />
  </div>;
};

export default Frame;
