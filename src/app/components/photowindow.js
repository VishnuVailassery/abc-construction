import React from 'react';
import "../styles.css"
const images = [
    { default: '/photo1.jpg', hover: '/services.jpg' },
    { default: '/photo2.jpg', hover: '/services2.jpg' },
    { default: '/photo3.jpg', hover: '/services3.jpg' },
    { default: '/photo4.jpg', hover: '/services4.jpg' },
];

const PhotoWindow = () => {
    return (
        <div className="photo-window">
          {images.map((image, index) => (
            <div
              key={index}
              className="photo-piece"
              style={{ backgroundImage: `url(${image.default})` }}
            >
              <div
                className="photo-piece-hover"
                style={{ backgroundImage: `url(${image.hover})` }}
              ></div>
            </div>
          ))}
        </div>
    );
};

export default PhotoWindow;
