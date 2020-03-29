import React,{useState,useEffect} from 'react'


const Payment = (props) =>{
    

    const {OmiseCard} = window;

    useEffect(()=>{
        
        OmiseCard.configure({
            publicKey: 'pkey_test_5h0v8i1ah7jb8x13oxa',
            amount: `${props.paymentAmount}`,
          });
          
          OmiseCard.configureButton('#checkout-button', {
            amount: `${props.paymentAmount}`,
            currency: 'THB',
            buttonLabel: 'Pay',
          });

        OmiseCard.attach();
    })
    
    return (
        <div>
            <h1>{props.paymentAmount}</h1>
        <h1>payment page</h1>
        
        <form action='/profile' method='post'>
            <input type='submit' value='Pay' id='checkout-button'/>
            
        </form>
        </div>
    )
}

export default Payment;