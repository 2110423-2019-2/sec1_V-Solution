import React from 'react';
import '../App.scss';
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';

const CartComponent = (props) => {
    //for setup fetch data
    return (
        //style={{backgroundImage:`url(${background})`}}
    
            <div style={{paddingTop:"50px"}}>
                
                <div class="container-fluid" style={{backgroundColor:"white", height:"200px", width:"900px"}}>

                    <div class='row' style={{textAlign:"center", paddingTop:"70px"}}>
                        <div class='col-3'>
                            <h1>pic</h1>
                        </div>
                        <div class='col-6'>
                            <h1>Product From Store</h1>
                        </div>
                        <div class='col-3'>
                            <h1>pic</h1>
                        </div>
                    </div>

                </div>

                
            </div>
        


    );
};

export default CartComponent;