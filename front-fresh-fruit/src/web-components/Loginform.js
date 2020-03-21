import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory,Redirect } from "react-router-dom";
import UserContext from '../Context/UserContext';
import '../styles/_loginform.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
/*const option = {
    methods: "POST",
    body: JSON.stringify({'name': "great", 'age': 21})
}

const send = new Request('http://nutpattara.pythonanywhere.com/api/login', option)
*/


const Loginform = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userid, setUserid] = useState(0);

    const history = useHistory();

    async function OnSignIn() {

        let res = await axios.post('http://127.0.0.1:8000/api/login', {
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
                        {({ isloggedin, setLogin, setToken, setUsername }) => (
                            <div class="btn-login">
                                <button type="submit" class="btn btn-outline-primary btn-register"
                                    onClick={() => {
                                        history.push('/register')
                                    }}>Register</button>
                                <button class="btn btn-primary btn-signin" onClick={() => {
                                    const t = OnSignIn()
                                    t.then((val) => {
                                        setToken(val.data.token, val.data.id)
                                        setLogin()
                                        setUsername(val.data.username)
                                    }).then(<Redirect to='/profile' />)
                                    .catch((err) =>{
                                        
                                        alert('Please enter username and password again')
                                    })
                                    
                                }}>Sign in</button>
                            </div>
                        )}
                    </UserContext.Consumer>
                </form>

            </div>
        </div>

    );
};

export default Loginform;