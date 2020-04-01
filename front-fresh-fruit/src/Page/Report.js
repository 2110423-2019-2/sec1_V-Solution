import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/_report.css'
import upload from '../pictures/upload.png'
import axios from 'axios'
import { api } from '../config'
import '../styles/_report.css'

import Upload from '../web-components/UploadComponent'
const uploadUserAPI = api + "/report/uploadreportimage/"
const submitUserAPI = api + '/report/submitreport'
const Report = () => {
    const [urlUpload, setUrlUpload] = useState('')


    const [data, setData] = useState({
        'subject': '',
        'reported_user': '',
        'descrption': '',
    });
    const handleChange = (e) => {
        console.log(data)
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const submitData = () => {
        axios.post(submitUserAPI, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ` + localStorage.getItem('Token'),

            }
        }).then((res) => {
            const reportID = res.data.report_id
            setUrlUpload(uploadUserAPI + reportID)

        }).catch((err) => {
            alert(err)
        })
    }

    const modal = () => {
        return (<div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>)
    }
    return (

        <div>

            <div class='container-fluid background'>

                <div class="container reportHeader">
                    <h1>Report</h1>
                </div>
                <div class='container reportBody'>
                    <div class='container' style={{ paddingTop: '50px' }}>
                        <div class='container containerAdjust' style={{ paddingBottom: '20px' }}>
                            <div class='row'>
                                <div class='col'>
                                    <h1 class='text'>Subject<span class='span-text'>*</span></h1>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col'>
                                    <input class='input' title='Subject' name="subject" inputType='text' onChange={(e) => { handleChange(e) }} />
                                </div>
                            </div>
                        </div>


                        <div class='container containerAdjust' style={{ paddingBottom: '20px' }}>
                            <div class='row'>
                                <div class='col'>
                                    <h1 class='text'>Report user<span class='span-text'>*</span></h1>
                                </div>
                            </div>

                            <div class='row'>
                                <div class='col'>
                                    <input class='input' title='Report user' name="report_user" inputType='text' onChange={(e) => { handleChange(e) }} />

                                </div>
                            </div>

                        </div>


                        <div class='container containerAdjust' style={{ paddingBottom: '20px' }}>

                            <div class='row'>
                                <div class='col'>
                                    <h1 class='text'>Description<span class='span-text'>*</span></h1>
                                </div>
                            </div>

                            <div class='row'>
                                <div class='col'>
                                    <textarea class='textarea' title='Description' name='description' inputType='textArea' onChange={(e) => { handleChange(e) }} />
                                </div>
                            </div>

                        </div>


                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Add Photo in Report</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class='container containerAdjust'>
                                            <p>{urlUpload}</p>
                                            <Upload type='report' api={urlUpload} />

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" data-dismiss="modal">Finish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='container containerAdjust' style={{ paddingTop: '200px', textAlign: 'center' }}>
                            <button type="button" class="btn btn-warning btn-report" data-toggle="modal" data-target="#exampleModal" onClick={(e) => {
                                submitData()
                            }}>Submit</button>
                        </div>





                    </div>




                </div>

            </div>

        </div>

    );
};

export default Report;