import React from "react";
import pdfImage from "../Images/whitepaperDownload.png";
import { saveAs } from "file-saver";
import {pdfButton as PDFButton} from "../components/Button.style";
import { HeaderW as Header } from "./Whitepaper/HeaderW.js";
import { BodyW as Body } from "./Whitepaper/BodyW";
import './Whitepaper/Whitepaper.css';

export const Whitepaper = ({}) => {

    const saveFile = () => {
        saveAs(
          "https://cdn.discordapp.com/attachments/949815117103648768/988864568832962641/Duel_Realms.pdf"
        );
      };


    return (
        <>
            <div  className="duel__pdf-container">
                <PDFButton onClick={saveFile}><img src={pdfImage} width= "750px" height="120" /></PDFButton>
            </div>
            <Header />
            <Body />
        </>
    )
}