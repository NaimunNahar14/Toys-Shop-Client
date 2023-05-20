import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToysUpdate = () => {
    const update = useLoaderData();
    const { _id, ToyPrice, quantity, bio } = update;
 

    const handleUpdated = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const bio = form.bio.value;
        const updateToys = {
            price,
            quantity,
            bio,
        }
        console.log(updateToys);

        fetch(`https://toys-shop-server.vercel.app/mytoys/${_id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateToys)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('deleted SuccessFully');
            }
        })

        



    }

    return (
        <div>
            <form onSubmit={handleUpdated}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' defaultValue={ToyPrice} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details Description</span>
                    </label>
                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs"  defaultValue={bio} name='bio' ></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="UPDATED TOYS" />
                </div>
            </form>

        </div>
    );
};

export default ToysUpdate;