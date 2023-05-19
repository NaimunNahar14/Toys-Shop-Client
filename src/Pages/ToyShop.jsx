import React from 'react';

const ToyShop = ({ toy }) => {
    const { ToyPhoto, ToyName, ToyPrice, bio } = toy;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-3 mb-5 mt-5'>
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={ToyPhoto}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">{ToyName}</h2>
                    <h2>{ToyPrice}</h2>
                    <p>{bio}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ToyShop;