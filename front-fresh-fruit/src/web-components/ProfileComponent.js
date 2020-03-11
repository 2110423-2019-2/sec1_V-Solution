import React, { useState, useEffect } from 'react';
import '../App.scss';
import axios from 'axios';
import Background from '../pictures/seller.jpg'
import Mond from '../pictures/profile pic.png'
import EditPic from '../pictures/edit.png'
import { useHistory } from 'react-router-dom';
import UserContext from '../Context/UserContext'

const url = "http://127.0.0.1:8000/api/getuser/";

const Profile = (props) => {
    const history = useHistory();
    console.log(props);

    const [userProfile, setUserProfile] = useState();
    //for setup fetch data
    useEffect(() => {
        const data = axios.get(url+props.username)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    })

    return (
        //style={{backgroundImage:`url(${background})`}}

        <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>

            <div class="row" style={{ backgroundColor: "#6AC17D", height: "auto" }}>

                {/* body */}
                <div class="card w-75">
                    <div class="row">
                        <div class="col-sm-3">
                            <img src={Mond} class="profile-pic img-fluid  rounded " alt="Mond" />
                        </div>
                        <div class="card-body col-sm-6">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <UserContext.Consumer>
                                {({ isloggedin, setLogin, clearToken, usertoken, getToken }) => (
                                    <div>
                                        <p class="card-text">Login status : {String(isloggedin)}</p>
                                        <p class="card-text">token : {getToken()}</p>

                                        <button class='btn btn-primary' onClick={(e) => {
                                            e.preventDefault();
                                            clearToken()
                                            history.push('/')

                                        }}>Log out</button>
                                    </div>
                                )}
                            </UserContext.Consumer>
                        </div>
                    </div>

                </div>



            </div>
        </div>





    );
};

export default Profile;