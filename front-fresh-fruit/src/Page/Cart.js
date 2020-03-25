import React from 'react';
import '../App.scss';
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';
import CartComponent from '../web-components/CartComponent'

const Cart = (props) => {

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
 
    return (
 

        <div style={{ backgroundColor: "#6AC17D", width: "1520px", height: "100%" }}>
            <div style={{ backgroundColor: "#6AC17D", width: "1520px", height: "100%" }}>
                <div class="row">
                    <div class="col" style={{ marginTop: '30px' }}>
                        <h1 style={{ fontFamily: "Marker Felt", fontSize: "50px", marginLeft: '150px', color: 'white' }}>Shopping Cart</h1>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#E6FFEC", width: "1210px", height: "100%", marginLeft: "160px" }}>


                {prod.map(i=> <CartComponent name={i.name} price={i.price}/>)}

                <div style={{ marginRight: "200px", marginTop: "50px", textAlign: "right" }}>
                    <h1 style={{ fontFamily: "Marker Felt", fontSize: "40px" }}>Total = val</h1>
                </div>
                <div style={{ marginRight: "200px", marginTop: "50px", paddingBottom:"20px", textAlign: "right" }}>
                    <button style={{ width: '130px', height: '50px', borderRadius: "20px", backgroundColor: "orange" }}>Checkout</button>
                </div>

            </div>



        </div>



    );
};

export default Cart;