import React, { useEffect, useState } from 'react';
import '../App.scss';
import ProductComponent from '../web-components/ProductComponent'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const ProductDetail = (props) => {

    return (
        <div>
             <ProductComponent username={getUsername()} />
        </div>
    );
}

export default ProductDetail;