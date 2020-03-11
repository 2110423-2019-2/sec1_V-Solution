import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import UserContext from '../Context/UserContext';

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


        console.log(`Status code: ${res.status}`);
        console.log(`Status text: ${res.statusText}`);
        console.log(`Request method: ${res.request.method}`);
        console.log(`Path: ${res.request.path}`);

        console.log(`Date: ${res.headers.date}`);
        console.log(`Data: ${res.data.token}`);


        if (res.status) {
            return res
        }
        //ยังไม่ได้เชค status checkแล้วพัง


    }
    useEffect(() => {


    })

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

                    <UserContext.Consumer>
                        {({ isloggedin, setLogin, setToken, setUsername }) => (
                            <div style={{ float: 'right' }}>
                                <button type="submit" class="btn btn-outline-primary" style={{ marginRight: '10px' }}>Register</button>
                                <button class="btn btn-primary" onClick={() => {
                                    const t = OnSignIn()
                                    t.then((val) => {
                                        setToken(val.data.token,val.data.id)
                                        setLogin()
                                    })
                                    history.push('/Profile')

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