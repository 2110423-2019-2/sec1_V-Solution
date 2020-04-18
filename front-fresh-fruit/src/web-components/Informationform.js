import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../styles/_informationform.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { api } from '../config'

const url = api + "/register"

function Informationform(props) {
    const [data, setData] = useState({
        "username": "",
        "password": "",
        "email": "",
        "first_name": "",
        "last_name": "",
        "address": "",
        "tel": "",
        "birth_date": "",
        "gender": "M",
        "nat_id": "",
        "user_type": props.user_type,
        "store_name": "",
        "bio":""
    });
    const [user_token, setUser_token] = useState()
    const history = useHistory();

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
            await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    setUser_token(res.data)
                })
                .then(
                    history.push('/signin')
                )
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const storeName = () => {
        if (props.user_type === 'S') {
            return (<div class="form-group row">
                <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                    <label style={{ color: "red" }}>*</label><label>StoreName:</label></div>
                <div class='col-sm-6'>
                    <input class="form-control" type="text" name='store_name' style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={props.store_name} required />
                </div></div>)
        } else {
            return
        }

    }

    return (
        <div>
            <form style={{ padding: '2%' }}>
                {/*<div class="row"><div class="col" style={{textAlign: "left"}}>
                    <label style={{marginLeft:"6px"} }>Error MSG:</label>
                    </div>*/}
                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Username:</label></div>
                    <div class="col-sm-6">

                        <input class="form-control" type="text" name="username" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={props.username} required />

                        {error.username.length > 0 && <small class='errorInForm'>{error.username}</small>}
                    </div>
                </div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Name:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="text" name="first_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={props.first_name} required />

                        {error.first_name.length > 0 && <small class='errorInForm'>{error.first_name}</small>}
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Surname:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="text" name="last_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={props.last_name} required />

                        {error.last_name.length > 0 && <small class='errorInForm'>{error.last_name}</small>}
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Email:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="email" name="email" style={{ marginLeft: '10px' }} placeholder="someone@outlook.com" onChange={handleChange} value={props.email} required />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Password:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="password" name="password" style={{ marginLeft: '10px' }} aria-describedby="passwordHelp" onChange={handleChange} value={props.password} maxlength='20' required />

                        {error.password.length > 0 && <small class='errorInForm'>{error.password}</small>}
                    </div></div>

                {storeName()}
                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Address:</label></div>
                    <div class='col-sm-6'>
                        <textarea class="form-control" name='address' rows="3" style={{ marginLeft: '10px' }} onChange={handleChange} value={props.address} required></textarea>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Tel:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="tel" name="tel" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} maxlength="10" value={props.tel} required />
                        {error.tel.length > 0 && <small class='errorInForm'>{error.tel}</small>}
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>Birthdate:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="date" name="birth_date" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={props.birth_date} required />
                    </div></div>
                <div class='form-group row'>
                    <legend class="col-form-label col-sm-2" style={{ textAlign: "left" }}>Gender</legend>
                    <div class="col-sm-3">
                        <div class="form-check form-check-inline" style={{ paddingRight: '18px' }}>
                            <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="M" onChange={handleChange} checked />
                            <label class="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div class="form-check form-check-inline" style={{ marginTop: '10px' }}>
                            <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="F" onChange={handleChange} />
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                    </div>
                </div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ textAlign: "left" }}>
                        <label style={{ color: "red" }}>*</label><label>NationalID:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type='tel' name="nat_id" onChange={handleChange} style={{ marginLeft: '10px' }} placeholder="x-xxxx-xxxxx-xx-x" maxlength='13' value={props.nat_id} required />
                        {error.nat_id.length > 0 && <small class='errorInForm'>{error.nat_id}</small>}
                    </div></div>

                <div class='col-sm-8 col-reg-btn'>
                    {checkSubmit == true && <small class='errorInForm'>Please enter correct value</small>}
                    {checkSubmit == false ? <button type='submit' class='btn btn-primary register-btn' onClick={onSubmit} disabled>Register</button> : <button type='submit' class='btn btn-primary register-btn' onClick={onSubmit} >Register</button>}
                </div>
            </form>

        </div>

    );
}

export default Informationform;