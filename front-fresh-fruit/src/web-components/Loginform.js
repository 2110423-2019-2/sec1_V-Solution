import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import UserContext from '../Context/UserContext';


function hi() {
    console.log('a')
}

/*const option = {
    methods: "POST",
    body: JSON.stringify({'name': "great", 'age': 21})
}

const send = new Request('http://nutpattara.pythonanywhere.com/api/login', option)
*/


const Loginform = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const showState = () => {
        console.log("username", username)
        console.log("password", password)
    }

    const history = useHistory();

    function OnSignIn(username, password) {
        let res = axios.post('http://127.0.0.1:8000/api/login', {
            username, password
        }).catch(err => {
            alert(err)
            console.log(err)
        })
//ยังไม่ได้เชค status checkแล้วพัง
        history.push(`/Profile`)
    }

    return (

        <div class="card col-lg-4 col-sm-12" style={{ margin: 'auto', marginTop: '10%', borderRadius: '20px' }}>
            <div class="card-body">
                <h3 class="card-title">Login</h3>
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
                    <div style={{ float: 'right' }}>
                        <button type="submit" class="btn btn-outline-primary" style={{ marginRight: '10px' }}>Register</button>

                        <button type="submit" class="btn btn-primary" onClick={() => OnSignIn(username, password)}>Sign in</button>
                    </div>
                    <div onClick={() => showState()}>123</div>
                </form>

            </div>
        </div>

    );
};

export default Loginform;