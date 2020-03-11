import React,{useState,useEffect} from 'react';
import '../App.scss';
import axios from 'axios';
import Background from '../pictures/seller.jpg'
import Mond from '../pictures/profile pic.png'
import EditPic from '../pictures/edit.png'
import { useHistory } from 'react-router-dom';
const Profile = (props) => {
    const history = useHistory();
    console.log(props.id);
    
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
                        <button id='editInProfile' type="button" class="btn btn-outline-info">Edit</button>
                    </div>
                </div>
                 <div class='row'>
                    <h2>{props.firstname}</h2>
                    <h2 style={{ marginLeft: '10px' }}>{props.lastname}</h2>
                </div>

                
                {/* body */}

                <div style={{height: "995px", backgroundColor: "#E6FFEC"}}>
                    
                    <div class="row">

                        <div class="col-3">
                            <img src={Mond} style={{width: "200px", marginTop: "-70px", marginLeft: "50px"}} />
                        </div>
                        <div class="col">
                            <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"50px", marginTop:"50px", marginLeft:"30px"}}>
                                Mondlnmza007</h1> 
                        </div>

                        <div class="col-3">
                            <div class="row" style={{marginTop:"50px"}}>
                                <div class="col">
                                    <h1 style={{marginLeft: "80px"}}><img src={EditPic}/></h1>
                                </div>
                                <div class="col">
                                    <h1 style={{fontFamily: "Marker Felt", color:"#36368D"}}>Edit</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{marginTop:"35px", marginLeft: "350px"}}>
                        <h2 style={{fontFamily: "Marker Felt", color:"#36368D"}}>Mawin Siangyai</h2>
                    </div>

                    <div style={{ height: "350px"}}>
                        
                        <div style={{marginTop: "60px"}}>
                            <div style={{marginLeft: "180px"}}>
                                <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"40px"}}>Address : Ihouse</h1>
                            </div>
                            <br/><br/>
                            <div style={{marginLeft: "260px"}}>
                                <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"40px"}}> Tel : 084-xxxxxxx</h1>
                            </div>
                            <br/><br/>
                            <div style={{marginLeft: "155px"}}>
                                <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"40px"}}> Birthdate : 31 February 1998</h1>
                            </div>
                        </div>
                        
                    </div>

                    

                </div>

            </div>
            


        </div>  

    );
};

export default Profile;