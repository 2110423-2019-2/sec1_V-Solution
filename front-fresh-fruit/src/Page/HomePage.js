import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homefruit from '../pictures/homefruit.png';
import buttoncus from '../pictures/buttoncus.png';
import buttonsell from '../pictures/buttonsell.png';
import HomeStore from '../web-components/ShowStore';
import axios from 'axios';
import {api} from '../config'
import OmiseCreditCard from '../omise-prebuit/OmiseCreditCard';
const productUrl = api+"/allproduct"
const searchProductUrl = api+"/searchproduct"

const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [searchQuery,setSearchQuery] = useState({
    'product_name':'',
    'category':'',
    'subcategory':'',
    'province':'',
    'district':'',
    'product_type':'',
    'price_low':0,
    'price_high':9999
  })
  const handleChange = (e) =>{
    setSearchQuery({...searchQuery,['product_name']:e.target.value})
  }
  async function getProduct() {
    try {
      if(searchQuery['product_name']=='' || typeof(searchQuery['product_name'])=="undefined"){
        const response = await axios.get(productUrl);
        console.log("product",response.data);
        console.log(searchQuery)
        setProduct(response.data)
      }else{
        const response = await axios.post(searchProductUrl,searchQuery);
        console.log(searchQuery['product_name'],'this is searchQuery')
        console.log("searchProduct",response.data);
        setProduct(response.data)
      }
      
    } catch (error) {
      console.error(error);
    }
  }

useEffect(() => {
    getProduct();
    
},[searchQuery])

  return (

    <div>

      {/* ------------- header ------------------ */}

      <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>

        <div class="row" style={{ height: "700px" }}>

          <div class="col">

            <div class="row" style={{ marginTop: "120px", marginLeft: "50px" }}>
              <div class="col" style={{ textAlign: "center" }}><img src={homefruit} style={{ height: '400px', width: '600px' }} /></div>
              <div class="col" style={{ textAlign: "center", color: "white" }}><h1>Find Daily & Organic fruit</h1>
                <h2>with</h2><h1>FRESHFRUIT</h1>
                <input type="text" name="search" style={{ marginTop: "40px", width: "500px", height: "45px", borderRadius: "20px"}}  onChange={handleChange} />
                <OmiseCreditCard />
                <h1>{searchQuery['product_name']}</h1>
                {/*<div style={{ marginTop: "40px" }}><button style={{ width: '120px', height: '40px', borderRadius: "20px" }} onClick={getProduct}>Search</button></div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------- body ------------------- */}



      {/* -------------- Store part --------------------*/}

      {product.length == 0 ? <h1>{searchQuery['product_name']}</h1> : <HomeStore product={product}/>}

    </div>

  );

};

export default HomePage;