import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.scss';
import {api, media} from '../config.json'

const ProfilePicture = () => {
    const [image, setImage] = useState("");
    const profilePic = () => {
        switch (true) {
            case image !== media:
                return <img className='profile-pic img-fluid  rounded fadein' src={image} alt="profilePic" />
            default:
                return <div className='button-upload icon-profile'>
                    <FontAwesomeIcon icon={faUserCircle} color='#3B5998' size='10x' />
                </div>
        }
    }
    useEffect(() => {
        console.log("image",localStorage.getItem('image') )
        setImage(media + localStorage.getItem('image'))
    },[image])
    return (
        <div>
            {profilePic()}
        </div>
    )
}

export default ProfilePicture
