import React,{useState,useEffect} from 'react'
import {api} from '../config';

const Payment = (props) =>{
    

    const {OmiseCard} = window;
    const omiseUrl = api + '/payment/order/'+ props.order_id
    
    useEffect(()=>{
        
        OmiseCard.configure({
            publicKey: 'pkey_test_5jl9ibr4by8aja6swz9',
            amount: 20000,
          });
          
          OmiseCard.configureButton('#checkout-button', {
            amount: 20000,
            currency: 'thb',
            buttonLabel: 'Pay',
          });

        OmiseCard.attach();
    },[])
    
    return (
        <div >
        
        <form action={omiseUrl} method='POST' name="checkoutForm">
            <input type='submit' value='Pay' id='checkout-button'/>
    </form>
        </div>
    )
}

export default Payment;