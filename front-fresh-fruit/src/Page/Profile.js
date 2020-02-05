import React from 'react';
import '../App.scss';
import background from '../pictures/background.png';
import ProfilePic from '../pictures/user.png';
const Profile = () => {
    return (
        //style={{backgroundImage:`url(${background})`}}
        <div>
            <div>
                <img class='profileCover' src={background} />
                <img class='profilePic' src={ProfilePic} />

                <h1 id='profilePic'>this is for cover page</h1>

            </div>
            <div class='container'>
                <div class='row'>
                    <div class='col thaifont'>
                        1
                </div>
                    <div class='col'>
                        2
                </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;