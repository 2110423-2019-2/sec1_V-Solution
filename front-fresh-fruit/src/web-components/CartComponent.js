import React from 'react';
import '../App.scss';
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';
import pineapple from '../pictures/pineapple.png';
import trash from '../pictures/recycle-bin.png';

const CartComponent = (props) => {
    //for setup fetch data
    return (
        //style={{backgroundImage:`url(${background})`}}
    
            <div style={{paddingTop:"50px"}}>
                
                <div class="container-fluid" style={{backgroundColor:"white", height:"200px", width:"900px"}}>

                    <div class='row' style={{textAlign:"center", paddingTop:"80px"}}>
                        <div class='col' style = {{marginTop:"-40px"}}>
                            <img src={pineapple} style={{height:'120px',width:'70px'}}/>
                        </div>
                        <div class='col-6'>
                            <h1 style={{fontFamily:"Marker Felt", fontSize:"25px"}}>ProductName From StoreName</h1>
                        </div>
                        <div class='col-4'>
                            <h1 style={{fontFamily:"Marker Felt", fontSize:"25px", float:'left'}}>price x</h1>
                            <div class="dropdown"  style={{float:'left'}}>
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
                            <img src={trash} style={{height:'30px',width:'30px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        


    );
};

export default CartComponent;