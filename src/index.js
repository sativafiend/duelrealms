import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from "webfontloader";
import { StrictMode } from 'react';


WebFont.load({
  google: {
    families: ['Poppins', "Quantico:400,700"]
  }
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>
 ,
  rootElement
);


