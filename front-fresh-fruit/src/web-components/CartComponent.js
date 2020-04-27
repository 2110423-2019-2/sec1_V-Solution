import React from 'react';
import '../styles/_cart.css'
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';
import pineapple from '../pictures/pineapple.png';
import trash from '../pictures/recycle-bin.png';
import axios from 'axios'
import { api,media } from '../config.json'

const CartComponent = (props) => {

    const removeUrl = api + "/cart/remove"
    //for setup fetch data
    const removeFromCart = () => {
        let timer = null;
        
        axios.post(removeUrl, {
            id: props.id,
            amount: props.amount
        } ,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('Token')
            }
        }).then((res) => {
            console.log(res)
        }).then(timer = setTimeout(() => window.location.reload(false), 500))
        .catch((err) => {
            console.log(err)
        })
    }

    return (

        <div style={{ paddingTop: "50px" }}>

            <div class="container-fluid cart-product-background">

                <div class='row' style={{ textAlign: "center", paddingTop: "40px" }}>

                    <div class='col-lg-1' style={{ marginTop: "-40px" }}>
                        <img src={media + props.img} style={{ height: '120px', width: '70px', objectFit: 'cover' }} />
                    </div>
                    <div class='col-lg-6'>
                        <h1 style={{ fontFamily: "Marker Felt", fontSize: "25px" }}>Product Name: {props.name}</h1>
                    </div>

                    <div class='col-lg-4'>
                        <div class='row'>
                            <div class='col-md-6'>
                                <h1 style={{ fontFamily: "Marker Felt", fontSize: "25px" }}>price {props.price}</h1>
                            </div>
                            <div class='col-md-6'>
                                <h1 style={{ fontFamily: "Marker Felt", fontSize: "25px" }}>amount {props.amount}</h1>
                            </div>
                        </div>
                    </div>
                    <div class='col-lg-1'>
                        <img src={trash} style={{ height: '30px', width: '30px' }} onClick={()=>removeFromCart()} />
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CartComponent;