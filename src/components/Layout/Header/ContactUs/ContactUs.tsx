import React from "react";

const ContactLink: React.FC = () => {
  return (
    <div className="basis-1/3 flex items-center justify-end">
      <a href="mailto:example@example.com" className=" text-[16px] leading-[32px] font-inter font-light hover:underline">
        @ Contact Us
      </a>
    </div>
  );
};

export default ContactLink;
