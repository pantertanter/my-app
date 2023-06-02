import React, { useState, useEffect } from 'react';
import '../Css/RndImgR.css';

const RandomImageRow = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await Promise.all([
          fetch('https://picsum.photos/1500/1000'),
          fetch('https://picsum.photos/1500/1000'),
          fetch('https://picsum.photos/1500/1000')
        ]);

        const imagePromises = response.map(res => res.blob());
        const blobs = await Promise.all(imagePromises);

        const data = blobs.map((blob, index) => ({
          id: index,
          url: URL.createObjectURL(blob)
        }));

        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();

    const interval = setInterval(fetchImages, 5000); // Fetch new images every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="image-row">
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={`${image.id}`} />
      ))}
    </div>
  );
};

export default RandomImageRow;