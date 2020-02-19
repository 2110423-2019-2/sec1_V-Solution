import React from 'react';
import Form from '../web-components/addItemform';
import Pic from '../pictures/fruit.png'

const AddItem = () => {
    return (

        <div>

            <div class='row'>
                <div class='col'>
                    <h1 style={{ textAlign: 'center' }}>Add Product</h1>
                </div>
            </div>

            <div class='row' style={{ marginTop: "15px" }}>

                <div class='col-4'>

                    <div class='row'>
                        <div class='col' style={{ textAlign: "center", marginTop: "10px" }}>
                            <img src={Pic} />
                        </div>
                    </div>

                    <div class='row'>
                        <div class="col" style={{ textAlign: 'center', marginTop: "15px" }}>
                            <button type="submit" class="btn btn-primary" style={{ marginRight: '10px' }}>Upload Picture</button>
                        </div>
                    </div>

                </div>

                <div class='col-8'>

                    <Form />

                </div>

            </div>

            <div class='row' style={{ marginTop: "10px" }}>

                <div class='col-4'>
                    <div class='row'>
                        <div class='col' style={{ textAlign: "right" }}>
                            <button type="submit" class="btn btn-outline-primary" >Add</button>
                        </div>
                    </div>
                </div>

                <div class='col-4'>
                    <div class='row'>
                        <div class='col' style={{ textAlign: "center" }}>
                            <button type="submit" class="btn btn-outline-success" >Luanch</button>
                        </div>
                    </div>
                </div>

                <div class='col-4'>
                    <div class='row'>
                        <div class='col' style={{ textAlign: "left" }}>
                            <button type="submit" class="btn btn-outline-warning" >Reserve</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default AddItem;