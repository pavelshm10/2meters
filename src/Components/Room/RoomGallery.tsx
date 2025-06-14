import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface RoomGalleryProps {
  images: string[];
  title: string;
}

function RoomGallery({ images, title }: RoomGalleryProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    adaptiveHeight: true,
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          margin: "0 4px",
        }}
      />
    ),
  };

  return (
    <Slider className="room-gallery" {...settings}>
      {images.map((image, index) => (
        <div key={index} className="room-slide">
          <img
            src={image}
            alt={`${title} - תמונה ${index + 1}`}
            loading="lazy"
          />
        </div>
      ))}
    </Slider>
  );
}

export default RoomGallery;
