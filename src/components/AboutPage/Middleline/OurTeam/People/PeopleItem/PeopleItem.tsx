import React from "react";

interface Props {
  name: string;
  image: string;
}

const PeopleItem: React.FC<Props> = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center gap-[15px]">
      <div className="w-[308px] h-[308px] overflow-hidden relative">
        <div className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-0">
          <img
            src={image}
            className="grayscale h-[100%] max-w-none border-box"
          />
        </div>
      </div>
      <h3 className="text-[24px] leading-[40px] uppercase font-primary text-white">{name}</h3>
    </div>
  );
};

export default PeopleItem;
