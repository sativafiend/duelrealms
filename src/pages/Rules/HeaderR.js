import React from 'react';
import './HeaderR.css';
import rulesImage1 from "../../Images/rulesImage1.png";
import rulesImage2 from "../../Images/rulesImage2.png";
import {Text} from "../../components/Text.style";



export const HeaderR = () => {

    return (
        <div className='duel__headerR section__padding' id="home">

            <div className='duel__headerR-content'>
                <img src={rulesImage1} className='duel__headerR-content_img' width= "1039px" height="605px" />
                <div className='duel__headerR-content_card' >
                    <ul>
                        <li style={{ listStyleType: "none" }}>
                            <Text fontSize="24px"><a style={{ color: '#FFF' }} >Game Actions</a></Text>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                            <Text fontSize="24px"><a style={{ color: '#FFF' }} >Game Details</a></Text>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                            <Text fontSize="24px"><a style={{ color: '#FFF' }} >First Main Phase</a></Text>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                            <Text fontSize="24px"><a style={{ color: '#FFF' }} >Combat phase</a></Text>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                            <Text fontSize="24px"><a style={{ color: '#FFF' }} >Graveyard</a></Text>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                            <Text fontSize="24px"><a style={{ color: '#FFF' }} >How To Lose</a></Text>
                        </li>
                        <li style={{ listStyleType: "none" }}>
                            <Text fontSize="24px"><a style={{ color: '#FFF' }} >Duel Realms Cards</a></Text> 
                        </li>
                        <li style={{ listStyleType: "none" }}>
                            <Text fontSize="24px"><a style={{ color: '#FFF' }} >Situational Rules</a></Text> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}