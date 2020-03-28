import React, { useState, useEffect } from 'react'
import Spinner from '../web-components/Spinner'
import Images from '../web-components/Images'
import UploadButton from '../web-components/UploadButton'
import Notifications, { notify } from 'react-notify-toast'
import axios from 'axios'
import { api } from '../config'
const API_URL = api + "/user/uploadimage"


const toastColor = {
    background: '#505050',
    text: '#fff'
}

const UploadComponent = (props) => {
    const [uploading, setUploading] = useState(false)
    const [images, setImages] = useState([])

    useEffect(() => {
        if (props.avatar) {
            setImages("http://localhost:8000" + props.avatar)
        }
    }, [props])

    const toast = notify.createShowQueue()

    const onChange = async e => {
        const errs = []
        const files = Array.from(e.target.files)

        if (files.length > 3) {
            const msg = 'Only 3 images can be uploaded at a time'
            return toast(msg, 'custom', 2000, toastColor)
        }

        const formData = new FormData()
        const types = ['image/png', 'image/jpeg', 'image/gif']

        files.forEach((file, i) => {

            if (types.every(type => file.type !== type)) {
                errs.push(`'${file.type}' is not a supported format`)
            }

            if (file.size > 150000) {
                errs.push(`'${file.name}' is too large, please pick a smaller file`)
            }

            formData.append('image', file)
        })

        if (errs.length) {
            return errs.forEach(err => toast(err, 'custom', 2000, toastColor))
        }

        setUploading(true)

        await axios.post(API_URL, formData, {
            headers: {
                'Authorization': `Token ` + localStorage.getItem('Token'),
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log("res", res)
                setImages("http://localhost:8000" +res.data.url)
                setUploading(false)
                localStorage.setItem("image",res.data.url)
                return toast( "upload success", 'custom', 200, toastColor)
            })
            .catch(err => {
                toast(err.message, 'custom', 2000, toastColor)
                setUploading(false)

            })

    }

    const content = () => {
        switch (true) {
            case uploading:
                return <Spinner />
            case images.length > 0:
                return <div className='button-upload'>
                    <label for="file-input">
                        <img className='img-upload fadein' src={images} alt="" />
                    </label>
                    <input id="file-input" type="file" onChange={(e) => onChange(e)} />
                </div>
            default:
                return <UploadButton single="true" onChange={(e) => onChange(e)} />
        }
    }


    return (
        <div class="container">
            <Notifications />
            <div class="buttons-upload ">
                {content()}
            </div>
        </div>
    )
}

export default UploadComponent

