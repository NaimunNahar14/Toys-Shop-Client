import React from 'react';
import img1 from '../assets/istockphoto-1017309510-612x612.jpg';
import img2 from '../assets/images (16).jpg';
import img3 from '../assets/istockphoto-687165852-612x612.jpg';

const Gallery = () => {
    return (
        <div className='mx-auto' data-aos="flip-right" data-aos-duration="1000">
            <h2 className='text-center text-3xl text-cyan-950'>GALLERY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-3 mb-5 mt-5">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1}alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Soft Teddy</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2}alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Teddy</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3}alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Soft teddy and Car</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;