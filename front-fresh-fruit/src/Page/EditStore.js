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
                        <button href="" class="btn btn-outline-success edit-launch-botton">Launch</button>
                        <button href="" class="btn btn-outline-warning">Reserve</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

const EditStore = () => {
    const items = [
        {
            'img': 'https://f.btwcdn.com/store-34660/product/49e0623f-5e1d-9c4f-d254-5b7f69a49e9a.jpg',
            'name': 'mango',
            'isReservable': true,
            'isLaunch': false
        }, {
            'img': 'https://www.spcosmeticsplus.com/wp-content/uploads/2018/02/banana-extract.jpg',
            'name': 'banana',
            'isReservable': false,
            'isLaunch': false
        }, {
            'img': 'https://f.btwcdn.com/store-34660/product/466d4abc-625b-1010-6822-58a2ec549146.jpg',
            'name': 'grape',
            'isReservable': false,
            'isLaunch': false
        }, {
            'img': 'https://cd.lnwfile.com/vkzco5.jpg',
            'name': 'papaya',
            'isReservable': false,
            'isLaunch': false
        }, {
            'img': 'https://lh3.googleusercontent.com/proxy/r2ndY41plr6o69rdRxqGUNjdBcK3Z3q54Cz6XK-WLTe_VhpvK4UXlhl_mIF2JlsQHwAue_VtMaRJ2wJqnQXu6Hj9SkPo7KvEllfA4Q',
            'name': 'orange',
            'isReservable': false,
            'isLaunch': false
        }
    ]
    
    return (
        <div >
            <div class="edit-store-title">Your products</div>
            <div class="container">
                <div class="row">
                    {items.map((item) => Item(item.img,item.name))}
                </div>
            </div>
        </div>
    );
};

export default EditStore;