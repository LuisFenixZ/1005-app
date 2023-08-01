import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './carousel_1005.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://www.1005burger.com.br/wp-content/uploads/2023/03/BannerSite_Prancheta-1.jpg" width="100%" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://www.1005burger.com.br/wp-content/uploads/2023/03/BannerSite-02.jpg" width="100%" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://www.1005burger.com.br/wp-content/uploads/2023/03/BannerSite-03.jpg" width="100%" onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <AliceCarousel 
    mouseTracking 
    items={items} 
    infinite
    autoPlay
    autoPlayInterval={3500}
    animationType='fadeout'
    disableButtonsControls
    innerWidth={0}
    autoHeight
    activeIndex={0}
    />
  );
}

const responsive = {
    0: { 
        items: 1
    },
    568: { 
        items: 2
    },
    1024: {
        items: 3, 
        itemsFit: 'contain'
    },
};

export default Gallery 