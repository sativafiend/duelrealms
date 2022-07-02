import React from 'react';
import styled from "styled-components";
import { ButtonLabel} from "../components/Button.style";
import {btnhandler} from "./Metamask";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import "./Navbar.css";
import { useState } from 'react';


const Menu = () => (
  <>
    <p><a href="/Home">Home</a></p>
    <p><a href="/Whitepaper">Whitepaper</a></p>
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

  const [toggleMenu, setToggleMenu] = useState(false);

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
                  {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    
                    </div> 
          <div className='duel__navbar-links_logo'>
                <img src={"https://file.rendit.io/n/4zKWXI28EaIq9KGb9GRS.png"} alt="logo" />
              </div>
              {toggleMenu && (
                      <div className='duel__navbar-menu_container scale-up-center'>
                        <div className='duel__navbar-menu_container-links'>
                          <Menu2 />
                          <div className='duel__navbar-sign_button-menu'>
                          <button style={{backgroundColor: "black", 
                            color: 'white', border: '2px solid #fff'}} onClick={btnhandler}>
                            CONNECT WALLET</button>
                            </div>
                        </div>
                      </div>
                    )}
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


