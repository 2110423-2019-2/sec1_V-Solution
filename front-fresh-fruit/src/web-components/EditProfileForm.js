import React, { useState, useEffect } from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


const url = "http://127.0.0.1:8000/api/edituser/"
const urlGet = "http://127.0.0.1:8000/api/getuser/";
function Informationform(props) {
    const [user, setUser] = useState({
        "first_name": "",
        "last_name": "",
        "address": "",
        "tel": "",
        "birth_date": "",
        "gender": "",
        "nat_id": ""
    });
    const [user_token, setUser_token] = useState()

    const fetchUser = async () => {
        const data = await axios.get(urlGet + localStorage.getItem('Username'))
            .then(function (res) {
                console.log(res.data)
                return res.data
            })
            .catch((err) => console.log(err))

        setUser({
            user_type: data.user_type,
            first_name: data.first_name,
            last_name: data.last_name,
            address: data.address,
            tel: data.tel,
            birth_date: data.birth_date,
            gender: data.gender,
            nat_id: data.nat_id
        })

    }

    useEffect(() => {
        fetchUser();
    }, [])


    const checkState = () => {
        console.log("user: ", user)
        console.log("user-token: ", user_token)
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const onSubmit = async (e) => {
        await axios.post(url + localStorage.getItem('Username'), user, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ` + localStorage.getItem('Token')
            }
        })
            .then((res) => {
                setUser_token(res.data)
                checkState()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <div>

            <form style={{ padding: '2%' }}>
                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Name:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="text" name="first_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={user.first_name} />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Surname:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="text" name="last_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={user.last_name} />
                    </div></div>

                {/* <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Email:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="email" name="email" style={{ marginLeft: '10px' }} placeholder="someone@outlook.com" onChange={handleChange} value={user.email} />
                    </div></div> */}

                {/* <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Password:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="password" name="password" style={{ marginLeft: '10px' }} placeholder="" aria-describedby="passwordHelp" onChange={handleChange} value={user.password} />
                        <small id='passwordHelp' class="form-text text-muted">between 6 - 30 characters including alphabet and number</small>
                    </div></div> */}

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Address:</label></div>
                    <div class='col-sm-6'>
                        <textarea class="form-control" name='address' rows="3" style={{ marginLeft: '10px' }} onChange={handleChange} value={user.address}></textarea>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Tel:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="number" name="tel" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={user.tel} />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>Birthdate:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="date" name="birth_date" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={user.birth_date} />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                        <label style={{ color: "red" }}>*</label><label>NationalID:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="number" name="nat_id" onChange={handleChange} style={{ marginLeft: '10px' }} placeholder="x-xxxx-xxxxx-xx-x" value={user.nat_id} />
                    </div></div>

                <div class='form-group row col-sm-8'>
                    <button type='submit' class='btn btn-primary' style={{ position: 'absolute', right: '0px' }} onClick={onSubmit}>Submit</button>
                </div>

            </form>

        </div>

    );
}

export default Informationform;