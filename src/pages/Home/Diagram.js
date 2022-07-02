import React from 'react';
import './Diagram.css';
import cardDiagram from "../../Images/cardDiagram.png";
import hallow from "../../Images/llama.gif";

export const Diagram = () => {

    return (
        <>
         <div className='duel__diagram section__padding' id="home">
            <img src={cardDiagram} />
        </div>
        {/* <div className='duel__hallowcard'>
            <img src={hallow} />
        </div> */}
        </>
    )
}