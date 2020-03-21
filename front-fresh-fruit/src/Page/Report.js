import React from 'react'
import '../styles/_report.css'
import '../web-components/ReportFormComponent'
import ReportFormComponent from '../web-components/ReportFormComponent'
import upload from '../pictures/upload.png'

const Report = () => {


    return (
        
        <div>
            
            <div class='container-fluid background'> 

                <div class="container reportHeader">
                    <h1>Report</h1>
                </div>

                <div class='container reportBody'>
                    
                    <div class='container' style={{paddingTop: '50px'}}>

                        <ReportFormComponent title='Subject' inputType='text'/>
                        <ReportFormComponent title='Report user' inputType='text'/>
                        <ReportFormComponent title='Description' inputType='textArea'/>

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
                            <button type="button" class="btn btn-warning btn">Submit</button>
                        </div>

                    </div>
                    
                </div>

            </div>
            
        </div>

    );
};

export default Report;