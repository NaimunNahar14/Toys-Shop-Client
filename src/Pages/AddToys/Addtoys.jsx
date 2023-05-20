import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Addtoys = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const sellername = form.sellername.value;
        const email = form.email.value;
        const select = form.select.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const bio = form.bio.value;
        const addToy = {
            ToyPhoto: photo,
            ToyName: name,
            sellername,
            email,
            select,
            ToyPrice: price,
            Rating: rating,
            quantity,
            bio,
        }
        console.log(addToy);

        fetch('https://toys-shop-server.vercel.app/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Toy added successfully')
                }
            })



    }

    return (
        <div>
            <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URLof Toys</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">SELLER NAME</span>
                        </label>
                        <input type="text" name="sellername" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">seller email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                </div>
                <select className="select select-info w-full max-w-xs mt-4" name='select' >
                    <option disabled selected>Select Toys</option>
                    <option>Teddy bear</option>
                    <option>Angry Bird</option>
                    <option>Unicorn</option>
                </select>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name='rating'  className="input input-bordered" />
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
            <div className="card-body">

            </div>
        </div>
    );

};

export default Addtoys;