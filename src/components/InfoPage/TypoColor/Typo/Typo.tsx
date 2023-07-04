import React from "react";

const Typo: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-[40px] w-[1320px]">
      <h1 className="text-[90px] leading-[1.1em] font-light font-primary">&lt;h1&gt;Brown Fox&lt;/h1&gt;</h1>
      <h2 className="text-[56px] leading-[72px] font-light font-primary">&lt;h2&gt;Lazy Dog&lt;/h2&gt;</h2>
      <h3 className="text-[24px] leading-[40px] uppercase font-normal font-light font-primary">&lt;h3&gt;The quick brown fox&lt;h3&gt;</h3>
      <p className="text-[16px] leading-[32px] font-light font-inter font-light">&lt;p&gt;The quick brown fox jumps over the lazy dog&lt;/p&gt;</p>
      <p className="text-[24px] leading-[40px] font-light font-inter font-light">&lt;p&gt;The quick brown fox jumps over the lazy dog&lt;/p&gt;</p>
    </div>
  );
};

export default Typo;
