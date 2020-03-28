import React, { useState, useEffect } from 'react';
import '../styles/_cart.css'
import CartComponent from '../web-components/CartComponent'
import axios from 'axios';
import {api} from '../config'

const Cart = () => {

    const productUrl = api + "/cart/get"
    const [product, setProduct] = useState([])
    

    useEffect(() => {
        axios.get(productUrl).then(res =>{
            const {data} = res
            alert(JSON.stringify(data))
            setProduct(data)
        })
        
    },[])

    function renderSwitch(cnt) {

        switch (cnt) {
            case 0: 
                return (

                    <div class='cart-inside-background'>
                        <div class='cart-empty'>
                            <h1> Your Cart is now Empty! </h1>
                        </div>
                    </div>

                )
                break;
            
            default:
                return(

                    <div class='cart-inside-background'>
                
                        {product.map(i=> <CartComponent name={i.name} price={i.price}/>)}

                        <div class='cart-footer'>
                            <h1 style={{ fontFamily: "Marker Felt", fontSize: "40px" }}>Total = a}</h1>
                        </div>

                        <div class='cart-footer' style={{paddingBottom:"20px"}}>
                            <button class='cart-button'>Checkout</button>
                        </div>

                    </div>

                )
                break;
        }
    }

 
    return (

        <div class="cart-background">
            <div class="cart-background">
                
                <div class="container cart-header">
                    <h1 class='cart-header-font'>Shopping Cart</h1>
                </div>

            </div>

            {renderSwitch(product.length)}

        </div>

    );
};

export default Cart;