import React, { useState } from 'react';
import '../styles/_informationform.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {api} from '../config'

const url = api+"/register"

function InformationformSeller() {
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
        "user_type": "C",
        "bio":""
    });
    const [user_token, setUser_token] = useState()
    const [error, setError] = useState({
        'username': '',
        'password': '',
        'first_name': '',
        'last_name': '',
        'tel': '',
        'nat_id': ''
    })

    const checkState = () => {
        console.log("data: ", data)
        console.log("user-token: ", user_token)
    }

    var checkSubmit = error.username == ''
        && error.password == ''
        && error.first_name == '' 
        && error.last_name == '' 
        && error.tel == '' 
        && error.nat_id == '' 
        && data.username.length > 0

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)

        let error2 = error;
        switch (e.target.name) {
            case 'username':
                error2.username = e.target.value.length < 8 ? 'Username must be more than 8 character' : ''
                break;
            case 'password':
                var t = true
                if (6 > e.target.value.length || e.target.value.length > 20) {
                    t = false
                }
                error2.password = t ? '' : 'Password must be between 6 and 20'
                break;
            case 'first_name':
                error2.first_name = e.target.value.length < 0 ? 'You must input first name' : ''
                break
            case 'last_name':
                error2.last_name = e.target.value.length < 0 ? 'You must input last name' : ''
                break
            case 'tel':
                error2.tel = e.target.value.length == 10 ? '' : 'telephone must be 10 character'
                break
            case 'nat_id':
                error2.nat_id = e.target.value.length == 13 ? '' : 'national id must be 13 character'
                break
        }
    }

    const onSubmit = async (e) => {
        if (checkSubmit == false) {
            alert('Please enter correct')
        } else {
            await axios.post(url, data)
                .then((res) => {
                    setUser_token(res.data)
                    checkState()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div>
            <form className="container" style={{ padding: '2%' }}>
                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Username:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="name" style={{ marginLeft: '10px' }} placeholder="" />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Name:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Surname:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Email:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="email" name="name" style={{ marginLeft: '10px' }} placeholder="someone@hotmail.com" />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Password:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="password" name="name" style={{ marginLeft: '10px' }} />
                        <small id='passwordHelp' class="form-text text-muted">between 6 - 30 characters including alphabet and number</small>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-3" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Store name:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-3" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Address:</label>
                    </div>
                    <div class="col-sm-6">
                        <textarea class="form-control" id="exampleFormControlTextarea1" style={{ marginLeft: '10px' }} rows="3"></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-3" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Tel:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-sm-3" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Birthdate:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type='date' style={{ marginLeft: '10px' }} />
                    </div>
                </div>

                <div class='form-group row'>
                    <div class="col-form-label col-sm-2" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Gender</label>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-check form-check-inline" style={{ paddingRight: '18px' }}>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1" checked>Male</label>
                        </div>
                        <div class="form-check form-check-inline" style={{ marginTop: '10px' }}>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                    </div>
                </div>

                <div class="form-group row" >
                    <div class="col-form-label col-sm-3" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>National ID:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>

                <div class="col-sm-9">
                    <button type='submit' class='btn btn-primary register-btn-seller'>Register</button>
                </div>
            </form>
        </div>
    );
}

export default InformationformSeller;