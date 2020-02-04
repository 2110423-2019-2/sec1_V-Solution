import React, { useState } from 'react';

const Loginform = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (

        <div class="card col-lg-4 col-sm-12" style={{ margin: 'auto', marginTop: '10%', borderRadius: '20px' }}>
            <div class="card-body">
                <h3 class="card-title">Login</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" onChange={e => setUsername(e.target.value)} />
                        <small id="emailHelp" class="form-text text-muted">for validation</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <a href="">Forgot Password?</a>
                    <div style={{ float: 'right' }}>
                        <button herf="#" class="btn btn-outline-primary" style={{ marginRight: '10px' }}>Register</button>
                        <button type="submit" class="btn btn-primary" onClick={() => {
                            console.log(username);
                            console.log(password)
                        }}>Sign in</button>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Loginform;