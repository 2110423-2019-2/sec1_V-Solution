import React, { useState, useEffect } from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Upload from '../web-components/UploadComponent'
import { api } from '../config'

const urlEdit = api + "/edituser/"
const urlGet = api + "/getuser/";
const uploadUserAPI = api + "/user/uploadimage"

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
        "store_name": "",
        "bio": ""
    });

    const [error, setError] = useState({
        'first_name': '',
        'last_name': '',
        'tel': '',
        'nat_id': ''
    })

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
                store_name: data.store_name,
                bio: data.bio
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
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)

        let error2 = error;
        switch (e.target.name) {
            case 'first_name':
                if (e.target.value.length < 0) {
                    error2.first_name = 'You must input your first name'
                    break
                } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
                    error2.first_name = 'Your name must contain only a-z or A-Z'
                    break
                }else if (!/^[a-zA-Z]+$/.test(user.first_name) && e.target.value.length > 1) {
                    error2.first_name = 'Your name must contain only a-z or A-Z'
                    break
                } else {
                    error2.first_name = ""
                    break
                }
            case 'last_name':
                if (e.target.value.length < 0) {
                    error2.last_name = 'You must input surname'
                    break
                } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
                    error2.last_name = 'Your surname must contain only a-z or A-Z'
                    break
                }else if (!/^[a-zA-Z]+$/.test(user.last_name) && e.target.value.length > 1) {
                    error2.last_name = 'Your surname must contain only a-z or A-Z'
                    break
                } else {
                    error2.last_name = ""
                    break
                }
            case 'tel':
                if (!/^[0-9]+$/.test(e.target.value)) {
                    error2.tel = 'Your phone number must contain only 0-9'
                    break
                }else if (!/^[0-9]+$/.test(user.tel) && e.target.value.length > 1) {
                    error2.tel = 'Your phone number must contain only 0-9'
                    break
                } else if (e.target.value.length != 10) {
                    error2.tel = 'Phone number must have 10 characters'
                    break
                } else {
                    error2.tel = ""
                    break
                }
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
                localStorage.setItem('id', user.id)
                localStorage.setItem('first_name', user.first_name)
                localStorage.setItem('last_name', user.last_name)
                localStorage.setItem('address', user.address)
                localStorage.setItem('birth_date', user.birth_date)
                localStorage.setItem('tel', user.tel)
                localStorage.setItem('store_name', user.store_name)
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
                        <Upload avatar={user.image} type="profile" api={uploadUserAPI} />
                    </div>
                    <div class="col-md-9">
                        {localStorage.getItem('user_type') === 'Seller' ?
                            <div class="form-group row">
                                <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                                    <label style={{ color: "red" }}>*</label><label>Store:</label></div>
                                <div class='col-sm-6'>
                                    <input class="form-control" type="text" name="store_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={user.store_name} />
                                    {user.store_name.length == 0 && <small>please enter you store name</small>}
                                </div></div>
                            : <div />
                        }
                        <div class="form-group row">
                            <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                                <label style={{ color: "red" }}>*</label><label>Name:</label></div>
                            <div class='col-sm-6'>
                                <input class="form-control" type="text" name="first_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={user.first_name} />
                                {user.first_name.length > 0 && <small class='errorInForm'>{error.first_name}</small>}
                            </div></div>

                        <div class="form-group row">
                            <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}>
                                <label style={{ color: "red" }}>*</label><label>Surname:</label></div>
                            <div class='col-sm-6'>
                                <input class="form-control" type="text" name="last_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={user.last_name} />
                                {user.last_name.length > 0 && <small class='errorInForm'>{error.last_name}</small>}
                            </div>
                        </div>
                    </div>

                </div>

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

                        {user.tel.length != 10 && <small class='errorInForm'>{error.tel}</small>}
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