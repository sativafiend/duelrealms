import React from "react";
import {Carousel} from "react-bootstrap";
import iceDragon from "../Images/ICE_DRAGON.png";
import volcanicDragon from "../Images/VOLCANIC_DRAGON.png";
import sinisterSorcerer from "../Images/SINISTER_SORCERER.png";
import megalodon from "../Images/MEGALODON.png";

export default function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
            <img 
            className="d-block"
            src = {iceDragon}
            alt="Ice Dragon" />
        </Carousel.Item>
        <Carousel.Item>
            <img 
            className="d-block"
            src = {volcanicDragon}
            alt="Volcanic Dragon" />
        </Carousel.Item>
        <Carousel.Item>
            <img 
            className="d-block"
            src = {sinisterSorcerer}
            alt="Sinister Sorcerer" />
        </Carousel.Item>
        <Carousel.Item>
            <img 
            className="d-block"
            src = {megalodon}
            alt="Megalodon" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}


