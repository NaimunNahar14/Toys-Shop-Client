import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToys = () => {
    const toy = useLoaderData();
    const { _id, ToyName, ToyPhoto, ToyPrice, sellername, email, quantity, bio} = toy;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={ToyPhoto} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">ToyName: {ToyName}</h2>
                    <h2 className="card-title">SellerName: {sellername}</h2>
                    <h2 className="card-title">SellerEmail: {email}</h2>
                    <h2 className="card-title">ToyPrice: {ToyPrice}</h2>
                    <h2 className="card-title">Rating: 4.5</h2>
                    <h2 className="card-title">Available Quantity: {quantity}</h2>
                    <p>Detail Description: {bio}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleToys;