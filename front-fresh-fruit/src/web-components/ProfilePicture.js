import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.scss';

const ProfilePicture = () => {
    const [image, setImage] = useState("http://localhost:8000" + localStorage.getItem('image'));
    const profilePic = () => {
        switch (true) {
            case image !== "http://localhost:8000":
                return <img className='profile-pic img-fluid  rounded fadein' src={image} alt="profilePic" />
            default:
                return <div className='button-upload icon-profile'>
                    <FontAwesomeIcon icon={faUserCircle} color='#3B5998' size='10x' />
                </div>
        }
    }
    return (
        <div>
            {profilePic()}
        </div>
    )
}

export default ProfilePicture
