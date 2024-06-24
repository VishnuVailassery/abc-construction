import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="relative w-full h-96">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="object-cover w-full h-full"
        />
      </div>
      <button className="absolute top-0 left-0 mt-20 ml-4 p-2 bg-gray-800 text-white rounded-md" onClick={prevSlide}>
        Prev
      </button>
      <button className="absolute top-0 right-0 mt-20 mr-4 p-2 bg-gray-800 text-white rounded-md" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
