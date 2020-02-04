import React, { useState } from 'react';

function Item(img, name) {
    return (
        <div>
            <div class="card col" >
                <img src={img} class="card-img-top pic-card" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="edit-store-button">
                        <a href="#" class="btn btn-primary edit-launch-botton">Launch</a>
                        <a href="#" class="btn btn-primary">Reserve</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

const EditStore = () => {
    const mango = "https://f.btwcdn.com/store-34660/product/49e0623f-5e1d-9c4f-d254-5b7f69a49e9a.jpg"
    const banana = "https://www.spcosmeticsplus.com/wp-content/uploads/2018/02/banana-extract.jpg"
    const name = "Fruit"
    return (
        <div >
            <div class="edit-store-title">Your products</div>
            <div class="container">
                <div class="row">
                    {Item(mango, name)}
                    {Item(banana, name)}
                    {Item(mango, name)}
                    {Item(banana, name)}
                    {Item(mango, name)}
                    {Item(banana, name)}
                    {Item(banana, name)}
                    {Item(banana, name)}
                </div>
            </div>


        </div>
    );
};

export default EditStore;