import React from "react";
import {Header} from "./Home/Header";
import {Cards} from "./Home/Cards";
import {Body} from "./Home/Body";
import {Diagram} from "./Home/Diagram";
import {Partners} from "./Home/Partners";

export const Home = ({}) => {

  return (
    <>
        <Cards />
        <Header />
        <Body />
        <Diagram />
        {/* <Partners /> */}
    </>
  );
};




