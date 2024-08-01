import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../assets/ErrorPage.png'; // Pastikan path ini sesuai dengan path gambar yang Anda gunakan

// Komponen ErrorPage
const ErrorPage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img 
        src={errorImage} 
        alt="404 Error" 
        className="w-1/2 max-w-sm mb-8" 
      />
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
        Go Back Home
      </Link>
    </section>
  );
}

export default ErrorPage;
