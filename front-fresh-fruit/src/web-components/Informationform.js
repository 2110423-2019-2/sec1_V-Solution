import React from 'react';
import '../App.scss';

function Informationform() {

    
  
      return (

        <div>

        <form className="container">
            <label style={{marginLeft:"6px"} }>
                Error MSG:
               
            </label>

            <br />

            <label>
                <span style={{color:"red"}}>*</span>Username:
                <input style = {{marginLeft:"22px"}} className = "inputfield" type="text" name="name" 
                placeholder=""/>
            </label>

            <br />

            <label>
                <span style={{color:"red", marginTop: "5px"}}>*</span>Name:
                <input style = {{marginLeft:"50px"}} className = "inputfield" type="text" name="name" />
            </label>

            <br />

            <label>
                <span style={{color:"red"}}>*</span>Surname:
                <input  style = {{marginLeft:"30px"}} className = "inputfield" type="text" name="name" />
            </label>

            <br />

            <label>
                <span style={{color:"red"}}>*</span>Email:
                <input style = {{marginLeft:"55px"}} className = "inputfield" type="text" name="name"
                placeholder = "someone@hotmail.com" />
            </label>

            <br />

            <label>
               <span style={{color:"red"}}>*</span>Password:
                <input style = {{marginLeft:"27px"}} className = "inputfield" type="text" name="name" />
                <label style={{marginLeft: "6px", color:"grey"}}>between 6 - 30 characters including alphabet and number</label>
            </label>

            <br />

            <label style={{marginLeft: "7px"}}>
                Address:
                <input style = {{marginLeft:"38px"}} className = "inputfield" type="text" name="name" />
            </label>

            <br />

            <label>
                <span style={{color:"red"}}>*</span>Tel:
                <input style = {{marginLeft:"74px"}} className = "inputfield" type="text" name="name" />
            </label>

            <br />

            <label>
                <span style={{color:"red"}}>*</span>Birthdate:
                <input style = {{marginLeft:"30px"}} className = "inputfield" type="text" name="name" 
                placeholder = "dd/mm/yyyy"/>
            </label>

            <br />

            <label>
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
            </label>

            <br />

            <label>
            <span style={{color:"red"}}>*</span>National ID:
                <input style = {{marginLeft:"14px"}} className = "inputfield" type="text" name="name" />
            </label>
            
        </form>

        </div>
        
      );
  }
  
  export default Informationform;