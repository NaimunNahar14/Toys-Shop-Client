import React from 'react';
import img1 from '../assets/disinfect-stuffed-animal-1-fcfc1cceeb5649728a9e876ba16cd87c.jpg';

const ToysClean = () => {
    return (
        <div data-aos="flip-right" data-aos-duration="1000">
            <h2 className='text-center text-3xl text-cyan-950'>Why clean Animals toys</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>

                        <p className="py-6">
                            Clean animals-based toys are toys that represent domesticated or commonly kept animals. They can be made of different materials and come in various forms such as plush animals, figurines, or interactive toys. These toys provide comfort, companionship, and can be used for imaginative play and educational purposes. They help children learn about animals, develop nurturing skills, and engage in role-playing activities.</p>
                        <h2>Thank you</h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ToysClean;