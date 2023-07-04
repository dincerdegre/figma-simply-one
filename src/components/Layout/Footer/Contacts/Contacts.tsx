import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-[30px] text-general">
      <div className="text-[16px] leading-[32px] font-light font-inter w-[420px]">
        CONTACTS
      </div>
      <div className="flex flex-col text-[24px] leading-[40px]  w-[420px] font-inter font-light">
        <span>Viacheslav Mykhailov</span>
        <span>Product Designer / Design Manager</span>
        <span>slavik21.ua@gmail.com</span>
      </div>
    </div>
  );
};

export default Contacts;
