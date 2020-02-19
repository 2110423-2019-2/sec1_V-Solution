import React from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

function addItemfrom() {
      
      return (

        <div>

        <form className="container" style={{fontSize:'16px'}}>

       
            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                Name:
                <input style = {{marginLeft:"103px", width:"200px"}} className = "inputfield" type="text" name="name" 
                placeholder=""/>
            </label></div></div>


            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                Description:
                <span><textarea class="form-control" style={{marginLeft: "150px"}} id="exampleFormControlTextarea1" rows="2" cols="4"></textarea></span>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                Category:
                <input  style = {{marginLeft:"80px", width: "200px"}} className = "inputfield" type="text" name="name" />
            </label></div></div>


            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                Subcategory:
                <input style = {{marginLeft:"55px", width: "200px"}} className = "inputfield" type="email" name="name"/>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                Harvest Date:
                <input style = {{marginLeft:"53px", width: "200px"}} className = "inputfield" type="password" name="name" />
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                Price Amount:
                <input style = {{marginLeft:"50px", width: "200px"}} className = "inputfield" type="text" name="name"/>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}> <label>
                Unit of Amount:
                <input style = {{marginLeft:"40px", width: "200px"}} className = "inputfield" type="text" name="name"/>
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                Deliver Company:
                <input style = {{marginLeft:"25px", width:"200px"}} className = "inputfield" type="text" name="name" />
            </label></div></div>

            <div class="row"><div class="col" style={{textAlign: "left"}}><label>
                Deliver Price:
                <input style = {{marginLeft:"55px", width: "200px"}} className = "inputfield" type="text" name="name" />
            </label></div></div>


            <div class="row" ><div class="col" style={{textAlign: "left"}}><label>
                Tag:
                <input style = {{marginLeft:"120px", width: "200px"}} className = "inputfield" type="text" name="name" />
            </label></div></div>
            
            
        </form>

        </div>
        
      );
  }
  
  export default addItemfrom;