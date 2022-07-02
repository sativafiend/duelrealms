import React from 'react'


export const btnhandler = () => {
  
    // Asking if metamask is already present or not
if (window.ethereum) {
  
      // res[0] for fetching a first wallet
  window.ethereum
    .request({ method: "eth_requestAccounts" })
    .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

