import React from 'react';
import '../App.scss';
import ProfileComponent from '../web-components/ProfileComponent';
import UserContext from '../Context/UserContext';

const Profile = () => {
    //for setup fetch data
    return (
        //style={{backgroundImage:`url(${background})`}}
        <UserContext.Provider value={{wtf:"wtf"}}>
            <div>
                <ProfileComponent username='vachirachat' firstname='vachirachat' lastname='saw' Address='this is my address' Tel='this is my tel' Birthdate='this is my birthdate' />
            </div>
        </UserContext.Provider>


    );
};

export default Profile;