import React from 'react';
import Background from '../pictures/seller.jpg'
import Logo from '../pictures/fruitfarm.png'

const EditProfile = () => {
    return (
        <div style={{backgroundColor:"#6AC17D", width: "1920px", height: "1985px"}}>
            
            
            <div style={{width: "1200px", marginLeft: "160px"}}>
                
                {/* head */}

                <div style={{height: "293px", backgroundImage: `url(${Background})`,
                            backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>

                </div>
        
                {/* body */}

                <div style={{height: "1650px", backgroundColor: "#E6FFEC"}}>
                    
                    <div class="row">

                        <div class="col-3">
                            <img src={Logo} style={{width: "200px", marginTop: "-70px", marginLeft: "50px"}} />
                        </div>
                        <div class="col" >
                            <h1 style={{fontFamily: "Marker Felt", color:"#36368D", fontSize:"50px", marginTop:"40px", marginLeft:"30px"}}>
                                GreatStorer</h1> 
                        </div>

                        <div class="col-3" >
                            <div class="row">
                                <div class="col" >
                                    <h1 style={{marginLeft: "80px"}}>pic</h1>
                                </div>
                                <div class="col" >
                                    <h1>Edit</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{height: "350px"}}>
                        
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

                    <div style={{height: "350px"}}>
                        
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

            </div>
            


        </div>  
    );
};

export default EditProfile;