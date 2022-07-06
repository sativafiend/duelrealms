import React from "react";
import {Header} from "./Home/Header";
import {Cards} from "./Home/Cards";
import {Body} from "./Home/Body";
import {Partners} from "./Home/Partners";
import './Home/styles.css'

export const Home = ({}) => {

  return (
    <>
        <Cards />
        <Header />
        <Body />
        {/* <Diagram /> */}
        <div className='header' style={{color:"#eea518", fontFamily:"Quantico", fontSize:"30px"}}>
                Confirmed Partnerships
            </div>
        <Partners />
    </>
  );
};




