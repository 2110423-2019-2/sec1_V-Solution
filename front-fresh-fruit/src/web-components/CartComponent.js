import React from 'react';
import '../styles/_cart.css'
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';
import pineapple from '../pictures/pineapple.png';
import trash from '../pictures/recycle-bin.png';

const CartComponent = (props) => {
    //for setup fetch data

    return (

        <div style={{ paddingTop: "50px" }}>

            <div class="container-fluid cart-product-background">

                <div class='row' style={{ textAlign: "center", paddingTop: "80px" }}>

                    <div class='col-lg-1' style={{ marginTop: "-40px" }}>
                        <img src={pineapple} style={{ height: '120px', width: '70px' }} />
                    </div>
                    <div class='col-lg-6'>
                        <h1 style={{ fontFamily: "Marker Felt", fontSize: "25px" }}>ProductName: {props.name}</h1>
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
                        <img src={trash} style={{ height: '30px', width: '30px' }} />
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CartComponent;