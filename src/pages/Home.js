import React from "react";
import {Header} from "./Home/Header";
import {Cards} from "./Home/Cards";
import {Body} from "./Home/Body";
import {Diagram} from "./Home/Diagram";
import {Partners} from "./Home/Partners";
import {Team} from './Team'

export const Home = ({}) => {

  return (
    <>
        <Cards />
        <Header />
        <Body />
        {/* <Diagram /> */}
        <Partners />
    </>
  );
};




