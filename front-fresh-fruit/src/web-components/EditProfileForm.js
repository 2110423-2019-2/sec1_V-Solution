import React, { useState, useEffect } from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Upload from '../web-components/UploadComponent'
import { api } from '../config'

const urlEdit = api + "/edituser/"
const urlGet = api + "/getuser/";

const Informationform = () => {
    const [user, setUser] = useState({
        "first_name": "",
        "last_name": "",
        "address": "",
        "tel": "",
        "birth_date": "",
        "gender": "",
        "nat_id": "",
        "image": "",
        "store_name":"",
        "bio":""
    });
    const [user_token, setUser_token] = useState()

    const [error, setError] = useState(false)

    async function fetchUser() {
        try {
            const res = await axios.get(urlGet + localStorage.getItem('Username'))
            const data = res.data
            await setUser({
                user_type: data.user_type,
                first_name: data.first_name,
                last_name: data.last_name,
                address: data.address,
                tel: data.tel,
                birth_date: data.birth_date,
                gender: data.gender,
                nat_id: data.nat_id,
                image: data.image,
                store_name:data.store_name,
                bio:data.bio
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser();
        console.log("user-token: ", localStorage.getItem("Token"))
    }, [])


    const checkState = () => {
        console.log("user: ", user)
        console.log("user-token: ", user_token)
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)

        switch (e.target.name) {
            case 'tel':
                e.target.value.length === 10 ? setError(false) : setError(true)
                break
            default:
        }

    }

    const onSubmit = async (e) => {
        await axios.post(urlEdit + localStorage.getItem('Username'), user, {
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

            <form class="container" style={{ padding: '2%' }}>
                <div class="from-group row">
                    <div class="col-md-3">
                        <Upload avatar={user.image} />
                    </div>
                    <div class="col-md-9">
                        <div class="form-group row">
                            <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                                <label style={{ color: "red" }}>*</label><label>Name:</label></div>
                            <div class='col-sm-6'>
                                <input class="form-control" type="text" name="first_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={user.first_name} />
                                {user.first_name.length == 0 && <small>please enter you first name</small>}
                            </div></div>

                        <div class="form-group row">
                            <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                                <label style={{ color: "red" }}>*</label><label>Surname:</label></div>
                            <div class='col-sm-6'>
                                <input class="form-control" type="text" name="last_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={user.last_name} />
                                {user.last_name.length == 0 && <small>Please enter your last name</small>}
                            </div>
                        </div>
                    </div>

                </div>


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

                        {user.tel.length != 10 && <small class='errorInForm'>Telephone number should be 10 character</small>}
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
                        <input disabled class="form-control" type="number" name="nat_id" onChange={handleChange} style={{ marginLeft: '10px' }} placeholder="x-xxxx-xxxxx-xx-x" value={user.nat_id} maxlength='13' />

                    </div></div>

                <div class='form-group row col-sm-8'>
                    {error ? <small class='errorInForm' style={{ position: 'absolute', right: '20%' }}>Please fill form with correct data</small> : ''}
                    {error ?
                        <button type='submit' class='btn btn-primary' style={{ position: 'absolute', right: '0px' }} onClick={onSubmit} disabled>Submit</button> :
                        <button type='submit' class='btn btn-primary' style={{ position: 'absolute', right: '0px' }} onClick={onSubmit}>Submit</button>}
                </div>

            </form>

        </div>

    );
}

export default Informationform;