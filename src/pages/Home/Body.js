import React from 'react';
import './Body.css';


export const Body = () => {

    return (
        <div className='duel__body section__padding' id="home">
            <div className='duel__body-content'>
                <h1>What we’re building</h1>
                    <div className='duel__body-content_container'>
                        <h2 >
                        Physical Cards for <br />
                        <p >Holders</p>
                        </h2>
                        <h2  >
                        Blockchain Powered
                        <br />
                        <p >Play & Earn Gaming</p>
                        </h2>
                        <h2  >
                        Official Duel Realms
                        <br />
                        <p >Tournaments</p>
                        </h2>
                    </div>
                <h1 >And much more...</h1>
            </div>
        </div>
    )
}