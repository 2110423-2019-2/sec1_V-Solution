import React from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

function InformationformSeller() {
      
      return (

        <div>

        <form className="container" style={{fontSize:'16px'}}>

        <div class="row"><div class="col" style={{textAlign: "left"}}><label style={{marginLeft:"6px"} }>
                Error MSG:
               
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                <span style={{color:"red"}}>*</span>Username:
                <input style = {{marginLeft:"22px"}} className = "inputfield" type="text" name="name" 
                placeholder=""/>
            </label></div></div>


            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                <span style={{color:"red", marginTop: "5px"}}>*</span>Name:
                <input style = {{marginLeft:"50px"}} className = "inputfield" type="text" name="name" />
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                <span style={{color:"red"}}>*</span>Surname:
                <input  style = {{marginLeft:"30px"}} className = "inputfield" type="text" name="name" />
            </label></div></div>


            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                <span style={{color:"red"}}>*</span>Email:
                <input style = {{marginLeft:"55px"}} className = "inputfield" type="email" name="name"
                placeholder = "someone@hotmail.com" />
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
               <span style={{color:"red"}}>*</span>Password:
                <input style = {{marginLeft:"27px"}} className = "inputfield" type="password" name="name" />
                <label style={{marginLeft: "6px", color:"grey"}}>between 6 - 30 characters including alphabet and number</label>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                <span style={{color:"red"}}>*</span>Store name:
                <input style = {{marginLeft:"13px"}} className = "inputfield" type="text" name="name"/>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}> <label style={{marginLeft: "7px"}}>
                Address:
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                <span style={{color:"red"}}>*</span>Tel:
                <input style = {{marginLeft:"74px"}} className = "inputfield" type="text" name="name" />
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                <span style={{color:"red"}}>*</span>Birthdate:
                <input type='date'/>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
            <span style={{color:"red"}}>*</span>Gender:
               <span style={{marginLeft: "70px"}}>
               <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>
               </span>
            </label></div></div>

            <div class="row" ><div class="col" style={{textAlign: "left"}}><label>
            <span style={{color:"red"}}>*</span>National ID:
                <input style = {{marginLeft:"14px",right:'65%'}} className = "inputfield" type="text" name="name" />
            </label></div></div>
            
            <button type='submit' class='btn btn-primary' style={{position:'absolute',left:'30px'}}>Register</button>
            
        </form>

        </div>
        
      );
  }
  
  export default InformationformSeller;