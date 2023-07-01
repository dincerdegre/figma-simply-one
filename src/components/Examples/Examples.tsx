import React from "react";
import image02 from "../../assets/images/image-02.png";
import ExampleItem from "./ExampleItem/ExampleItem";

const Examples: React.FC = () => {
  return (
    <div className="h-[852px] w-full flex flex-col  items-end">
      <div className="w-[1267px] h-[852px] flex justify-between items-center">
        <div className="w-[420px] h-[732px]">
          <ExampleItem
            number={1}
            title="empower your vision"
            desc="Unlock your business's potential with our innovative solutions, bringing your vision to life"
          />
          <ExampleItem
            number={2}
            title="seamless collaboration"
            desc="Foster strong partnerships and seamless teamwork, working together towards shared goals"
          />
          <ExampleItem
            number={3}
            title="Future-Proof Solutions"
            desc="Stay ahead in the digital landscape with our       forward-thinking approach"
          />
        </div>
        <div className="w-[480px] h-auto">
          <img src={image02} alt="alonso unsplash" />
        </div>
      </div>
    </div>
  );
};

export default Examples;
