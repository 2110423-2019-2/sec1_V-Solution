import React, { useState, useEffect } from 'react'
import ProfilePicture from './ProfilePicture'
import axios from 'axios'
import {api} from '../config.json'

const urlCrerate = api+"/edituser/"
const urlGet = api+"/getuser/";

export default function CreateStoreButton() {
    const [user, setUser] = useState({
        "store_name": "",
        
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
                store_name:data.store_name,
                bio:data.bio
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const onCreate = async (e) => {
        await axios.post(urlCrerate + localStorage.getItem('Username'), user, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ` + localStorage.getItem('Token')
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                Create Store
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Your Store</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form class="container" style={{ padding: '2%' }}>
                                <div class="from-group row">
                                    <div class="col">
                                        <label>Store Name</label>
                                        <input class="form-control" type="text" name="store_name" placeholder="" onChange={handleChange} value={user.store_name} />
                                        {user.store_name.length == 0 && <small>please enter you store name</small>}


                                    </div>
                                </div>
                            </form>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={onCreate}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
