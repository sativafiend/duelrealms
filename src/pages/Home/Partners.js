import React from 'react';
import './Partners.css';
import kaiju from "../../Images/kaiju.gif";
import ooga from "../../Images/ooga.gif";
import llama from "../../Images/llama.gif";
import pxquest from "../../Images/pxquest.gif";

export const Partners = () => {
    return (
        <div className='duel__partners section__padding' id="home">
            <div className='duel__partners-content'>
                <img src={ooga} />
                <img src={llama} />
                <img src={pxquest} />
            </div>
        </div>
    )
}
