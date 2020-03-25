import React from 'react';
import '../styles/_cart.css'
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';
import CartComponent from '../web-components/CartComponent'
import {api} from '../config'

const Cart = (props) => {

    const productUrl = api+"/getuserproduct/"

    const prod = [
        {
            name: 'pine apple',
            price: 120
        },
        {
            name: 'banana',
            price: 50
        },
        {
            name: 'orange',
            price: 70
        }
    ]

    var totalPrice = 0;
    prod.forEach(i=> totalPrice+=i.price)
 
    return (
 

        <div class="cart-background">
            <div class="cart-background">
                
                <div class="container cart-header">
                    <h1 class='cart-header-font'>Shopping Cart</h1>
                </div>

            </div>

            <div class='cart-inside-background'>


                {prod.map(i=> <CartComponent name={i.name} price={i.price}/>)}

                <div class='cart-footer'>
                    <h1 style={{ fontFamily: "Marker Felt", fontSize: "40px" }}>Total = {totalPrice}</h1>
                </div>

                <div class='cart-footer' style={{paddingBottom:"20px"}}>
                    <button class='cart-button'>Checkout</button>
                </div>

            </div>



        </div>



    );
};

export default Cart;