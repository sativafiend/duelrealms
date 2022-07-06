import React from 'react';
import styled from "styled-components";
import './MobileNav.css';
import {  useNavigate } from "react-router-dom";
import {btnhandler} from "../components/Metamask";

export const  MobileNav = ({}) => {

    const twitterBtnClick = () => {
        window.open("https://twitter.com/DuelRealms");
    }
    const discordBtnClick = () => {
      window.open("https://discord.gg/duelrealms");
  }

  return (
    <>
        <div className='duel__mobile-nav'>
        <ul>
            <li>
                <a href='/Home'>Home</a>
            </li>
            <li>
                <a href='/Whitepaper'>Litepaper</a>
            </li>
            <li>
                <a href='/Rules'>Rules</a>
            </li>
            <li>
                <a href='/Team'>Team</a>
            </li>
        </ul>
        </div> 
        <div className='duel__mobile-button' >
            <button onClick={btnhandler}>
                Connect Wallet
            </button>  
        </div> 
        <div className='duel__mobile-socials_container'>
            <button style={{backgroundColor:"black"}}>
                <img src={"https://cdn.discordapp.com/attachments/927271953721618563/993379210347425882/unknown.png"}/>
            </button>
            <button style={{backgroundColor:"black"}}>
            <img src={"https://cdn.discordapp.com/attachments/927271953721618563/993379241578213376/unknown.png"}/> 
            </button>
            <button style={{backgroundColor:"black"}} onClick={twitterBtnClick}>
            <img src={"https://cdn.discordapp.com/attachments/927271953721618563/993379320510824519/unknown.png"}/>
            </button>
            <button style={{backgroundColor:"black"}} onClick={discordBtnClick}>
            <img src={"https://cdn.discordapp.com/attachments/927271953721618563/993379350634311721/unknown.png"}/>
            </button>

        </div>
    </>
  )
}
