import React from 'react';
import './HeaderW.css';
import mainImage from "../../Images/manFlame.png";
import {Text} from "../../components/Text.style";



export const HeaderW = () => {

    return (
        <div className='duel__headerW section__padding' id="home">

            <div className='duel__headerW-content'>
                <img src={mainImage} className='duel__headerW-content_img' width= "1039px" height="605px" />
                <div className='duel__headerW-content_card' >
                        <ul>
                            <li style={{ listStyleType: "none" }}>
                            <   Text fontSize="24px"><a style={{ color: '#FFF' }} >What is Duel Realms?</a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >What are the Cards?</a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >Collector Card Collection</a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >Deck Builder Collection</a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF'}} >Partnership Card Collections</a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >Duel Realms Marketplace</a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >Tokenomics</a></Text> 
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >Duel Realms Team</a></Text> 
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}