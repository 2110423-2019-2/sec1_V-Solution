import React from 'react';
import '../App.scss';
import background from '../pictures/background.png';
import ProfilePic from '../pictures/user.png';
import UserContext from '../Context/UserContext';
import {useHistory} from 'react-router-dom';
const Profile = (props) => {
    const history = useHistory();
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
                    <div>{props.id}</div>
                    <div class='col-lg-10'>
                        <h3>{props.Address}</h3>
                        <h3>{props.Tel}</h3>
                        <h3>{props.Birthdate}</h3>
                    </div>
                </div>
                
            <UserContext.Consumer>
                            {({isloggedin,setLogin,clearToken,usertoken}) => (
                                <div>
                                <h1>{String(isloggedin)}</h1>
                                <h1>{usertoken}</h1>
                                <button class='btn btn-primary'onClick={()=>{
                                    
                                    clearToken()
                                    console.log(usertoken)
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