import React from 'react';
import './Cards.css';
import HoverImage from "react-hover-image";
import iceDragon from "../../Images/ICE_DRAGON.png";
import volcanicDragon from "../../Images/VOLCANIC_DRAGON.png";
import sinisterSorcerer from "../../Images/SINISTER_SORCERER.png";
import megalodon from "../../Images/MEGALODON.png";
import back from "../../Images/back.png";
import { CardGlow } from '../../components/Container.style';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {images } from '../../components/Images';
import { ImageSlider } from '../../components/ImageSlider';

export const Cards = () => {



    return (
        <div className='duel__card section__padding' id="home">
            <div className='duel__cards-content_mobile'>
                <ImageSlider images={images}/>
            </div>
            <div className='duel__cards-content'>
                <CardGlow style={{margin: "0 1rem"}}> 
                    <HoverImage src={back} hoverSrc={iceDragon} />
                </CardGlow>
                <CardGlow style={{margin: "0 1rem"}}>
                    <HoverImage src={back} hoverSrc={volcanicDragon} />
                </CardGlow>
                <CardGlow style={{margin: "0 1rem"}}>
                    <HoverImage src={back} hoverSrc={sinisterSorcerer} />
                </CardGlow>
                <CardGlow style={{margin: "0 1rem"}}>
                    <HoverImage src={back} hoverSrc={megalodon} />
                </CardGlow>
            </div>
        </div>
    )
}
