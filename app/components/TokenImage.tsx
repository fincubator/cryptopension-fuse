// TokenImages.tsx
'use client';
import React, { useState } from 'react';
import styles from './TokenImage.module.css'; // Adjust the import path as necessary

interface TokenImagesProps {
  onKasaClick: () => void;
}

const TokenImages: React.FC<{ onKasaClick: (imageSrc: string) => void }> = ({ onKasaClick }) => {
  const [visibleImages, setVisibleImages] = useState<{ [key: number]: boolean }>({});

  const handleMouseOver = (index: number) => {
    setVisibleImages(prevVisibleImages => ({
      ...prevVisibleImages,
      [index]: true,
    }));
  };

  // Assuming you have 12 images named tok1.png to tok12.png in the public folder
  const tokenImageSources = Array.from({ length: 12 }, (_, index) => `/tok${index + 1}.png`);
  // Specify the logo images for the 1st and 12th tokens
  const kasaImageSource1 = `/kasa1.png`;
  const kasaImageSource12 = `/kasa3.png`;

  return (
    <div className={styles.container}>
      {tokenImageSources.map((src, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img
            src={src}
            alt={`Token ${index + 1}`}
            className={`${styles.tokenImage} ${visibleImages[index] ? styles.visible : ''}`}
            onMouseOver={() => handleMouseOver(index)}
          />
          {visibleImages[index] && (index === 0 || index === 11) && (
            <div className={styles.overlay} onClick={() => onKasaClick(index === 0 ? kasaImageSource1 : kasaImageSource12)}>
              <img src={index === 0 ? kasaImageSource1 : kasaImageSource12} alt={`Kasa ${index + 1}`} className={styles.kasaImage}/>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TokenImages;
