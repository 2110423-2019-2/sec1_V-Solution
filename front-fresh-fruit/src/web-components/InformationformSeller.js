import React,{ useState } from 'react';
import '../styles/_informationform.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function InformationformSeller() {
    
      return (
        <div>
            <form className="container" style={{ padding: '2%' }}>
                {/* <div class="row">
                    <div class="col" style={{textAlign: "left"}}>
                        <label style={{marginLeft:"6px"} }>
                            Error MSG:
                        </label>
                    </div>
                </div> */}
                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{textAlign: "left"}}>
                        <label style={{ color: "red" }}>*</label><label>Username:</label>
                    </div>
                    <div class="col-sm-6">
                            <input className = "form-control" type="text" name="name" style={{ marginLeft: '10px' }} placeholder=""/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{textAlign: "left"}}>
                        <label style={{ color: "red" }}>*</label><label>Name:</label>
                    </div>
                    <div class="col-sm-6">
                            <input className = "form-control" type="text" name="name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{textAlign: "left"}}>
                        <label style={{ color: "red" }}>*</label><label>Surname:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className = "form-control" type="text" name="name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{textAlign: "left"}}>
                        <label style={{color:"red"}}>*</label><label>Email:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className = "form-control" type="email" name="name" style={{ marginLeft: '10px' }} placeholder = "someone@hotmail.com" />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-2" style={{textAlign: "left"}}>
                        <label style={{color:"red"}}>*</label><label>Password:</label>
                    </div>
                    <div class="col-sm-6">
                        <input  className = "form-control" type="password" name="name" style={{ marginLeft: '10px' }} />
                        <small id='passwordHelp' class="form-text text-muted">between 6 - 30 characters including alphabet and number</small>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-3" style={{textAlign: "left"}}>
                        <label style={{color:"red"}}>*</label><label>Store name:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className = "form-control" type="text" name="name" style={{ marginLeft: '10px' }}/>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-3" style={{textAlign: "left"}}>
                        <label style={{color:"red"}}>*</label><label>Address:</label>
                    </div>
                    <div class="col-sm-6">
                        <textarea class="form-control" id="exampleFormControlTextarea1" style={{ marginLeft: '10px' }} rows="3"></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-form-label col-sm-3" style={{textAlign: "left"}}>
                        <label style={{color:"red"}}>*</label><label>Tel:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className = "form-control" type="text" name="name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-sm-3" style={{textAlign: "left"}}>
                        <label style={{color:"red"}}>*</label><label>Birthdate:</label>
                    </div>
                    <div class="col-sm-6">
                        <input className = "form-control" type='date' style={{ marginLeft: '10px' }}/>
                    </div>   
                </div>

                <div class='form-group row'>
                    <div class="col-form-label col-sm-2" style={{textAlign:"left"}}>
                        <label style={{color:"red"}}>*</label><label>Gender</label>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-check form-check-inline" style={{paddingRight:'18px'}}>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label class="form-check-label" for="inlineRadio1" checked>Male</label>
                        </div>
                        <div class="form-check form-check-inline" style={{marginTop:'10px'}}>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                    </div>
                </div>

                <div class="form-group row" >
                    <div class="col-form-label col-sm-3" style={{textAlign: "left"}}>
                        <label style={{color:"red"}}>*</label><label>National ID:</label>
                    </div>
                    <div class="col-sm-6">
                            <input className = "form-control" type="text" name="name" style={{ marginLeft: '10px' }} />
                    </div>
                </div>
            
                <div class="col-sm-9">
                    <button type='submit' class='btn btn-primary register-btn-seller'>Register</button>
                </div>
            </form>
        </div>
      );
  }
  
  export default InformationformSeller;