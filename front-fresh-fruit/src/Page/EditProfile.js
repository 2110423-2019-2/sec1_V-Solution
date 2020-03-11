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
            </div>
        </div>
    );
};

export default EditProfile;