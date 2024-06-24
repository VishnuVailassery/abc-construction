import React from 'react';
import PhotoWindow from './photowindow';

const photos = [
  { src: '/photo1.jpg', size: 'h-96' },
  { src: '/photo2.jpg', size: 'h-72' },
  { src: '/photo3.jpg', size: 'h-64' },
  { src: '/photo4.jpg', size: 'h-80' },
  { src: '/photo5.jpg', size: 'h-72' },
  { src: '/photo6.jpg', size: 'h-64' },
  { src: '/photo7.jpg', size: 'h-96' },
  { src: '/photo8.jpg', size: 'h-80' },
  { src: '/photo9.jpg', size: 'h-64' },
];

const Gallery = () => {
  // Ensure photos array length is a multiple of 3
  if (photos.length % 3 !== 0) {
    console.error("Number of photos must be a multiple of 3.");
    return null; // Exit early if not a multiple of 3
  }

  // Calculate number of rows
  const numRows = photos.length / 3;

  return (
    <section id="gallery" className="my-12 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(numRows)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex flex-col space-y-6">
              {[0, 1, 2].map((colIndex) => (
                <div
                  key={rowIndex * 3 + colIndex}
                  className={`relative overflow-hidden ${photos[rowIndex * 3 + colIndex].size}`}
                >
                  <img
                    src={photos[rowIndex * 3 + colIndex].src}
                    alt={`Gallery photo ${rowIndex * 3 + colIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="line-animation"></div> */}
    </section>

  );
};

export default Gallery;
