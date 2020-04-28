import React, { useState, useEffect } from 'react';
import '../App.scss';
import axios from 'axios';
import Fruit from '../pictures/fruit.png';
import Purchasebutton from '../web-components/PurchaseButton'
import Reservebutton from '../web-components/ReserveButton'
import { useHistory } from 'react-router-dom';
import {api, media} from '../config'
import { useParams} from "react-router";
import {Link} from 'react-router-dom'
import ReserveButton from '../web-components/ReserveButton';
import PurchaseButton from '../web-components/PurchaseButton';
const productUrl= api+"/getproduct/"

const Product = (props) => {
    const history = useHistory();
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
    const [seller_name, setSeller_name] = useState();

    let { id } = useParams();
    const fetchProduct = async () =>{
        const data = await axios.get(productUrl+id).then(function (res){
            console.log(res.data)
            setImage(media + res.data.image,[image])
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
            setSeller_name(res.data.seller_name)
            
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
                        <div class="product-header" style={{ marginLeft:"40 px"}}>{product_name}</div>
                    </div>
                    <div class="row" style={{height:"auto", marginTop:"20px", paddingBottom:"50px", fontSize:'20px'}}>
                        <div class="col" style={{textAlign: "center"}}><img src={image} style={{width:"300px", height:"300px"}}/></div>
                        <div class="col" style={{paddingTop: "20px", color:'#888888'}}>
                            <Link to={'/seller/'+seller_name} >ติดต่อคนขาย</Link>
                            <div class="product-detail">{product_desc}</div>
                            <div class="product-detail">Harvest date: {harvest_date}</div>
                            <div class="product-detail">Price: {price}{props.id} bahts per {unit_of_amount}</div>
                            <div class="product-detail">{district}, {province}</div>
                            <div class="product-detail">Deliver Company: {deliver_company}</div>
                            <div class="product-detail">Deliver price: {deliver_price}</div>
                            <div class="product-detail">In stock: {amount}</div>
                            <div class="product-detail">  </div>
                            <div style={{display:'flex', paddingTop:'20px'}}>
                                <ReserveButton amount={amount} id={id}/>
                                <PurchaseButton amount={amount} id={id} />
                    </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;