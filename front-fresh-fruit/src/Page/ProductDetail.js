import React, { useEffect, useState } from 'react';
import '../App.scss';
import ProductComponent from '../web-components/ProductComponent'
import axios from 'axios'


const ProductDetail = (props) => {

    return (
        <div>
             <ProductComponent/>
        </div>
    );
}

export default ProductDetail;