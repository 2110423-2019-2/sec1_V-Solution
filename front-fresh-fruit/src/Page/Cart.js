import React, { useState, useEffect } from 'react';
import '../styles/_cart.css'
import CartComponent from '../web-components/CartComponent'
import axios from 'axios';
import {api} from '../config'
import Payment from './Payment';

const Cart = () => {

    const cartUrl = api + "/cart/get" // ++++ ไออันนี้ต้องเป็น cart แต่ใน cart ยังไม่เข้ากุเลยดึงมาจากหน้า product มาก่อนน ++++
    const [product, setProduct] = useState([])
    const [price, setPrice] = useState(0)
    const [deliver_price, setDeliverPrice] = useState(0)
    const [amount, setAmount] = useState(0)
    
    useEffect(() => {
        axios.get(cartUrl,{
            headers: {

                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('Token')
            }
        }).then(res =>{
            const {data} = res
            setProduct(data.entries)
        })
    },[cartUrl])

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
            default:
                return(
                    <div class='cart-inside-background'>
                
                        {product.map(i=> <CartComponent 
                        key={i.product.id} 
                        name={i.product.product_name} 
                        price={i.product.price} 
                        amount={i.amount}
                        />)}

                        <div class='cart-footer'>
                        <h1 style={{ fontFamily: "Marker Felt", fontSize: "40px" }}>Total = {price}</h1>
                        </div>
                        <div class='cart-footer' style={{paddingBottom:"20px"}}>
                            <button class='cart-button'>Checkout</button>
                        </div>
                    </div>
                )
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
            <Payment paymentAmount={10000} />

        </div>
        

    );
};

export default Cart;