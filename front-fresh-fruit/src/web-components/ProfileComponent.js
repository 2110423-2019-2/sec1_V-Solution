import React from 'react';
import '../App.scss';
import background from '../pictures/background.png';
import ProfilePic from '../pictures/user.png';
const Profile = (props) => {
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
                        <button type="button" class="btn btn-outline-info">logo</button>
                        <button id='editInProfile' type="button" class="btn btn-outline-info">Edit</button>
                    </div>
                </div>
                <div class='row'>
                    <h2>{props.firstname}</h2>
                    <h2 style={{ marginLeft: '10px' }}>{props.lastname}</h2>
                </div>
                <div class='row'>
                    <div class='col-lg-2 thaifont'>
                        <h3>Address :</h3>
                        <h3>Tel :</h3>
                        <h3>Birthdate :</h3>
                    </div>
                    <div class='col-lg-10'>
                        <h3>{props.Address}</h3>
                        <h3>{props.Tel}</h3>
                        <h3>{props.Birthdate}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;