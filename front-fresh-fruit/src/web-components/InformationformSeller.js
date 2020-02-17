import React from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

function InformationformSeller() {
      
      return (

        <div>

        <form className="container">

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
                <input style = {{marginLeft:"55px"}} className = "inputfield" type="text" name="name"
                placeholder = "someone@hotmail.com" />
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
               <span style={{color:"red"}}>*</span>Password:
                <input style = {{marginLeft:"27px"}} className = "inputfield" type="text" name="name" />
                <label style={{marginLeft: "6px", color:"grey"}}>between 6 - 30 characters including alphabet and number</label>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                <span style={{color:"red"}}>*</span>Store name:
                <input style = {{marginLeft:"13px"}} className = "inputfield" type="text" name="name"/>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}> <label style={{marginLeft: "7px"}}>
                Address:
                <input style = {{marginLeft:"38px"}} className = "inputfield" type="text" name="name" />
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
                   <tr>
                       <td>
                           <input type="checkbox"/>
                           <label style={{paddingLeft: "10px"}}> Male </label>
                       </td>
                       <td style={{paddingLeft: "50px"}}>
                            <input type="checkbox"/>
                            <label style={{paddingLeft: "10px"}}> Female </label>
                       </td>
                   </tr>
               </span>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
            <span style={{color:"red"}}>*</span>National ID:
                <input style = {{marginLeft:"14px"}} className = "inputfield" type="text" name="name" />
            </label></div></div>
            
        </form>

        </div>
        
      );
  }
  
  export default InformationformSeller;