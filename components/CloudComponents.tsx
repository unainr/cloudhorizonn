'use client';
import React from 'react';

const CloudComponents = () => {
  // Replace with your Cloudinary cloud name
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  // Replace with the Unsplash image URL you want to use
  const externalUrl = encodeURIComponent(
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  );

  // Construct the Cloudinary fetch URL
  const fetchUrl = `https://res.cloudinary.com/${cloudName}/image/fetch/w_960,h_600,c_fill/${externalUrl}`;

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">
        Cloudinary Image Fetch & Transformations
      </h1>

      {/* Original Image */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Original Image</h2>
      <img
        src={fetchUrl}
        alt="Umbrellas Hanging from a Ceiling"
        className="w-full max-w-3xl rounded-lg shadow-md"
      />
    </div>
  );
};

export default CloudComponents;
