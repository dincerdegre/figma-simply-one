import React from "react";
import ExampleItem from "./ExampleItem/ExampleItem";

const Examples: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-[60px]">
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
  );
};

export default Examples;
