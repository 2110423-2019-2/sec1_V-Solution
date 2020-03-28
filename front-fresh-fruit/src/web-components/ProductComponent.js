import React, { useState, useEffect } from 'react';
import '../App.scss';
import axios from 'axios';
import Fruit from '../pictures/fruit.png';
import purchasebutton from '../web-components/PurchaseButton'
import reservebutton from '../web-components/ReserveButton'
import { useHistory } from 'react-router-dom';
import {api} from '../config'

const productUrl= api+"/getuserproduct"

const Product = (props) => {
    const useHistory = useHistory();

    const [productName, setProductName] = useState();
    const [productDes, setDescription] = useState();
    const [harvest_date, setHarvest] = useState();
    const [price, setPrice] = useState();
    const [unitOfAmount, setUnitofAmount] = useState();
    const [district, setDistrict] = useState();
    const [province, setProvince] = useState();
    const [deliverCompany, setDeliverCompany] = useState();
    const [deliverPrice, setDeliverPrice] = useState();
    const [amount, setAmount] = useState();

    const fetchProduct = async () =>{
        const data = await axios.get(productUrl).then(function (res){
            setProductName(res.data.productName)
            setDescription(res.data.productDes)
            setHarvest(res.data.harvest_date)
            setPrice(res.data.price)
            setUnitofAmount(res.data.unitOfAmount)
            setDistrict(res.data.district)
            setProvince(res.data.province)
            setDeliverCompany(res.data.deliverCompany)
            setDeliverPrice(res.data.deliverPrice)
            setAmount(res.data.amount)
        })
        .catch((err) => console.log(err))
    }


    return (
        <div>
            <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>
                <div class="row" style={{ backgroundColor: "#6AC17D", height: "auto" }}>
                    <div class="col">{productName}</div>
                </div>
                <div class="row" style={{height:"auto"}}>
                    <div class="col" style={{textAlign: "center", marginLeft:"20px"}}><img src={Fruit} style={{height:'250px',width:'150px'}}/></div>
                    <div class="col" style={{textAlign: "left"}}><h1>{productDes}</h1>
                        <h1>{harvest_date}</h1>
                        <h1>{price} baht per {unitOfAmount}</h1>
                        <h1>{district}, {province}</h1>
                        <h1>Deliver Company: {deliverCompany}</h1>
                        <h1>Deliver price: {deliverPrice}</h1>
                        <h1>In stock: {amount}</h1>
                    </div>
                </div>
                <div class="row" style={{height:"auto"}}>
                    <div class="col">{purchasebutton}</div>
                    <div class="col">{reservebutton}</div>
                </div>
            </div>
        </div>
    );
}

export default Product;