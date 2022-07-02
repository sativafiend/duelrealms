import React from "react";
import { 
    TeamContainer,
    TeamPage,
    Card,
    RowContainer2,TeamContainer2
} from "../components/Container.style";
import Tyler from "../Images/Tyler.png";
import Fred from "../Images/Fred.png";
import Shonny from "../Images/Shonny.png";
import Pong from "../Images/Pong.png";
import Huumza from "../Images/Huumza.png";
import Irish from "../Images/Irish.png";
import JMoyer from "../Images/Jmoyer.png";
import Canter from "../Images/Canter.png";
import Dylan from "../Images/Dylan.png";
import Kronos from "../Images/Kronos.png";
import {Description} from './Team/Description';
import {TeamCards} from './Team/TeamCards';

export const Team = ({}) => {
  return (
    <>
        <Description />
        <TeamCards />
    </>

  )
}
