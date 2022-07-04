import React from 'react';
import './HeaderW.css';
import mainImage from "../../Images/manFlame.png";
import {Text} from "../../components/Text.style";



export const HeaderW = () => {

    return (
        <div className='duel__headerW section__padding' id="home">

            <div className='duel__headerW-content'>
                <div className='duel__headerW-content_img'>
                    <img src="https://cdn.discordapp.com/attachments/958048791800475668/971985603249987624/DuelRealms_Box1.png"  />
                </div>

                <div className='duel__headerW-content_card' >
                        <ul>
                            <li style={{ listStyleType: "none" }}>
                            <   Text fontSize="24px"><a style={{ color: '#FFF' }} >What are the Cards?</a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >Duel Realms Game?</a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >Duel Realms NFT owners</a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >1. DUEL Token </a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF'}} >2. Duel Realms Tournament </a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >3. Free Physical Starter Deck</a></Text>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >4. PFP Airdrop </a></Text> 
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >Duel Realms Marketplace</a></Text> 
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >Fusion Chamber</a></Text> 
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <Text fontSize="24px"><a style={{ color: '#FFF' }} >Partnership NFT Cards </a></Text> 
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}