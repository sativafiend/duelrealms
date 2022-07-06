import React from "react";
import { saveAs } from "file-saver";
import pdfImage from "../Images/pdfImage.png";
import {HeaderR as Header} from './Rules/HeaderR';
import {BodyR as Body} from './Rules/BodyR';
import './Rules/Rules.css';
import {Diagram} from "./Home/Diagram";
import MobileAccordionWP from "./Whitepaper/MobileAccordionWP";
import { accordionData } from "./Rules/data";


export const Rules = ({}) => {

    const saveFile = () => {
        saveAs(
          "https://cdn.discordapp.com/attachments/927271953721618563/991159335747076106/Duel_RealmsGame_Rules_Gameplay_v.2_1.pdf"
        );
      };
    return (
        <>
            <Header />
            <ul className="accordion">
                {accordionData.map(({ heading, content }) => (
                    <MobileAccordionWP heading={heading} content={content} />
                ))}
            </ul>
            <Body />
            <Diagram />
            <div className="duel__pdf-container2">
                <button onClick={saveFile}><img src={pdfImage} id="pdfButton"/></button>
                Download tabletob gameplay rules
            </div>
        </>
    )
}