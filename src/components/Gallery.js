// src/components/Gallery.js
import React, { useState } from 'react';
import './Gallery.css'; // We'll create this file for styles

import Img1 from '../imgs/1.jpg';
import Img2 from '../imgs/2.jpeg';
import Img3 from '../imgs/3.jpg';
import Img4 from '../imgs/4.jpg';
import Img5 from '../imgs/5.jpg';
import Img6 from '../imgs/6.jpg';


const Gallery = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, ];
  
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const openModal = (imgSrc) => {
    setCurrentImg(imgSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImg('');
  };

  return (
    <div>
      <div className="gallery">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(img)}>
            <img src={img} alt={`Gallery ${index + 1}`} className="gallery-img"/>
          </div>
        ))}
      </div>
      
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={currentImg} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
