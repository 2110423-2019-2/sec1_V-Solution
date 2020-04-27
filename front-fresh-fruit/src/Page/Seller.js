import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { api, media } from '../config.json'
import axios from 'axios'
import ProfilePicture from '../web-components/ProfilePicture'
import SellerStore from '../web-components/SellerStore'
import AddCommentform from '../web-components/AddCommentform'
import ShowComment from '../web-components/ShowComment'
import Store from '../web-components/ShowStore';
const url = api + '/getuser/'


const Seller = () => {
    let { username } = useParams()
    const url = api + '/getuser/' + username
    const userProductUrl = api + "/getuserproduct/" + username
    const [user, setUser] = useState({
        address: "",
        bio: "",
        birth_date: "",
        first_name: "",
        gender: "",
        id: 1,
        image: "",
        last_name: "",
        nat_id: "",
        store_name: "",
        tel: "",
        user_type: "",
    })
    const [product, setProduct] = useState([])

    async function getProduct() {
        try {
            const response = await axios.get(userProductUrl)
                .then(res => setProduct(res.data))
            

        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            setUser(response.data);
            
        }
        fetchData()
        getProduct()
    }, [url])

    return (
        <div>
            <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>
                <div class="row" style={{ backgroundColor: "#6AC17D", height: "auto" }}>
                    <div class="card seller-card w-75">
                        <img src={'https://postnoname.com/wp-content/uploads/2018/04/Fresh-Fruit.jpg'} class="sell-bg" alt="Responsive image" />
                    </div>
                    <div class="card seller-card w-75">
                        <div class="row">
                            <div class="col-sm-3 col-xs-12">
                                <img src={media + user.image} class="profile-sell" alt="Responsive image" />
                            </div>
                            <div class="card-body col-sm-9 col-xs-12">
                                <h5>{user.store_name}</h5>
                                <div class="row">

                                    <h5 class="card-title card-title-login-seller ">{user.first_name}  {user.last_name} ( {user.user_type} )</h5>
                                </div>
                                <p class="card-text">Tel : {user.tel}</p>
                                <p class="card-text">Address : {user.address}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card seller-card w-75">
                         <Store product={product} />
                    </div>
                    <div class="card seller-card w-75">
                        <div id="add-comment" >
                            <AddCommentform storename={user.store_name} />
                        </div>
                        <div id="all-comment">
                            <ShowComment storename={user.store_name} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seller;