import styled from "styled-components";

export const HomePage = styled.div`
  height: 2612px;
  background-color: #000000;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  margin: auto;
  align-items: flex-end;
  padding: 32px 0px 41px 0px;
`

export const WhitepaperPage = styled.div`
  height: 5156px;
  background-color: #000000;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  margin: auto;
  align-items: flex-end;
  padding: 32px 0px 41px 0px;
`
export const RulesPage = styled.div`
  height: 7789px;
  background-color: #000000;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  margin: auto;
  align-items: flex-end;
  padding: 32px 0px 41px 0px;
  `

  export const AlmanacPage = styled.div`
  height: 1921px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  margin: auto;
  align-items: flex-end;
  padding: 32px 0px 41px 0px;
  background-repeat: no-repeat;
  background-image: url("https://media.discordapp.net/attachments/927271953721618563/991145720272912445/unknown.png?width=659&height=660");
  background-size: cover;
  background-position: 50% 50%;
  
`

export const TeamPage = styled.div`
  height: 2630px;
  background-color: #000000;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  margin: auto;
  align-items: flex-end;
  padding: 32px 0px 41px 0px;

`


export const AlmanacContainer = styled.div`
height: 1921px;
display: flex;
overflow: hidden;
flex-direction: column;
margin: auto;
align-items: left;
padding: 287px 1146px 41px 0px;

`

export const MarketplaceContainer = styled.div`
height: 1921px;
display: flex;
overflow: hidden;
flex-direction: column;
margin: auto;
align-items: left;
padding: 287px 946px 41px 150px;

`


export const NavbarContainer = styled.div`

  align-self: flex-start;
  position: relative;
`

export const Container = styled.div`
    width:  100vw;
    background-color: ${(props) => props.backgroundColor};
    height: ${(props) => props.height};
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
`

export const NavBarRibbon = styled.div`
  width: 100vw;
  background-image: linear-gradient(
    90deg,
    #eea518 0%,
    rgba(220, 102, 64, 0) 98%
  );
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

`

export const RowContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  gap: 249px;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
  padding-bottom: 20px;

`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: 100vw;
  background-color: ${(props) => props.backgroundColor};
  padding: 200px 300px;

`

export const CardGlow = styled.div`
    width: 300px;
    height: 413px;
    box-shadow: 0px 0px 3px 0px #eea61b, 0px 0px 5px 0px #eea61b,
    0px 0px 19px 0px #eea61b, 0px 0px 38px 0px #eea61b, 0px 0px 65px 0px #eea61b,
    0px 0px 113px 0px #eea61b;
    border-radius: 20px;
`

export const Card = styled.div`
    width: 300px;
    height: 413px;
    border-radius: 20px;
`

export const CardDiagramContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: auto;

`

export const Ribbon = styled.div`
  width: 100vw;
  background-image: linear-gradient(
    90deg,
    #eea518 0%,
    rgba(220, 102, 64, 0) 98%
  );
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  bottom:0;

`

export const Trademark = styled.div`
  width: 550px;
  font-size: 24px;
  font-family: Quantico;
  font-weight: 700;
  color: #c4c4c4;
`

export const listContainer = styled.div`
  width: 381px;
  height: 629px;
  left: 1408px;
  top: 430px;
  background-color: #2A2C2F;
  border-radius: 10px;
  align-items:center;
  justify-content:center;
  padding-top: 90px;

`

export const pdfContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  padding-left: 200px;
  margin-top:200px;

`

export const RowContainer2 = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  gap: 53px;
  justify-content: right;
  align-items: center;
  margin: 60px;
  padding-bottom: 20px;

`
export const ImageContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

`

export const TeamContainer = styled.div`
  display: flex;
  gap: 133px;
  justify-content: center;
  margin: auto;
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: 100vw;
  background-color: ${(props) => props.backgroundColor};

`

export const TeamContainer2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 133px;
  margin: auto;
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: 100vw;
  background-color: ${(props) => props.backgroundColor};

`