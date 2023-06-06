import React, { useState, useEffect } from 'react';
import '../Css/PicsumCarousel.css'; // Import the CSS file for styling

const PicsumCarousel = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setIsLoading(true);

    try {
      const urls = [];

      for (let i = 0; i < 3; i++) {
        const response = await fetch('https://picsum.photos/500/300');
        const url = response.url;
        urls.push(url);
      }

      setImageUrls(urls);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleImageClick = async (index) => {
    const newImageUrls = [...imageUrls];
      const response = await fetch('https://picsum.photos/500/300');
      const newImageUrl = response.url;
    if (index === 0) {
      newImageUrls[0] = imageUrls[1];
      newImageUrls[1] = imageUrls[2];
      newImageUrls[2] = newImageUrl
      setImageUrls(newImageUrls);
    } else if (index === 2) {
          newImageUrls[0] = newImageUrl;
          newImageUrls[1] = imageUrls[0];
          newImageUrls[2] = imageUrls[1];
          setImageUrls(newImageUrls);
        }
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="carousel">
          {activeIndex !== 0 && (
            <div
              className="carousel-control prev"
              onClick={() => handleImageClick(activeIndex - 1)}
            >
              &lt;
            </div>
          )}
          <div className="carousel-images">
            {imageUrls.map((imageUrl, index) => (
              <div
                key={index}
                className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <img src={imageUrl} alt="Picsum" />
              </div>
            ))}
          </div>
          {activeIndex !== imageUrls.length - 1 && (
            <div
              className="carousel-control next"
              onClick={() => handleImageClick(activeIndex + 1)}
            >
              &gt;
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PicsumCarousel;
