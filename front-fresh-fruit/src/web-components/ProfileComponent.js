import React, { useState, useEffect } from 'react';
import '../App.scss';
import axios from 'axios';
import background from '../pictures/background.png';
import ProfilePic from '../pictures/user.png';
import UserContext from '../Context/UserContext';
import EditProfile from '../Page/EditStore';
import { useHistory } from 'react-router-dom';
const Profile = (props) => {
    const history = useHistory();
    console.log(props.id);
    const [data,setDate] = useState({
        "user_type":'customer',
        "first_name":"vachirachat",
        "last_name":"sawaddiwat",
        "address":'bangkok',
        "tel":'xxx-xxx-xxxx',
        "birth_date":"12/10/2062",
        "gender":"male"



    })

    return (
        //style={{backgroundImage:`url(${background})`}}
        <div>
            <div>
                <img class='profileCover' src={background} />
                <img class='profilePic' src={ProfilePic} />
            </div>
            <div class='container thaifont'>
                <div class='row'>
                    <h1 class='col-lg-10 col-6'>{props.username}</h1>
                    <div class='logoAndEditInProfile col-lg-2 col-6'>
                        <button type="button" class="btn btn-outline-info">Logo</button>
                        <button id='editInProfile' class="btn btn-outline-info" onClick={()=>history.push("/EditProfile")}>Edit</button>
                    </div>
                </div>
                <div class='row'>
                    <h2>{data['first_name']}</h2>
                    <h2 style={{ marginLeft: '10px' }}>{data['last_name']}</h2>
                </div>
                <div class='row'>
                    <div class='col-lg-2 thaifont'>
                        <h3>Address :</h3>
                        <h3>Tel :</h3>
                        <h3>Birthdate :</h3>
                        <h3>Gender :</h3>
                    </div>
                    <div>{props.id}</div>
                    <div class='col-lg-10'>
                        <h3>{data['address']}</h3>
                        <h3>{data['tel']}</h3>
                        <h3>{data['birth_date']}</h3>
                        <h3>{data['gender']}</h3>
                    </div>
                </div>

                <UserContext.Consumer>
                    {({ isloggedin, setLogin, clearToken, usertoken, getToken }) => (
                        <div>
                            <h1>{String(isloggedin)}</h1>
                            <h1>{getToken()}</h1>

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

    );
};

export default Profile;