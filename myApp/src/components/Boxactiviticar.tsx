import React, { useState, useEffect } from "react";


const BoxCar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Cycle through dots every 2 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Adjust "4" to the number of dots
    }, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="box-car">
      {/* Car Image */}
      <div className="image-container">
        <img
          src="/xetoyota.png" // Replace with the actual image path
          alt="Economy Car"
          className="car-image"
        />
        {/* Pagination Dots */}
        <div className="pagination-dots">
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Car Information */}
      <div className="car-info">
        <p>
          <strong>Type car :</strong>
          <span>Economy Car</span>
        </p>
        <p>
          <strong>Max power:</strong>
          <span>320HP</span>
        </p>
        <p>
          <strong>Speed :</strong>
          <span>187MPH</span>
        </p>
      </div>
    </div>
  );
};

export default BoxCar;

