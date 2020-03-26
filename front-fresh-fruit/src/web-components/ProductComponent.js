import React, { useState, useEffect } from 'react';
import '../App.scss';
import axios from 'axios';
import Fruit from '../pictures/Fruit.png';
import { useHistory } from 'react-router-dom';
import UserContext from '../Context/UserContext'
import {api} from '../config'

const userUrl = api+"/getuser/";
const productUrl= api+"/getuserproduct"

const Product = (props) => {
    const useHistory = useHistory();

    async function getProduct(){
        try {
            const response = await axios.get(productUrl + localStorage.getItem('Username'));
            console.log("product",response.data);
            setProduct(response.data);
          } catch (error) {
            console.error(error);
          }
    }

    const sellerOrBuyer = (status) => {
        console.log("status", status)
        status === "S" ? setUser_type("Seller") : setUser_type("Buyer")
    }

    return (
        <div>
            <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>
                <div class="row" style={{ backgroundColor: "#6AC17D", height: "auto" }}>
                    <div class="col" style={{textAlign: "center", marginLeft:"20px"}}><img src={pineapple} style={{height:'250px',width:'150px'}}/></div>
                    <div class="col">ProductName</div>
                </div>
            </div>
        </div>
    );
}

export default Product;