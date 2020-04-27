import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import Upload from './UploadComponent'
import axios from 'axios'
import { api } from '../config'

const uploadProductAPI = api + "/product/uploadimage/"
const productURL = api + /editproduct/

const EditProductModal = (props) => {
    const [product, setProduct] = useState({
        id: "",
        product_name: "",
        product_desc: "",
        category: "",
        subcategory: "",
        province: "",
        district: "",
        product_type: "",
        harvest_date: "",
        price: 0,
        amount: 0,
        unit_of_amount: "",
        deliver_company: "",
        deliver_price: 0,
        image: "",

    })
    const [error, setError] = useState(false)

    useEffect(() => {
        setProduct(props.item)
    }, [props])

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
        
    }

    const onSubmit = () => {
        let timer
        axios.post(productURL + product.id, product, {
            headers: {
                'Authorization': `Token ` + localStorage.getItem('Token')
            }
        }).then((res) => {
            console.log("response edit", res.data)
            alert('edit successful')
        }).then(timer = setTimeout(() => window.location.reload(false), 1500))
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <button type="button" class="btn " data-toggle="modal" data-target={"#editModal" + product.id}>
                <FontAwesomeIcon icon={faEllipsisV} color='#AFAFAF' size='2x' />
            </button>

            <div class="modal fade" id={"editModal" + product.id} tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModalLabel">Edit Product: {product.product_name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form class="container" style={{ padding: '2%' }}>
                                <Upload id={"editModal" + product.id} avatar={product.image} type="product" api={uploadProductAPI+product.id}/>
                                <div class="form-group row">
                                    <div class='col-form-label col-sm-5' style={{ position: 'static', left: '0px' }}>
                                        <label style={{ color: "red" }}>*</label><label>Product Name:</label></div>
                                    <div class='col-sm-7'>
                                        <input class="form-control" type="text" name="product_name" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={product.product_name} />
                                        {product.product_name.length == 0 && <small>please enter you product name</small>}
                                    </div></div>

                                <div class="form-group row">
                                    <div class='col-form-label col-sm-5' style={{ position: 'static', left: '0px' }}>
                                        <label style={{ color: "red" }}>*</label><label>Product Description:</label></div>
                                    <div class='col-sm-7'>
                                        <input class="form-control" type="text" name="product_desc" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={product.product_desc} />
                                    </div></div>

                                <div class="form-group row">
                                    <div class='col-form-label col-sm-5' style={{ position: 'static', left: '0px' }}>
                                        <label style={{ color: "red" }}>*</label><label>Product Category:</label></div>
                                    <div class='col-sm-7'>
                                        <div class="input-group mb-3" type="text" name="category" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={product.category}>
                                            <select class="custom-select" id="inputGroupSelect02">
                                                <option defaultValue>{product.category}</option>
                                                <option value="1">Fruit</option>
                                                <option value="2">Vegetable</option>
                                                <option value="3">...</option>
                                            </select>
                                        </div>                                    </div></div>

                                <div class="form-group row">
                                    <div class='col-form-label col-sm-5' style={{ position: 'static', left: '0px' }}>
                                        <label style={{ color: "red" }}>*</label><label>SubCategory:</label></div>
                                    <div class='col-sm-7'>
                                        <div class="input-group mb-3" type="text" name="subcategory" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={product.subcategory}>
                                            <select class="custom-select" id="inputGroupSelect02">
                                                <option defaultValue>{product.subcategory}</option>
                                                <option value="1">Daily</option>
                                                <option value="2">Weekly</option>
                                                <option value="3">Monthly</option>
                                                <option value="4">Yearly</option>
                                            </select>
                                        </div>
                                        {product.subcategory.length == 0 && <small>please enter you subcategory</small>}
                                    </div></div>

                                <div class="form-group row">
                                    <div class='col-form-label col-sm-5' style={{ position: 'static', left: '0px' }}>
                                        <label style={{ color: "red" }}>*</label><label>Harvest Date:</label></div>
                                    <div class='col-sm-7'>
                                        <input class="form-control" type="date" name="harvest_date" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={product.harvest_date} />
                                    </div></div>

                                <div class="form-group row">
                                    <div class='col-form-label col-sm-5' style={{ position: 'static', left: '0px' }}>
                                        <label style={{ color: "red" }}>*</label><label>Price:</label></div>
                                    <div class='col-sm-7'>
                                        <input class="form-control" type="text" name="price" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={product.price} />
                                        {product.price.length == 0 && <small>please enter you price</small>}
                                    </div></div>

                                <div class="form-group row">
                                    <div class='col-form-label col-sm-5' style={{ position: 'static', left: '0px' }}>
                                        <label style={{ color: "red" }}>*</label><label>Amount:</label></div>
                                    <div class='col-sm-7'>
                                        <input class="form-control" type="text" name="amount" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={product.amount} />
                                        {product.amount.length == 0 && <small>please enter you amount</small>}
                                    </div></div>

                                <div class="form-group row">
                                    <div class='col-form-label col-sm-5' style={{ position: 'static', left: '0px' }}>
                                        <label style={{ color: "red" }}>*</label><label>Unit of Amount:</label></div>
                                    <div class='col-sm-7'>
                                        <input class="form-control" type="text" name="unit_of_amount" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={product.unit_of_amount} />
                                        {product.unit_of_amount.length == 0 && <small>please enter you unit of amount</small>}
                                    </div></div>

                                <div class="form-group row">
                                    <div class='col-form-label col-sm-5' style={{ position: 'static', left: '0px' }}>
                                        <label style={{ color: "red" }}>*</label><label>Delivery Company:</label></div>
                                    <div class='col-sm-7'>
                                        <input class="form-control" type="text" name="deliver_company" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={product.deliver_company} />
                                        {product.deliver_company.length == 0 && <small>please enter you deliver company</small>}
                                    </div></div>

                                <div class="form-group row">
                                    <div class='col-form-label col-sm-5' style={{ position: 'static', left: '0px' }}>
                                        <label style={{ color: "red" }}>*</label><label>Delivery Price:</label></div>
                                    <div class='col-sm-7'>
                                        <input class="form-control" type="text" name="deliver_price" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} value={product.deliver_price} />
                                        {product.deliver_price.length == 0 && <small>please enter you deliver price</small>}
                                    </div></div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={onSubmit} data-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProductModal
