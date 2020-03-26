import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory,Redirect } from "react-router-dom";
import UserContext from '../Context/UserContext';
import '../styles/_loginform.css';
import {api} from '../config'
/*const option = {
    methods: "POST",
    body: JSON.stringify({'name': "great", 'age': 21})
}
const send = new Request('http://nutpattara.pythonanywhere.com/api/login', option)
*/
const urlLogin = api+"/login"

const Loginform = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userid, setUserid] = useState(0);
    const [userData,setUserData] = useState([]);
    const history = useHistory();

    const userUrl = api + "/getuser/";
    const productUrl = api + "/getuserproduct/"

    const fetchUser = async (username) => {
        const data = await axios.get(userUrl + username)
            .then(function (res) {
                console.log(res.data)
                localStorage.setItem('id',res.data.id)
                localStorage.setItem('first_name',res.data.first_name)
                localStorage.setItem('last_name',res.data.last_name)
                localStorage.setItem('address',res.data.address)
                localStorage.setItem('birth_date',res.data.birth_date)
                localStorage.setItem('tel',res.data.tel)
                localStorage.setItem('gender',res.data.gender)
                localStorage.setItem('bio',res.data.bio)
                localStorage.setItem('store_name',res.data.store_name)
                localStorage.setItem('user_type',res.data.user_type)
                sellerOrBuyer(res.data.user_type)
                localStorage.setItem('image',res.data.image)

                console.log('This is last_name in localStroage')
                console.log(localStorage.getItem('last_name'))
                
            })
            .catch((err) => console.log(err))
        getProduct(username);
        
    }


    const sellerOrBuyer = (status) => {
        console.log("status", status)
        if (status==="S"){
            localStorage.setItem('user_type',"Seller")
        }else{
            localStorage.setItem('user_type',"Buyer")
        }
        
    }


    async function getProduct(username) {
        try {
            const response = await axios.get(productUrl + username );
            console.log("product", response.data);
            localStorage.setItem('product_list',response.data);
            
        } catch (error) {
            console.error(error);
        }
    }


    async function OnSignIn() {

        let res = await axios.post(urlLogin, {
            username, password
        })

        console.log(`Statue error: ${res.error}`);
        console.log(`Status code: ${res.status}`);
        console.log(`Status text: ${res.statusText}`);
        console.log(`Request method: ${res.request.method}`);
        console.log(`Path: ${res.request.path}`);

        console.log(`Date: ${res.headers.date}`);
        console.log(`Data: ${res.data.token}`);


        if (res.status==200) {
            return res
        }else{
            alert('error')
        }
        //ยังไม่ได้เชค status checkแล้วพัง


    }
    useEffect(() => {
        

    })

    return (

        <div class="card  card-login col-lg-5 col-sm-12">
            <div class="card-body">
                <h3 class="card-title card-title-login ">Login to FreshFruit</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address / Username</label>
                        <input type="text" class="form-control" onChange={e => setUsername(e.target.value)} />
                        <small id="emailHelp" class="form-text text-muted">for validation</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <a href="">Forgot Password?</a>

                    <UserContext.Consumer>
                        {({ isloggedin, setLogin, setToken, setUsername,setUserDataInContext,getUserData }) => (
                            <div class="btn-login">
                                <button type="submit" class="btn btn-outline-primary btn-register"
                                    onClick={() => {
                                        history.push('/signup')
                                    }}>Register</button>
                                <button class="btn btn-primary btn-signin" onClick={() => {
                                    const t = OnSignIn()
                                    t.then(async(val) => {
                                        setUsername(val.data.username)
                                        await fetchUser(val.data.username)
                                        setToken(val.data.token)
                                        setLogin(true)

                                    })
                                    .then(history.push('/profile'))
                                    .catch((err) =>{
                                        
                                        alert('Please enter username and password again')
                                    })
                                    
                                }}>Sign in</button>


                                <h1>{userData}</h1>
                                <h1>{username}</h1>
                            </div>
                        )}
                    </UserContext.Consumer>
                </form>

            </div>
        </div>

    );
};

export default Loginform;