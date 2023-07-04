import React from "react";
import Hero from "../../components/HomePage/Hero/Hero";
import SectionTwo from "../../components/HomePage/SectionTwo/SectionTwo";
import Blockquote from "../../components/Shared/Blockquote/Blockquote";
import EndSection from "../../components/HomePage/EndSection/EndSection";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SectionTwo />
      <Blockquote text="We understand that great achievements are born from synergy and teamwork" />
      <EndSection />
      <Blockquote text="Welcome! Here imagination meets innovation, and your aspirations find their ultimate expression!" />
    </>
  );
};

export default Home;
