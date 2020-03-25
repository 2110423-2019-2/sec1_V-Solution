import React, { useState, useEffect } from 'react';
import ShowStore from '../web-components/ShowStore';
import EditProfileForm from '../web-components/EditProfileForm';
import axios from 'axios';




const EditProfile = () => {
    const [data, setData] = useState({
        "user_type": '',
        "first_name": "",
        "last_name": "",
        "address": '',
        "tel": '',
        "birth_date": "",
        "gender": "",
        "email": "",
        "nat_id": ''
    })

    

    return (
        <div style={{ paddingLeft: '25%', paddingRight: 'auto', paddingTop:'20px' }}>
            <h3>Edit Profile : {localStorage.getItem('Username')}</h3>
            <div>
                <EditProfileForm
                    first_name={data['first_name']}
                    last_name={data['last_name']}
                    address={data['address']}
                    tel={data['tel']}
                    birth_date={data['birth_date']}
                    gender={data['gender']}
                    email={data['email']}
                    nat_id={data['nat_id']}
                    user={data}
                />
            </div>
        </div>
    );
};

export default EditProfile;