import React, { useState, useEffect } from 'react';
import sell_store from '../pictures/sell_store.jpg'
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { api } from '../config'
import CreateStoreButton from '../web-components/CreateStoreButton'
import ProfilePicture from '../web-components/ProfilePicture'
import SellerStore from '../web-components/SellerStore'
import AddCommentform from '../web-components/AddCommentform'
import ShowComment from '../web-components/ShowComment'
import axios from 'axios'

const userProductUrl = api+"/getuserproduct/"+localStorage.getItem('Username')

const ProfileSeller = () => {
    const [product, setProduct] = useState([]);

    async function getProduct() {
        try {
            const response = await axios.get(userProductUrl);
            console.log("product", response.data);
            setProduct(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProduct();

    }, [])

    return (
        <div>

            <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>

                <div class="row" style={{ backgroundColor: "#6AC17D", height: "auto" }}>
                    <div class="card seller-card w-75">
                        <img src={sell_store} class="sell-bg" alt="Responsive image" />
                    </div>
                    {/* body */}
                    <div class="card seller-card w-75">
                        <div class="row">
                            <div class="col-sm-3 col-xs-12">
                                <ProfilePicture />
                            </div>
                            <div class="card-body col-sm-9 col-xs-12">
                                <h5>{localStorage.getItem('store_name')}</h5>
                                <div class="row">
                                    
                                    <h5 class="card-title card-title-login-seller ">{localStorage.getItem('first_name')}  {localStorage.getItem('last_name')} ( {localStorage.getItem('user_type')} )</h5>
                                    <a href="/editProfile" class="edit-icon">
                                        <i class="far fa-edit  " ></i>
                                    </a>
                                </div>
                                <p class="card-text">Tel : {localStorage.getItem('tel')}</p>
                                <p class="card-text">Address : {localStorage.getItem('address')}</p>
                                
                            </div>

                        </div>
                    </div>
                    <div class="card seller-card w-75">
                        <SellerStore product={product} />
                    </div>
                    <div class="card seller-card w-75">
                        <div id="all-comment">
                            <ShowComment comment={localStorage.getItem('store_name')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSeller;