import React from 'react';
import '../styles/_report.css'

const ReportFormComponent = (props) => {

    if (props.inputType == 'textArea') {

        return (

            <div class='container containerAdjust' style={{paddingBottom: '20px'}}>
    
                <div class='row'>
                    <div class='col'>
                        <h1 class='text'>{props.title}<span class='span-text'>*</span></h1>
                    </div>
                </div>
    
                <div class='row'>
                    <div class='col'>
                        <textarea class='form-area'/> 
                    </div>
                </div>
    
            </div>

        )
    }
    
    else {
        
        return (

            <div class='container containerAdjust' style={{paddingBottom: '20px'}}>
    
                <div class='row'>
                    <div class='col'>
                        <h1 class='text'>{props.title}<span class='span-text'>*</span></h1>
                    </div>
                </div>
    
                <div class='row'>
                    <div class='col'>
                        
                        <input type={props.inputType} class='form'/> 
                    </div>
                </div>
    
            </div>
    
        );

    }
    
    

};

export default ReportFormComponent;