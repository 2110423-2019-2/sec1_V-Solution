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
    let { id } = useParams();
    const [image,setImage] = useState();
    const [product_name, setProductName] = useState();
    const [product_desc, setDescription] = useState();
    const [harvest_date, setHarvest] = useState();
    const [price, setPrice] = useState();
    const [unit_of_amount, setUnitofAmount] = useState();
    const [district, setDistrict] = useState();
    const [province, setProvince] = useState();
    const [deliver_company, setDeliverCompany] = useState();
    const [deliver_price, setDeliverPrice] = useState();
    const [amount, setAmount] = useState();

    const fetchProduct = async () =>{
        const data = await axios.get(productUrl+id).then(function (res){
            setImage("http://localhost:8000" + res.data.image,[image])
            setProductName(res.data.product_name)
            setDescription(res.data.product_desc)
            setHarvest(res.data.harvest_date)
            setPrice(res.data.price)
            setUnitofAmount(res.data.unit_of_amount)
            setDistrict(res.data.district)
            setProvince(res.data.province)
            setDeliverCompany(res.data.deliver_company)
            setDeliverPrice(res.data.deliver_price)
            setAmount(res.data.amount)
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <div>
            <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>
                <div class="container-fluid" style={{backgroundColor: "#E6FFEC", width:"70%"}}>
                    <div class="row">
                        <div class="product-header">{product_name}</div>
                    </div>
                    <div class="row" style={{height:"auto", marginTop:"10px"}}>
                        <div class="col" style={{textAlign: "center", marginLeft:"20px"}}><img src={image} style={{width:"300px", height:"300px"}}/></div>
                        <div class="col">
                            <div class="product-detail">{product_desc}</div>
                            <div class="product-detail">Harvest date: {harvest_date}</div>
                            <div class="product-detail">Price: {price}{props.id} bahts per {unit_of_amount}</div>
                            <div class="product-detail">{district}, {province}</div>
                            <div class="product-detail" style={{color:'black'}}>Deliver Company: {deliver_company}</div>
                            <div class="product-detail" style={{color:'black'}}>Deliver price: {deliver_price}</div>
                            <div class="product-detail">In stock: {amount}</div>
                            <div class="product-detail">  </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;