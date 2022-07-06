import React from 'react';
import './Partners.css';
import kaiju from "../../Images/kaiju.gif";
import ooga from "../../Images/ooga.gif";
import llama from "../../Images/llama.gif";
import pxquest from "../../Images/pxquest.gif";
import Marquee from 'react-fast-marquee';


export const Partners = () => {
    return (
        <div className='duel__partners' id="home">
            <div className='duel__partners-content'>
                <Marquee speed={80} gradient={false} >
                    <div >
                        <img src={ooga} alt="ooga"/>
                        <img src={llama} alt="llama"/>
                        <img src={pxquest} alt="pxquest"/>
                        <img src={kaiju} alt="kaiju"/>
                    </div>
                </Marquee>
            </div>
            <div className='duel__partners-content_mobile'>
                <img src={ooga} alt="ooga"/>
                <img src={llama} alt="llama"/>
                <img src={pxquest} alt="pxquest"/>
            </div>
        </div>
    )
}
