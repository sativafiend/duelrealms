import React from "react";
import { saveAs } from "file-saver";
import pdfImage from "../Images/tabletopRules.png";
import {HeaderR as Header} from './Rules/HeaderR';
import {BodyR as Body} from './Rules/BodyR';
import './Rules/Rules.css';
import {Diagram} from "./Home/Diagram";


export const Rules = ({}) => {

    const saveFile = () => {
        saveAs(
          "https://cdn.discordapp.com/attachments/927271953721618563/991159335747076106/Duel_RealmsGame_Rules_Gameplay_v.2_1.pdf"
        );
      };
    return (
        <>
            <Header />
            <Body />
            <Diagram />
            <div className="duel__pdf-container2">
                <button onClick={saveFile}><img src={pdfImage} id="pdfButton"/></button>
            </div>
        </>
    )
}