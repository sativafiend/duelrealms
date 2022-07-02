import React from 'react';
import './TeamCards.css';
import Tyler from "../../Images/Tyler.png";
import Fred from "../../Images/Fred.png";
import Shonny from "../../Images/Shonny.png";
import Pong from "../../Images/Pong.png";
import Huumza from "../../Images/Huumza.png";
import Irish from "../../Images/Irish.png";
import JMoyer from "../../Images/Jmoyer.png";
import Canter from "../../Images/Canter.png";
import Dylan from "../../Images/Dylan.png";
import Kronos from "../../Images/Kronos.png";

export const TeamCards = () => {
    return (
        <div className='duel__teamcard section__padding' id="home">
            <div className='duel__team-card_content'>
                <div>
                    <img src={Tyler}  width="300px" height="413px" />
                </div>
                <div>
                    <img src={Fred}  width="300px" height="413px" />
                </div>
                <div>
                    <img src={Shonny}  width="300px" height="413px" />
                </div>
                <div>
                    <img src={Pong}  width="300px" height="413px" />
                </div>
            </div>
            <div className='duel__team-card_content'>
                <div>
                    <img src={Huumza} width="300px" height="413px" />
                </div>
                <div>
                    <img src={Irish} width="300px" height="413px" />
                </div>
                <div>
                    <img src={JMoyer} width="300px" height="413px" />
                </div>
                <div>
                    <img src={Canter} width="300px" height="413px" />
                </div>
            </div>
            <div className='duel__team-card_content2'>
                <div className='duel__teamcard-double'>
                    <img src={Dylan} width="300px" height="413px" />
                </div>
                <div>
                    <img src={Kronos} width="300px" height="413px" />
                </div>
            </div>
        </div>
    )
}