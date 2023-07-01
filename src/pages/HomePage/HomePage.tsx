import React from "react";
import Hero from "../../components/HomePage/Hero/Hero";
import Kickstart from "../../components/Kickstart/Kickstart";
import Video from "../../components/Video/Video";
import BlockText from "../../components/BlockText/BlockText";
import Examples from "../../components/Examples/Examples";
import Capabilities from "../../components/Capabilities/Capabilities";
import HeroSecond from "../../components/HeroSecond/HeroSecond";
import Layout from "../../components/Layout/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      {/*
      <Kickstart colorType="primary" />
      <Video />
      <BlockText heading="We understand that great achievements are born from synergy and teamwork" />
      <Examples />
      <Capabilities />
      <Kickstart colorType="secondary" />
      <HeroSecond />
      <BlockText heading="Welcome! Here imagination meets innovation, and your aspirations find their ultimate expression!" /> */}
    </Layout>
  );
};

export default HomePage;
