import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageCarousel = () => {
  const images = [];
  for (let i = 1; i <= 10; i++) {
    images.push(`erikogsara${i}.jpg`); // Adjust file extension if needed
  }

  // Set a fixed height for the carousel
  const carouselHeight = '600px';

  return (
    <Carousel style={{ height: carouselHeight, border: 'none' }}>
      {images.map((image, idx) => (
        <Carousel.Item
          key={idx}
          style={{ height: carouselHeight, borderRadius: '10px' }}
        >
          <img
            className="d-block w-100 h-100"
            src={`${process.env.PUBLIC_URL}/${image}`}
            alt={`Slide ${idx}`}
            style={{
              objectFit: 'contain', // or 'cover' if you prefer
              maxHeight: '100%',
              margin: 'auto',
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
