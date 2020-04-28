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
        setError({ ...error, [e.target.name]: e.target.value })
        console.log(data)

        
        switch (e.target.name) {
            case 'username':
                error.username = e.target.value.length < 8 ? 'Username must be more than 8 characters' : ''
                break;
            case 'password':
                var t = true
                if (6 > e.target.value.length || e.target.value.length > 20) {
                    t = false
                }
                error.password = t ? '' : 'Password must be between 6 and 20 characters'
                break;
            case 'first_name':
                if (e.target.value.length < 0) {
                    error.first_name = 'You must input your first name'
                    break
                } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
                    error.first_name = 'Your name must contain only a-z or A-Z'
                    break
                }else if (!/^[a-zA-Z]+$/.test(data.first_name) && e.target.value.length > 1) {
                    error.first_name = 'Your name must contain only a-z or A-Z'
                    break
                } else {
                    error.first_name = ""
                    break
                }
            case 'last_name':
                if (e.target.value.length < 0) {
                    error.last_name = 'You must input surname'
                    break
                } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
                    error.last_name = 'Your surname must contain only a-z or A-Z'
                    break
                }else if (!/^[a-zA-Z]+$/.test(data.last_name) && e.target.value.length > 1) {
                    error.last_name = 'Your surname must contain only a-z or A-Z'
                    break
                } else {
                    error.last_name = ""
                    break
                }
            case 'tel':
                if (!/^[0-9]+$/.test(e.target.value)) {
                    error.tel = 'Your phone number must contain only 0-9'
                    break
                }else if (!/^[0-9]+$/.test(data.tel) && e.target.value.length > 1) {
                    error.tel = 'Your phone number must contain only 0-9'
                    break
                } else if (e.target.value.length < 10) {
                    error.tel = 'Phone number must have 10 characters'
                    break
                } else {
                    error.tel = ""
                    break
                }
            case 'nat_id':
                if (!/^[0-9]+$/.test(e.target.value)) {
                    error.nat_id = 'Your National ID must contain only 0-9'
                    break
                }else if (!/^[0-9]+$/.test(data.nat_id) && e.target.value.length > 1) {
                    error.nat_id = 'Your National ID must contain only 0-9'
                    break
                } else if (e.target.value.length < 13) {
                    error.nat_id = 'National ID must have 13 characters'
                    break
                } else {
                    error.nat_id = ""
                    break
                }
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
                        <input className="form-control" type="text" name="username" style={{ marginLeft: '10px' }} placeholder="" />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Name:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="first_name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Surname:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="last_name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Email:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="email" name="email" style={{ marginLeft: '10px' }} placeholder="someone@hotmail.com" />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Password:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="password" name="password" style={{ marginLeft: '10px' }} />
                        <small id='passwordHelp' class="form-text text-muted">between 6 - 30 characters including alphabet and number</small>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-3" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Store name:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="store_name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-3" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Address:</label>
                    </div>
                    <div class='col-sm-6'>
                        <textarea class="form-control" name='address' rows="3" style={{ marginLeft: '10px' }} onChange={handleChange} value={props.address} required></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-3" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Tel:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="tel" style={{ marginLeft: '10px' }} />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-sm-3" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Birthdate:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type='birth_date' style={{ marginLeft: '10px' }} />
                    </div>
                </div>

                <div class='form-group row'>
                    <div class="col-form-label col-sm-2" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Gender</label>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-check form-check-inline" style={{ paddingRight: '18px' }}>
                            <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1" checked>Male</label>
                        </div>
                        <div class="form-check form-check-inline" style={{ marginTop: '10px' }}>
                            <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                    </div>
                </div>

                <div class="form-group row" >
                    <div class="col-form-label col-sm-3" style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>National ID:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className="form-control" type="text" name="nat_id" style={{ marginLeft: '10px' }} />
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