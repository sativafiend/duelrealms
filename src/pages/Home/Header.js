import React from 'react';
import './Header.css';

export const Header = () => {

    const btnClick = () => {
        window.open("https://discord.gg/duelrealms");
    }
    return (
        <div className='duel__header section__padding' id="home">
            <div className='duel__header-content'>                
                    <h1>
                        Duel Realms   
                    </h1>
                <p >A WEB3 NFT Trading Card Game</p>
                <h2 >Play to win, hold to earn.</h2>
                    <div className='duel__header-content_button'>
                        <button style={{backgroundColor: "transparent", border: "none", color: "black"}} onClick={btnClick}>
                                Join our Discord
                        </button>
                    </div>
            </div>
        </div>
    )
}