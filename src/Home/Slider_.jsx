import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider_ = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: i === settings.currentSlide ? "#fff" : "rgba(255, 255, 255, 0.5)",
          transition: "background-color 0.3s ease",
        }}
      />
    ),
  };

  const sliderImageStyle = {
    width: "100%",
    height: "500px", 
    objectFit: "cover",
    borderRadius: "10px",
  };

  const slideContentStyle = {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px 20px",
    borderRadius: "5px",
    maxWidth: "80%",
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-4 relative">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <img
            src="https://i.ibb.co.com/J0j09xS/bunglow-01-1240x720.jpg"
            alt="CityScape - Modern Living"
            style={sliderImageStyle}
          />
          <div style={slideContentStyle}>
            <h2 className="text-2xl font-bold">CityScape - Modern Living</h2>
            <p className="text-sm">Experience the best of urban living.</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <img
            src="https://i.ibb.co.com/My7SSBVT/bedroom-02-1240x720.jpg"
            alt="RiverView Homes"
            style={sliderImageStyle}
          />
          <div style={slideContentStyle}>
            <h2 className="text-2xl font-bold">RiverView Homes</h2>
            <p className="text-sm">Serene living by the river.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <img
            src="https://i.ibb.co.com/GymKCBT/exterior-05-1240x720.jpg"
            alt="Urban Heights"
            style={sliderImageStyle}
          />
          <div style={slideContentStyle}>
            <h2 className="text-2xl font-bold">Urban Heights</h2>
            <p className="text-sm">Luxury apartments in the heart of the city.</p>
          </div>
        </div>

        {/* Slide 4 */}
        <div>
          <img
            src="https://i.ibb.co.com/tP45YDBg/living-00-1240x720.jpg"
            alt="Hillside Villas"
            style={sliderImageStyle}
          />
          <div style={slideContentStyle}>
            <h2 className="text-2xl font-bold">Hillside Villas</h2>
            <p className="text-sm">Escape to the tranquility of the hills.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slider_;