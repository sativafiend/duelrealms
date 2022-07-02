import styled from "styled-components";
import Button from "./Button";

export const StyledButton = styled.button`
    width: 220px;
    height: 35px;
    background: linear-gradient(180deg, rgba(233,158,63,1) 0%, 
    rgba(220,138,62,1) 35%, rgba(207,117,58,1) 100%);
    box-shadow: 0px 0px 3px 0px #eea61b, 0px 0px 5px 0px #eea61b,
    0px 0px 19px 0px #eea61b, 0px 0px 38px 0px #eea61b, 0px 0px 65px 0px #eea61b,
    0px 0px 113px 0px #eea61b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 30px 0px 87px 0px;
    font-family: Quantico;
    font-weight: 400;
    border: none;
    display:inline-block;

    &:hover {
        & label {
            color: white;
        }
    }
`

export const ButtonLabel = styled.label`
    font-size: 20px;
    font-family: 'Quantico';
    color: black;
    justify-content: center;
    align-items: center;
    margin: auto;
    cursor: pointer;
    

`

export const WalletButton = styled.button`
    display: flex;
    font-size: 24px;
    font-family: 'Quantico';
    font-weight: 400;
    background: linear-gradient(180deg, rgba(242,164,68,1) 0%, 
    rgba(217,136,65,1) 35%, rgba(140,69,53,1) 100%);
    border-radius: 10px;
    border: none;
    margin-left: 4rem;

    &:hover {
        & label {
            color: white;
        }
    }
`

export const pdfButton = styled.button`
    background-color: black;
    display: flex;
    border: none;

`

