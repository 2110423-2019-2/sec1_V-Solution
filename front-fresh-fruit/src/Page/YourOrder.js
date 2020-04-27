import React,{useState,useEffect} from 'react';
import OrderComponent from '../web-components/OrderComponent.js';
import PurchaseComponent from '../web-components/PurchaseComponent';
import axios from 'axios';
import {api} from '../config.json';
const YourOrder = (props) => {

    const [data,setData] = useState([])
    const fetchUrl = api + '/order/get/allorder';
    const fetchOrder = () =>{
        axios.get(fetchUrl,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ` + localStorage.getItem('Token'),

            }
        }).then((res) => {
            const v = res.data
            setData(v)
        }).catch((err) => {
            alert(err)
        })
    }
    const listPurchaseComponent = data.map((i) => <PurchaseComponent items={i.items} order_id={i.order_id} user={i.user} status={i.status} price={i.price + i.deliver_price}/>)

    useEffect(()=>{
        fetchOrder()
    },[props]);

    return(
        <div>
            <div class="container-fluid" style={{backgroundColor:"#6AC17D"}}>
                <div class="row">
                    <div class="col" style={{ marginTop: '30px' }}>
                    <h1 style={{ fontFamily: "Marker Felt", fontSize: "50px", marginLeft: '150px', color: 'white' }}>My Purchase</h1>
                    </div>
                    <div style={{ backgroundColor: "#E6FFEC", width: "1210px", marginLeft: "160px" }}>
                        {listPurchaseComponent}
                        
                    </div>
                </div>            
            </div>
        </div>
    )
}
export default YourOrder;