import React, { useState } from 'react';
import sell_store from '../pictures/sell_store.jpg'
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { api } from '../config'
import CreateStoreButton from '../web-components/CreateStoreButton'
import ProfilePicture from '../web-components/ProfilePicture'


const ProfileSeller = () => {

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
                                <ProfilePicture/>
                            </div>
                            <div class="card-body col-sm-9 col-xs-12">
                                <div class="row">
                                    <h5 class="card-title card-title-login ">{localStorage.getItem('first_name')}  {localStorage.getItem('last_name')} ( {localStorage.getItem('user_type')} )</h5>
                                    <a href="/editProfile" class="edit-icon">
                                        <i class="far fa-edit  " ></i>
                                    </a>
                                </div>
                                <p class="card-text">Tel : {localStorage.getItem('tel')}</p>
                                <p class="card-text">Address : {localStorage.getItem('address')}</p>
                                <CreateStoreButton/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSeller;