import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] text-center">
            
            <h1 className="text-9xl font-black text-[#1A3C34] opacity">404</h1>
            <h2 className="text-2xl font-bold text-[#1A3C34] mt-4">Page Not Found</h2>
            <p className="text-gray-500 my-6">The page you are looking for does not exist.</p>
            <Link to="/" className="bg-[#1A3C34] text-white px-8 py-3 rounded-xl font-bold transition-transform hover:scale-105">
               Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;