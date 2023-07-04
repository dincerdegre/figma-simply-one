import React from "react";
import WideLogo from "../../components/InfoPage/WideLogo/WideLogo";
import Heading from "../../components/InfoPage/Heading/Heading";
import Substrate from "../../components/Shared/Substrate/Substrate";
import TypoColor from "../../components/InfoPage/TypoColor/TypoColor";
import Frame from "../../components/InfoPage/Frame/Frame";
import Blockquote from "../../components/Shared/Blockquote/Blockquote";

type Props = {};

const Info = (props: Props) => {
  return (
    <>
      <WideLogo />
      <Heading text="Tokens" />
      <Substrate />
      <TypoColor />
      <Substrate />
      <Heading text="General Symbols" />
      <Frame />
      <Blockquote text="Welcome! Here imagination meets innovation, and your aspirations find their ultimate expression!" />
    </>
  );
};

export default Info;
