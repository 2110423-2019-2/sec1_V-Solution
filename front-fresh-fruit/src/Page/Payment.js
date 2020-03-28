import React,{useState,useEffect} from 'react'


const Payment = () =>{
    

    const {OmiseCard} = window;

    useEffect(()=>{
        
        OmiseCard.configure({
            publicKey: 'OMISE_PUBLIC_KEY'
          });
          
          OmiseCard.configureButton('#checkout-button', {
            amount: 3000,
            currency: 'USD',
            buttonLabel: 'Pay 30 USD'
          });

        OmiseCard.attach();
    })
    
    return (
        <div>
        <h1>payment page</h1>
        <form action='/checkout.php' method='post'>
            <input type='submit' value='Pay' id='checkout-button'/>
        </form>
        </div>
    )
}

export default Payment;