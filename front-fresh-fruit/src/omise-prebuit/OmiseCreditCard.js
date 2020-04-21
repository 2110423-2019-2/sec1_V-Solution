import React, { Component } from "react";
import Script from 'react-load-script';
import {api} from '../config.json';
import axios from 'axios';
let OmiseCard

const OmiseCreditCard = (props) =>{
  
    const handleLoadScript = () => {
      OmiseCard = window.OmiseCard
      OmiseCard.configure({
        publicKey: 'pkey_test_5jl9ibr4by8aja6swz9',
        currency:'thb',
        buttonLabel:'Pay with Omise',
      });
    }

    const creditCardConfigure = () =>{
      OmiseCard.configure({
        defaultPaymentMethod: 'credit_card',
        otherPaymentMethods: []
      })
      
      OmiseCard.configureButton('#credit-card');

      OmiseCard.attach();
    }

    const omiseCardHandler = () =>{
      const omiseUrl = api + '/payment/order/'+ props.order_id
      OmiseCard.open({
        amount: 10000,
        submitFormTarget: '#checkout-form',
        onCreateTokenSuccess: (token) => {
          console.log(token)
          const data = {
            'omiseToken':token,
            'omiseSource':''
          }
          console.log(data)
          axios.post(omiseUrl,data,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ` + localStorage.getItem('Token'),

          }

          }).then((res)=>{
            console.log(res)
          }).catch((err)=>{
            alert(err)
          })
          /* Handler on token or source creation.  Use this to submit form or send ajax request to server */
        },
        onFormClosed: () => {
          /* Handler on form closure. */
        },
      })
    }

    const handleClick = e =>{
      e.preventDefault()
      creditCardConfigure()
      omiseCardHandler()
    }
 
    return (
      <div className="own-form">
           <Script
      url="https://cdn.omise.co/omise.js"
      
      onLoad={handleLoadScript}
    />
          <form>
          <button id='credit-card' className="btn" type="button" onClick={handleClick}>
          Pay with Credit Card
        </button>
</form>
        
      </div>
    );
  
}

export default OmiseCreditCard;