import React,{useState,useEffect} from 'react';
import Background from '../pictures/seller.jpg';

import ShowStore from '../web-components/ShowStore';
import Logo from '../pictures/fruitfarm.png';

const Store = () => {
    const [data,setData] = useState({
        "user_type":'customer',
        "first_name":"vachirachat",
        "last_name":"sawaddiwat",
        "address":'bangkok',
        "tel":'xxx-xxx-xxxx',
        "birth_date":"12/10/2062",
        "gender":"male"
    })
    return (
        <div style={{backgroundColor:"#6AC17D", width: "1920px", height: "1985px"}}>
            
            
            <div style={{width: "1200px", marginLeft: "160px"}}>
                
                {/* head */}

                <div style={{border: "solid black 2px", height: "293px", backgroundImage: `url(${Background})`,
                            backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>

                </div>
        
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
                        <ShowStore product={[]}/>

                    </div>
                    

                </div>

            </div>
        


        </div>  
    );
};

export default Store;