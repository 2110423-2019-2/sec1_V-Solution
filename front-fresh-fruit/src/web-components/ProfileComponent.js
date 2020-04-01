import React, { useState, useEffect } from 'react';
import '../App.scss';
import axios from 'axios';
import Background from '../pictures/seller.jpg'
import { useHistory } from 'react-router-dom';
import UserContext from '../Context/UserContext'
import editIcon from '../pictures/edit.png'
import Store from '../web-components/ShowStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { api } from '../config'

const userUrl = api + "/getuser/";
const productUrl = api + "/getuserproduct/"

const Profile = (props) => {
    const history = useHistory();


    const [image, setImage] = useState("http://localhost:8000" + localStorage.getItem('image'));
    //for setup fetch data


    useEffect(() => {

        console.log(image)
        console.log(localStorage.getItem('Token'))

    }, [])

    const profilePic = () => {
        switch (true) {
            case image !== "http://localhost:8000":
                return <img className='profile-pic img-fluid  rounded fadein' src={image} alt="profilePic" />
            default:
                return <div className='button-upload icon-profile'>
                    <FontAwesomeIcon icon={faUserCircle} color='#3B5998' size='10x' />
                </div>
        }
    }

    return (
        //style={{backgroundImage:`url(${background})`}}
        <div>
            <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>
                <div class="row" style={{ backgroundColor: "#6AC17D", height: "auto" }}>
                    {/* body */}
                    <div class="card card-login w-75">
                        <div class="row">
                            <div class="col-sm-3 col-xs-12 ">
                                {profilePic()}
                            </div>
                            <div class="card-body col-sm-9 col-xs-12">
                                <div class="row">
                                    <h5 class="card-title card-title-login ">{localStorage.getItem('store_name')}</h5>
                                    <h5 class="card-title card-title-login ">{localStorage.getItem('first_name')}  {localStorage.getItem('last_name')} ( {localStorage.getItem('user_type')} )</h5>
                                    <a href="/editProfile" class="edit-icon">
                                        <i class="far fa-edit  " ></i>
                                    </a>
                                </div>
                                <p class="card-text">Tel : {localStorage.getItem('tel')}</p>
                                <p class="card-text">Address : {localStorage.getItem('address')}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    );
};

export default Profile;