import React,{useState} from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
function Informationform() {
    const [data,setData] = useState({});

    const handleChange = (e) => {setData({...data,[e.target.name]:e.target.value})
}
    return (

        <div>

            <form style={{padding:'2%'}}>

                {/*<div class="row"><div class="col" style={{textAlign: "left"}}><label style={{marginLeft:"6px"} }>
                Error MSG:
               
      </label>*/}


                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Username:</label></div>
                    <div class="col-sm-6">
                        <input class="form-control" type="text" name="name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} />
                    </div>
                </div>



                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Name:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="text" name="name" style={{ marginLeft: '10px' }} placeholder="" />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Surname:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="text" name="name" style={{ marginLeft: '10px' }} placeholder="" />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Email:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="email" name="name" style={{ marginLeft: '10px' }} placeholder="someone@outlook.com" />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Password:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="password" name="name" style={{ marginLeft: '10px' }} placeholder="" aria-describedby="passwordHelp" onChange={handleChange}/>
                        <small id='passwordHelp' class="form-text text-muted">between 6 - 30 characters including alphabet and number</small>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Address:</label></div>
                    <div class='col-sm-6'>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ marginLeft: '10px' }}></textarea>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Tel:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="Tel" name="name" style={{ marginLeft: '10px' }} placeholder="" />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Birthdate:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="date" name="name" style={{ marginLeft: '10px' }} placeholder="" />
                    </div></div>
                <div class='form-group row'>
                <legend class="col-form-label col-sm-2">Sex</legend>
                <div class="col-sm-3">
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>
      </div>
      </div>

                            <div class="form-group row">
                                <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>NationalID:</label></div>
                                <div class='col-sm-6'>
                                    <input class="form-control" type="number" name="name" style={{ marginLeft: '10px' }} placeholder="" />
                                </div></div>

            <div class='col-sm-8'>
                            <button type='submit' class='btn btn-primary' style={{position:'absolute',right:'0px'}}>Register</button>
                            </div>
        </form>

                    </div>

                    );
                }
                
  export default Informationform;