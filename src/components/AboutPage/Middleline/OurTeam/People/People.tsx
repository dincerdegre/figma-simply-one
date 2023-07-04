import React from "react";
import PeopleItem from "./PeopleItem/PeopleItem";
import jasonImage from "../../../../../assets/images/5d046c15d3e2d18517c68c0c03d3e084.jpeg";
import robertImage from "../../../../../assets/images/d39cdb5005ae1f560ffeb684a0ca30fb.jpeg";
import elonImage from "../../../../../assets/images/46e30b28ced695f9532cc980a740171f.jpeg";
import johnnyImage from "../../../../../assets/images/c7b516f183c70bf14e8259556b334ad2.png";

const People: React.FC = () => {
  return (
    <div className="flex items-start gap-[30px]">
      <PeopleItem image={jasonImage} name="jason momoa" />
      <PeopleItem image={robertImage} name="robert downey jr" />
      <PeopleItem image={elonImage} name="elon musk" />
      <PeopleItem image={johnnyImage} name="johnny depp" />
    </div>
  );
};

export default People;
