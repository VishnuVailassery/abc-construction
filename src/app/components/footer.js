import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400" />
          </a>
        </div>
        <p className="text-sm">Developed by Spojen</p>
      </div>
    </footer>
  );
};

export default Footer;
