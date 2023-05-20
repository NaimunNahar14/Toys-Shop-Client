
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (     
        <div className="hero min-h-screen mb-5 mx-auto" style={{ backgroundImage: `url("https://i.ibb.co/kD5t0Cr/pexels-photo-168866.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to our Toys Shop Website!</h1>
                    <p className="mb-5">we believe in the magic of imagination and the joy that animals bring to children's lives. Our website is a paradise for animal lovers, where you can find a wide range of enchanting and captivating animal toys that will spark creativity and endless adventures.</p>
                    <div data-aos="fade-up" data-aos-duration="1000">TOY'S SHOP </div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>          
        </div>
    
    );
};

export default Home;