import React,{useState,useEffect} from 'react'

import '../styles/_report.css'
import '../web-components/ReportFormComponent'
import ReportFormComponent from '../web-components/ReportFormComponent'
import upload from '../pictures/upload.png'
import axios from 'axios'
import {api} from '../config'

const Report = () => {
    const [data,setData] = useState({
        'subject':'',
        'report_user':'',
        'descrption':'',
    });
    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitF = () =>{

    }

    return (
        
        <div>
            
            <div class='container-fluid background'> 

                <div class="container reportHeader">
                    <h1>Report</h1>
                </div>

                <div class='container reportBody'>
                    
                    <div class='container' style={{paddingTop: '50px'}}>

                        <ReportFormComponent title='Subject' name="subject" inputType='text'/>
                        <ReportFormComponent title='Report user' name="report_user" inputType='text'/>
                        <ReportFormComponent title='Description' name='description' inputType='textArea'/>

                        <div class='container containerAdjust' style={{paddingTop: '10px'}}>
                            <div class='row' containerAdjust>
                                <div class='col-md-2'>
                                    <h1 class='font'>Attach picture</h1>
                                </div>
                                <div class='col-md-1'>
                                    <img src={upload} class='pic'/>
                                </div>
                            </div>
                            
                        </div>

                        <div class='container containerAdjust' style={{paddingTop: '30px', textAlign: 'center'}}>
                            <button type="button" class="btn btn-warning btn-report">Submit</button>
                        </div>

                    </div>
                    
                </div>

            </div>
            
        </div>

    );
};

export default Report;