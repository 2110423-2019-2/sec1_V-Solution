import React, { useEffect, useState } from 'react';
import '../App.scss';
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';
import axios from 'axios'



const ProfileCus = (props) => {
    

    return (
        //style={{backgroundImage:`url(${background})`}}

        <div>
            <UserContext.Consumer>
                {({ getUsername }) => (
                    <ProfileComponent username={getUsername()} />
                )}
            </UserContext.Consumer>
        </div>



    );
};

export default ProfileCus;