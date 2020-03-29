import React, { useState, useEffect } from 'react';
import '../App.scss';
import axios from 'axios';
import Fruit from '../pictures/fruit.png';
import Purchasebutton from '../web-components/PurchaseButton'
import Reservebutton from '../web-components/ReserveButton'
import { useHistory } from 'react-router-dom';
import {api} from '../config'
import { useParams} from "react-router";

const productUrl= api+"/getproduct/"

const Product = (props) => {
    const history = useHistory();

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

    let { id } = useParams();
    const fetchProduct = async () =>{
        const data = await axios.get(productUrl+id).then(function (res){
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
    useEffect(()=>{
        fetchProduct()
    },[])

    return (
        <div>
            <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>
                <div class="row" style={{ backgroundColor: "#6AC17D", height: "auto" }}>
                    <div class="col">{productName}</div>
                </div>
                <div class="row" style={{height:"auto"}}>
                    <div class="col" style={{textAlign: "center", marginLeft:"20px"}}><img src={Fruit} style={{height:'250px',width:'150px'}}/></div>
                    <div class="col" style={{textAlign: "left"}}><h1>{productDes}</h1>
                    <h1>this is props value</h1>
                        <h1>{id}</h1>
                        <h1>{harvest_date}</h1>
                        <h1>{price} baht per {unitOfAmount}</h1>
                        <h1>{district}, {province}</h1>
                        <h1>Deliver Company: {deliverCompany}</h1>
                        <h1>Deliver price: {deliverPrice}</h1>
                        <h1>In stock: {amount}</h1>
                    </div>
                </div>
                <div class="row" style={{height:"auto"}}>
                    <div class="col"><Purchasebutton/></div>
                    <div class="col"><Reservebutton/></div>
                </div>
            </div>
        </div>
    );
}

export default Product;