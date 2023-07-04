import React from "react";

const SocialMedia: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-[30px] text-general">
      <div className="text-[16px] leading-[32px] font-light font-inter w-[308px]">
        SOCIAL MEDIA
      </div>
      <div className="flex w-[277px] justify-between items-start">
        <div className="flex flex-col items-start gap-[30px]">
          <span className="text-[24px] leading-[40px] font-inter font-light underline">
            Blog
          </span>
          <span className="text-[24px] leading-[40px] font-inter font-light underline">
            Twitter
          </span>
        </div>
        <div className="flex flex-col items-start gap-[30px]">
          <span className="text-[24px] leading-[40px] font-inter font-light underline">
            Bento
          </span>
          <span className="text-[24px] leading-[40px] font-inter font-light underline">
            Linkedin
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
