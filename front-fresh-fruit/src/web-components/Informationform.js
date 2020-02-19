import React, { useState } from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
const url = "http://127.0.0.1:8000/api/register"

function Informationform() {
    const [data, setData] = useState({
        "username": "",
        "password": "",
        "email": "",
        "first_name": "",
        "last_name": "",
        "address": "",
        "tel": "",
        "birth_date": "",
        "gender": "",
        "nat_id": "",
        "user_type": "C"
    });
    const [user_token,setUser_token] = useState()


    const checkState = () => {
        console.log("data: ",data)
        console.log("user-token: ", user_token)
    }
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }

    const onSubmit = async (e) => {
        await axios.post(url, data)
            .then((res) => {
                setUser_token(res.data)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        alert("wtf")
    }

    return (

        <div>

            <form style={{ padding: '2%' }}>

                {/*<div class="row"><div class="col" style={{textAlign: "left"}}><label style={{marginLeft:"6px"} }>
                Error MSG:
               
<<<<<<< HEAD
            </label>

            <br />

            <label>
                <span style={{color:"red"}}>*</span>Username:
                <input style = {{marginLeft:"22px"}} className = "inputfield" type="text" name="name" 
                placeholder=""/>
            </label>

            <br />

            <label>
                <span style={{color:"red", marginTop: "5px"}}>*</span>Name:
                <input style = {{marginLeft:"50px"}} className = "inputfield" type="text" name="name" />
            </label>

            <br />

            <label>
                <span style={{color:"red"}}>*</span>Surname:
                <input  style = {{marginLeft:"30px"}} className = "inputfield" type="text" name="name" />
            </label>

            <br />

            <label style={{border: "solid black 2px"}}>
                <span style={{color:"red"}}>*</span>Email:
                <input style = {{marginLeft:"50px"}} className = "inputfield" type="text" name="name"
                placeholder = "someone@hotmail.com" />
            </label>

            <br />

            <label>
               <span style={{color:"red"}}>*</span>Password:
                <input style = {{marginLeft:"27px"}} className = "inputfield" type="text" name="name" />
                <label style={{marginLeft: "6px", color:"grey"}}>between 6 - 30 characters including alphabet and number</label>
            </label>

            <br />

            <label style={{marginLeft: "7px"}}>
                Address:
                <input style = {{marginLeft:"38px"}} className = "inputfield" type="text" name="name" />
            </label>

            <br />

            <label>
                <span style={{color:"red"}}>*</span>Tel:
                <input style = {{marginLeft:"74px"}} className = "inputfield" type="text" name="name" />
            </label>

            <br />

            <label>
                <span style={{color:"red"}}>*</span>Birthdate:
                <input style = {{marginLeft:"30px"}} className = "inputfield" type="text" name="name" 
                placeholder = "dd/mm/yyyy"/>
            </label>

            <br />

            <label>
            <span style={{color:"red"}}>*</span>Gender:
               <span style={{marginLeft: "70px"}}>
                   <tr>
                       <td>
                           <input type="checkbox"/>
                           <label style={{paddingLeft: "10px"}}> Male </label>
                       </td>
                       <td style={{paddingLeft: "50px"}}>
                            <input type="checkbox"/>
                            <label style={{paddingLeft: "10px"}}> Female </label>
                       </td>
                   </tr>
               </span>
            </label>

            <br />

            <label>
            <span style={{color:"red"}}>*</span>National ID:
                <input style = {{marginLeft:"14px"}} className = "inputfield" type="text" name="name" />
            </label>
            
        </form>
=======
      </label>*/}
                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Username:</label></div>
                    <div class="col-sm-6">
                        <input class="form-control" type="text" name="username" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} />
                    </div>
                </div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Name:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="text" name="first_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange}/>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Surname:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="text" name="last_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange}/>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Email:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="email" name="email" style={{ marginLeft: '10px' }} placeholder="someone@outlook.com" onChange={handleChange} />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Password:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="password" name="password" style={{ marginLeft: '10px' }} placeholder="" aria-describedby="passwordHelp" onChange={handleChange} />
                        <small id='passwordHelp' class="form-text text-muted">between 6 - 30 characters including alphabet and number</small>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Address:</label></div>
                    <div class='col-sm-6'>
                        <textarea class="form-control" name='address' rows="3" style={{ marginLeft: '10px' }} onChange={handleChange}></textarea>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Tel:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="number" name="tel" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Birthdate:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="date" name="birth_date" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} />
                    </div></div>
                <div class='form-group row'>
                    <legend class="col-form-label col-sm-2">Sex</legend>
                    <div class="col-sm-3">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="M" onChange={handleChange} />
                            <label class="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="F" onChange={handleChange} />
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                    </div>
                </div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>NationalID:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="number" name="nat_id" onChange={handleChange} style={{ marginLeft: '10px' }} placeholder="x-xxxx-xxxxx-xx-x" />
                    </div></div>

                <div class='col-sm-8'>
                    <button type='submit' class='btn btn-primary' style={{ position: 'absolute', right: '0px' }} onClick={onSubmit}>Register</button>
                </div>

                <button type="button" class='btn btn-secondary' onClick={()=>checkState()}>Check State</button>
            </form>
>>>>>>> 69e768b6aded1a9ecfa784b018aaa25d07c65865

        </div>

    );
}

export default Informationform;