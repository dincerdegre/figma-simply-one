import React from "react";
import SocialMedia from "./SocialMedia/SocialMedia";
import Contacts from "./Contacts/Contacts";
import Copyright from "./Copyright/Copyright";
import CodedBy from "./CodedBy/CodedBy";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[60px] pt-[60px]  pb-[20px] self-stretch  border-t-[1px] border-generalsubstrate">
      <div className="flex justify-between items-start w-[1320px]">
        <SocialMedia />
        <Contacts />
        <Copyright />
      </div>
      <CodedBy />
    </div>
  );
};

export default Footer;
