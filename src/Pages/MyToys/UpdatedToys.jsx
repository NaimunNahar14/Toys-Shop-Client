import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdatedToys = ({ handleUpdate }) => {
    const update = useLoaderData();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const bio = form.bio.value;
        const updateToy = {
            ToyPrice: price,
            quantity,
            bio,
        }
        console.log(updateToy);
    }
    // console.log(update);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="text" name='quantity' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details Description</span>
                    </label>
                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" name='bio' ></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="ADD TOYS" />
                </div>
            </form>

        </div>
    );
};

export default UpdatedToys;