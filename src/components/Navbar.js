import React from 'react';
import styled from "styled-components";
import { ButtonLabel} from "../components/Button.style";
import {btnhandler} from "./Metamask";
import "./Navbar.css";
import { useState } from 'react';
import wallet  from '../Images/wallet.png';

const Menu = () => (
  <>
    <p><a href="/Home">Home</a></p>
    <p><a href="/Whitepaper">Litepaper</a></p>
    <p><a href="/Rules">Rules</a></p>  
    <p><a href="/Almanac">Almanac</a></p>
    <p><a href="/Marketplace">Marketplace</a></p>
    <p><a href="/Team">Team</a></p>  
  </>
)

const Menu2 = () => (
  <>
    <p><a href="/Home">HOME</a></p>
    <p><a href="/Whitepaper">WHITEPAPER</a></p>
    <p><a href="/Rules">RULES</a></p>
    <p><a href="/Team">TEAM</a></p>    
  </>
)

const WalletButton = () => (
  <div className='duel__navbar-sign'>
    <button className='duel__navbar-sign_button' onClick={btnhandler}>
    <ButtonLabel>Connect Wallet</ButtonLabel>
    </button>
  </div>
)




export const Navbar = ({}) => {

  const [navbarOpen, setNavbarOpen] = useState(false)


  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!setHamburgerOpen)
  }

    const twitterBtnClick = () => {
        window.open("https://twitter.com/DuelRealms");
    }
    const discordBtnClick = () => {
      window.open("https://discord.gg/duelrealms");
  }


    return (
      <>
          <div className='duel__navbar duel__navbar-mobile'>
            <div className='duel__navbar-menu'>
                <p><a href="/MobileNav">☰</a></p>
              </div> 
              <div className='duel__navbar-links_logo'>
                <img src={"https://file.rendit.io/n/4zKWXI28EaIq9KGb9GRS.png"} alt="logo" />
              </div>

              <div className='duel__navbar-menu_wallet' onClick={btnhandler}>
                    <img src={wallet} />
                </div> 
            <div className='duel__navbar-ribbon'>
                <div className='duel__navbar-links'>
                  <div className='duel__navbar-links_container'>
                    <Menu />
                  </div>
                  <WalletButton />
                </div>
                              
            </div>
          </div>

        <div className='duel__navbar-socials_container'>
            <Icon
                src={"https://file.rendit.io/n/5SREFNchXOpnT3sEdVnB.svg"}
            />
            <Icon src={"https://file.rendit.io/n/feYwXt8rqH1Bo5eYaN37.svg"} onClick={twitterBtnClick} />
            <Icon
                src={"https://file.rendit.io/n/mI9AfF0w9MAArqp28ChF.svg"} onClick={discordBtnClick}
            />
            <Icon
                src={"https://file.rendit.io/n/jvcdNxVanIj2MIJVuZRP.png"}
            />
        </div>
        
  </>
    )
}

const Icon = styled.img`
  width: 27.47px;
  height: 27.47px;
  margin: 0px 11.53px 0px 0px;
  cursor: pointer;
`;


