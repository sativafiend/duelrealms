import React, {Component} from 'react';
import './Cards.css';
import HoverImage from "react-hover-image";
import iceDragon from "../../Images/ICE_DRAGON.png";
import volcanicDragon from "../../Images/VOLCANIC_DRAGON.png";
import sinisterSorcerer from "../../Images/SINISTER_SORCERER.png";
import megalodon from "../../Images/MEGALODON.png";
import back from "../../Images/back.png";
import BootstrapCarousel from "../../components/BootstrapCarousel";
import Slider from 'react-slick';
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';


const images = [iceDragon, volcanicDragon, sinisterSorcerer, megalodon]

export const Cards = () => {

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,       
        beforeChange: (current, next) => setImageIndex(next),
        appendDots: (dots) => {
            return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />
        }
    };



    return (
        <div className='duel__card ' id="home">
            <div className='duel__cards-content_mobile'>
                {/* <BootstrapCarousel /> */}
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index} className= {index == imageIndex ? "slide activeSlide " : "slide" }>
                            <div className='cardGlow floating'> 
                                <HoverImage src={back} hoverSrc={img} alt={img} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='duel__cards-content '>
                <div className='cardGlow floating' style={{margin: "0 1rem"}}> 
                    <HoverImage src={back} hoverSrc={iceDragon} />
                </div>
                <div className='cardGlow floating' style={{margin: "0 1rem"}}>
                    <HoverImage src={back} hoverSrc={volcanicDragon} />
                </div>
                <div className='cardGlow floating' style={{margin: "0 1rem"}}>
                    <HoverImage src={back} hoverSrc={sinisterSorcerer} />
                </div>
                <div className='cardGlow floating'  style={{margin: "0 1rem"}}>
                    <HoverImage src={back} hoverSrc={megalodon} />
                </div>
            </div>
        </div>
    )
}


