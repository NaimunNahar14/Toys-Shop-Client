import React from 'react';
import img from '../assets/oops-404-error-with-broken-robot-concept-illustration_114360-1932.avif';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
            <div >
                    <div className='text-center'>
                    <img className='w-full '  src={img} alt="" />
                            <h2>
                                <span>Error</span>
                                {status || 404}
                            </h2>
                            <p>
                                {error?.message}
                            </p>
                            <button className='btn btn-outline btn-error' onClick={()=>window.location.href = "/"}>Go back to homepage</button>
                    </div>
                </div>
       
    );
};

export default ErrorPage;