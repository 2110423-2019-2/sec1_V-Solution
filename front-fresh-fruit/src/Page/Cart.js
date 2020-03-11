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
                <div style={{backgroundColor: "#6AC17D",  width: "1520px", height: "120px"}}>
                    <div class="row">
                        <div class="col" style={{marginTop:'30px'}}>
                            <h1 style={{fontFamily:"Marker Felt", fontSize:"50px", marginLeft:'150px', color:'white'}}>Shopping Cart</h1>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "#E6FFEC", width:"1210px", height:"1020px", marginLeft: "160px"}}>


                    <CartComponent />
                    <CartComponent />
                    <CartComponent />

                    <div style={{marginRight:"200px", marginTop: "50px", textAlign:"right"}}>
                        <h1 style={{fontFamily:"Marker Felt", fontSize:"40px"}}>Total = val</h1>
                    </div>
                    <div style={{marginRight:"200px", marginTop: "50px", textAlign:"right"}}>
                    <button style={{width:'130px', height:'50px', borderRadius:"20px", backgroundColor:"orange"}}>Checkout</button>
                    </div>

                </div>

                
                
            </div>
        


    );
};

export default Cart;