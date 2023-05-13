import React, { useRef, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Homepage = () => {
  const imageContainerRef = useRef(null);
  const imageContainerRef2 = useRef(null);
  const shadowRef = useRef(null);
  const shadowRef2 = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);


  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const shadow = shadowRef.current;

    const handleMouseMove = (e) => {
      if (isHovered) {
        const containerRect = imageContainer.getBoundingClientRect();
        const offsetX = (e.clientX - containerRect.left) / containerRect.width;
        const offsetY = (e.clientY - containerRect.top) / containerRect.height;
        const shadowX = -1 * (offsetX * 20 - 10);
        const shadowY = -1 * (offsetY * 20 - 10);

        shadow.style.transform = `translate(${shadowX}px, ${shadowY}px)`;
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      shadow.style.transform = 'none';
    };

    imageContainer.addEventListener('mousemove', handleMouseMove);
    imageContainer.addEventListener('mouseenter', handleMouseEnter);
    imageContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      imageContainer.removeEventListener('mousemove', handleMouseMove);
      imageContainer.removeEventListener('mouseenter', handleMouseEnter);
      imageContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  useEffect(() => {
    const imageContainer = imageContainerRef2.current;
    const shadow = shadowRef2.current;
  
    const handleMouseMove = (e) => {
      if (isHovered2) {
        const containerRect = imageContainer.getBoundingClientRect();
        const offsetX = (e.clientX - containerRect.left) / containerRect.width;
        const offsetY = (e.clientY - containerRect.top) / containerRect.height;
        const shadowX = -1 * (offsetX * 20 - 10);
        const shadowY = -1 * (offsetY * 20 - 10);
  
        shadow.style.transform = `translate(${shadowX}px, ${shadowY}px)`;
      }
    };
  
    const handleMouseEnter = () => {
      setIsHovered2(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered2(false);
      shadow.style.transform = 'none';
    };
  
    imageContainer.addEventListener('mousemove', handleMouseMove);
    imageContainer.addEventListener('mouseenter', handleMouseEnter);
    imageContainer.addEventListener('mouseleave', handleMouseLeave);
  
    return () => {
      imageContainer.removeEventListener('mousemove', handleMouseMove);
      imageContainer.removeEventListener('mouseenter', handleMouseEnter);
      imageContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered2]);

  


  return (
    <Container>
      <h1>Erik og Saras bryllup</h1>
      <h5 className='mt-3'>Vi gifter oss 1. juni 2024. Mer informasjon og invitasjon kommer.</h5>

      <h3 className='pt-5 pb-2'>Vigsel blir i Julebygda kirke kl. xx:xx</h3>
      <div ref={imageContainerRef} className="image-container">
        <img
          src="https://kagi.com/proxy/julebygda2.jpg?c=ggGFvKBjpQ9pdvrnO3yU7Byt2lzssOuV8Sky94ja3TgvBvBSRXLLFJkfC4vs6c-3w2HYSXmUzB1LnhrodYuqHJgvDqXjDYG_iHPXWUjsBjbCOz7mciivu86lnMe3VK4Y2e0vPth7V1bD17hum65IZw%3D%3D"
          alt="Julbygda kirke"
          style={{ maxWidth: "450px" }}
        />
        <div ref={shadowRef} className="shadow"></div>
      </div>

      <h3 className='pt-5 pb-2'>Fest blir på Løå på Lea kl. xx:xx</h3>
      <div ref={imageContainerRef2} className="image-container">
        <img
        src="https://kagi.com/proxy/th?c=3SgynE8ofVcfX71I7M3hS6GDC2_gG-mWxdmR1ay6nb9s746JyMFYno6YxwPUF7DD1clWVKe-cWQPHEwHctjoJAZoUh6DyIkRP0KL0kA6A6pvh-OxeGqZsbAUURqovCXK"
        alt="løå på lea"
          style={{ maxWidth: "450px" }}
        />
        <div ref={shadowRef2} className="shadow"></div>
      </div>
    
    
      <p className='pt-5'>Vi gleder oss til å feire dagen sammen med dere!</p>
    </Container>
  );
}

export default Homepage;
