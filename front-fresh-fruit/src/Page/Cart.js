import React from 'react';
import '../App.scss';
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';
import CartComponent from '../web-components/CartComponent'

const Cart = (props) => {
    //for setup fetch data
    return (
        //style={{backgroundImage:`url(${background})`}}
    
            <div style={{backgroundColor: "#6AC17D",  width: "1520px", height: "1100px"}}>

                <div style={{backgroundColor: "#6AC17D", height: "80px"}}></div>

                <div style={{backgroundColor: "#E6FFEC", width:"1210px", height:"1020px", marginLeft: "160px"}}>


                    <CartComponent />
                    <CartComponent />
                    <CartComponent />

                    <div style={{marginRight:"160px", marginTop: "50px", textAlign:"right"}}>
                        <h1>Total = val</h1>
                    </div>
                    <div style={{marginRight:"180px", marginTop: "50px", textAlign:"right"}}>
                    <button style={{width:'130px', height:'50px', borderRadius:"20px", backgroundColor:"orange"}}>Checkout</button>
                    </div>

                </div>

                
                
            </div>
        


    );
};

export default Cart;