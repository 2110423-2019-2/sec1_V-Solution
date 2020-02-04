import React from 'react';

const Loginform = () => {
    return (

        <div class="card col-lg-4 col-sm-12" style={{margin:'auto',marginTop:'10%',borderRadius:'20px'}}>
            <div class="card-body">
            <h3 class="card-title">Login</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <small id="emailHelp" class="form-text text-muted">for validation</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                            <a href="">Forgot Password?</a>
                            <div style={{float:'right'}}>
                            <button herf="#"class="btn btn-outline-primary" style={{ marginRight: '10px' }}>Register</button>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                    </form>

                        </div>
                    </div>

                    );
                };
                
export default Loginform;