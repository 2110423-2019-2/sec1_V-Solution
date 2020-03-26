import React from 'react';
import '../styles/_cart.css'
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';
import pineapple from '../pictures/pineapple.png';
import trash from '../pictures/recycle-bin.png';

const CartComponent = (props) => {
    //for setup fetch data

    return (
    
            <div style={{paddingTop:"50px"}}>
                
                <div class="container-fluid cart-product-background">

                    <div class='row' style={{textAlign:"center", paddingTop:"80px"}}>

                        <div class='col-lg-1' style = {{marginTop:"-40px"}}>
                            <img src={pineapple} style={{height:'120px',width:'70px'}}/>
                        </div>

                        <div class='col-lg-6'>
                            <h1 style={{fontFamily:"Marker Felt", fontSize:"25px"}}>ProductName: {props.name}</h1>
                        </div>

                        <div class='col-lg-4'>
                            <div class='row'>

                                <div class='col-lg-6'>
                                    <h1 style={{fontFamily:"Marker Felt", fontSize:"25px"}}>price {props.price}</h1>
                                </div>

                                <div class='col-lg-6'>
                                    <div class="dropdown"  style={{marginLeft:'20px'}}>
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Quantity</button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">1</a>
                                            <a class="dropdown-item" href="#">2</a>
                                            <a class="dropdown-item" href="#">3</a>
                                            <a class="dropdown-item" href="#">4</a>
                                            <a class="dropdown-item" href="#">5</a>
                                            <a class="dropdown-item" href="#">6</a>
                                            <a class="dropdown-item" href="#">7</a>
                                            <a class="dropdown-item" href="#">8</a>
                                            <a class="dropdown-item" href="#">9</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class='col-lg-1'>
                            <img src={trash} style={{height:'30px',width:'30px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        


    );
};

export default CartComponent;