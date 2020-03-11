<<<<<<< HEAD:front-fresh-fruit/src/Page/ProfileSeller.js
import React from 'react';
import Background from '../pictures/seller.jpg'
import Logo from '../pictures/fruitfarm.png'
import EditPic from '../pictures/edit.png'

const ProfileSeller = () => {
    return (
        <div style={{backgroundColor:"#6AC17D", width: "1520px", height: "1985px"}}>
            
            
            <div style={{width: "1200px", marginLeft: "160px"}}>
                
                {/* head */}

                <div style={{height: "293px", backgroundImage: `url(${Background})`,
                            backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>

                </div>
||||||| merged common ancestors
import React from 'react';
import Background from '../pictures/seller.jpg'
import Logo from '../pictures/fruitfarm.png'

const EditProfile = () => {
    return (
        <div style={{backgroundColor:"#6AC17D", width: "1920px", height: "1985px"}}>
            
            
            <div style={{width: "1200px", marginLeft: "160px"}}>
                
                {/* head */}

                <div style={{border: "solid black 2px", height: "293px", backgroundImage: `url(${Background})`,
                            backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>

                </div>
=======
import React,{useState,useEffect} from 'react';
import ShowStore from '../web-components/ShowStore';
import EditProfileForm from '../web-components/EditProfileForm';
import axios from 'axios';
const EditProfile = () => {
    const [data,setData] = useState({
        "user_type":'customer',
        "first_name":"vachirachat",
        "last_name":"sawaddiwat",
        "address":'bangkok',
        "tel":'xxx-xxx-xxxx',
        "birth_date":"12/10/2062",
        "gender":"male",
        "email":"jkadjl@gmail.com",
        "nat_id":'1231313113'
    })
    useEffect(()=>{
>>>>>>> cb46f1c716a0e0f3e1c5981eb5bd1073fd7804a6:front-fresh-fruit/src/Page/EditProfile.js
        
<<<<<<< HEAD:front-fresh-fruit/src/Page/ProfileSeller.js
                {/* body */}

                <div style={{height: "1695px", backgroundColor: "#E6FFEC"}}>
                    
                    <div class="row">

                        <div class="col-3">
                            <img src={Logo} style={{width: "200px", marginTop: "-80px", marginLeft: "50px"}} />
                        </div>
                        <div class="col">
                            <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"50px", marginTop:"40px", marginLeft:"30px"}}>
                                GreatStorer</h1> 
                        </div>

                        <div class="col-3">
                            <div class="row">
                                <div class="col">
                                    <h1 style={{marginLeft: "80px"}}><img src={EditPic}/></h1>
                                </div>
                                <div class="col">
                                    <h1 style={{fontFamily: "Marker Felt", color:"#36368D"}}>Edit</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ height: "350px"}}>
                        
                        <div style={{marginTop: "50px"}}>
                            <div style={{marginLeft: "100px"}}>
                                <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"40px"}}>Address : Ihouse</h1>
                            </div>
                            <br/><br/>
                            <div style={{marginLeft: "185px"}}>
                                <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"40px"}}> Tel : 084-xxxxxxx</h1>
                            </div>
                        </div>
                        
                    </div>

                    <div style={{height: "400px"}}>
                        
                        <div class = "row" style={{textAlign: "center", marginTop: "30px"}}>
                            <div class="col">
                                <div style={{border: "solid black 3px", width: "400px", marginTop: "20px", marginLeft:"40px"}}></div>
                            </div>
                            <div class="col" style={{marginRight: "50px"}}>
                                <h1 style={{marginLeft: "20px", fontFamily: "Marker Felt", color:"#36368D", fontSize:"40px"}}>
                                My Store</h1>
                            </div>
                            <div class="col">
                                <div style={{border: "solid black 3px", width: "400px", marginTop: "20px", marginRight:"40px"}}></div>
                            </div>
                        </div>

                    </div>
                    

                </div>

||||||| merged common ancestors
                {/* body */}

                <div style={{border: "solid red 2px", height: "1650px", backgroundColor: "#E6FFEC"}}>
                    
                    <div class="row">

                        <div class="col-3" style={{border: "solid black 2px"}}>
                            <img src={Logo} style={{width: "200px", marginTop: "-70px", marginLeft: "50px"}} />
                        </div>
                        <div class="col"  style={{border: "solid black 2px",}}>
                            <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"50px", marginTop:"40px", marginLeft:"30px"}}>
                                GreatStorer</h1> 
                        </div>

                        <div class="col-3"  style={{border: "solid black 2px",}}>
                            <div class="row">
                                <div class="col" style={{border:"solid black 2px"}}>
                                    <h1 style={{marginLeft: "80px"}}>a</h1>
                                </div>
                                <div class="col" style={{border:"solid black 2px"}}>
                                    <h1>b</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{border: "solid black 2px", height: "350px"}}>
                        
                        <div style={{marginTop: "50px"}}>
                            <div style={{marginLeft: "100px"}}>
                                <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"40px"}}>Address : Ihouse</h1>
                            </div>
                            <br/><br/>
                            <div style={{marginLeft: "185px"}}>
                                <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"40px"}}> Tel : 084-xxxxxxx</h1>
                            </div>
                        </div>
                        
                    </div>

                    <div style={{border: "solid black 2px", height: "350px"}}>
                        
                        <div class = "row" style={{textAlign: "center", marginTop: "30px"}}>
                            <div class="col">
                                <div style={{border: "solid black 4px", width: "400px", marginTop: "20px", marginLeft:"40px"}}></div>
                            </div>
                            <div class="col" style={{marginRight: "50px"}}>
                                <h1 style={{marginLeft: "20px", fontFamily: "Marker Felt", color:"#36368D", fontSize:"40px"}}>
                                My Store</h1>
                            </div>
                            <div class="col">
                                <div style={{border: "solid black 4px", width: "400px", marginTop: "20px", marginRight:"40px"}}></div>
                            </div>
                        </div>

                    </div>
                    

                </div>

=======
        axios.get('/api/getuser/test/').then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        
        
        
        //have to fetch data with token and use useState for set up data
    
    
    
    
    })
    
    return (
        <div style={{paddingLeft:'25%',paddingRight:'auto'}}>
            <h1>Edit Profile</h1>
            <div class='.col-lg-8 .col-sm-12'>
            <EditProfileForm 
                first_name={data['first_name']} 
                last_name={data['last_name']} 
                address={data['adderss']} 
                tel={data['tel']} 
                birth_date={data['birth_date']}
                gender={data['gender']}
                email={data['email']}
                nat_id={data['nat_id']}
            />
>>>>>>> cb46f1c716a0e0f3e1c5981eb5bd1073fd7804a6:front-fresh-fruit/src/Page/EditProfile.js
            </div>
        </div>
    );
};

export default ProfileSeller;