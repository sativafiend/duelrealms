import React from 'react';
import './Description.css';
import {Text} from "../../components/Text.style";

export const Description = () => {

    return (
        <div className='duel__description section__padding' id="home">
                <div className='duel__description-content'>
                    <h1 >
                        The Duel Realms Roster
                    </h1>
                        As avid gamers and oldschool TCG collectors we are a group of friends who have always dreamed of moving from the collectible card world to the digital realm.  
                        However up until today the digital world was not the ideal medium for a collectible card game due to its inability to provide true ownership and  document provenance.  
                        Then came the blockchain and all that changed, we can now assign true asset ownership and usage rights for digital cards as well as implement a tokenized reward system for playing the game.  
                        In short the tech has caught up and we are ready to pioneer new grounds in the TCG world. 
                    
            </div>    
        </div>
    )
}