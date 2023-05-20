import React from 'react';
import img1 from '../assets/pexels-photo-3661386.jpeg';
import img2 from '../assets/pexels-photo-3662845.jpeg';
import img3 from '../assets/pexels-photo-6129703.jpeg';
const ChildsZone = () => {
    return (
        <div className='mx-auto' data-aos="flip-down" data-aos-duration="1000">
            <h2 className='text-center text-3xl text-cyan-950'>Children Zone </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-3 mb-5 mt-5">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Soft Teddy</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Teddy</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Soft teddy and Car</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildsZone;