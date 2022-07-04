import React from 'react';
import './PartnerCards.css';
import llama from "../../Images/llamaverse.png";
import pxquest from "../../Images/pxquest.png";

export const PartnerCards = () => {
    return (
        <div className='duel__partnercards section__padding' id="home">
            <div className='duel__partnercards-content'>
                <img src={llama} />
                <img src={pxquest} />
            </div>
        </div>
    )
}