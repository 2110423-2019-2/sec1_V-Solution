import React, { useEffect, useState } from 'react';
import '../App.scss';
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';
import axios from 'axios'
import { Redirect } from 'react-router-dom'



const ProfileCus = (props) => {


    return (
        //style={{backgroundImage:`url(${background})`}}

        <div>
            <UserContext.Consumer>
                {({ getUsername, isloggedin }) => (localStorage.getItem('Token') !== null ?
                    <ProfileComponent username={getUsername()} />
                    : <Redirect to={"/signin"} />
                )}
            </UserContext.Consumer>
        </div>



    );
};

export default ProfileCus;