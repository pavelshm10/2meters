import React, { useState } from "react";
import { type Room } from "../types";
import "../App.css";

interface RoomInfoProps {
  selectedRoom: Room | null;
}

function RoomInfo({ selectedRoom }: RoomInfoProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!selectedRoom) {
    return <div>בחר חדר להצגת פרטים</div>;
  }

  //   const getIconUrl = (iconName: string) => {
  //     const iconPath = `../assets/icons/${iconName}`;
  //     return icons[iconPath] || "";
  //   };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedRoom.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedRoom.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="room-info" key={selectedRoom.id}>
      <div className="room-images">
        <div className="image-gallery">
          <button
            className="gallery-nav prev"
            onClick={prevImage}
            aria-label="תמונה קודמת"
          >
            ‹
          </button>
          <div className="image-container">
            <img
              src={selectedRoom.images[currentImageIndex]}
              alt={`${selectedRoom.title} - תמונה ${currentImageIndex + 1}`}
              loading="lazy"
            />
          </div>
          <button
            className="gallery-nav next"
            onClick={nextImage}
            aria-label="תמונה הבאה"
          >
            ›
          </button>
          <div className="image-dots">
            {selectedRoom.images.map((_: string, index: number) => (
              <button
                key={index}
                className={`dot ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`עבור לתמונה ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <h2>{selectedRoom.title}</h2>
      <p>{selectedRoom.description}</p>
      {selectedRoom.comment && (
        <p className="comment">{selectedRoom.comment}</p>
      )}

      <div className="facilities">
        <h3>מתקנים:</h3>
        <div className="facilities-grid">
          {selectedRoom.facilities.map((facility, index: number) => (
            <div
              key={`${selectedRoom.id}-facility-${index}`}
              className="facility-item"
            >
              <img
                src={facility.icon}
                alt={facility.value}
                className="facility-icon"
                loading="lazy"
              />
              <span>{facility.value}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedRoom.rooms && (
        <div className="rooms">
          <h3>חדרים:</h3>
          {selectedRoom.rooms.map(
            (room: { name: string; value: string }, index: number) => (
              <div
                key={`${selectedRoom.id}-room-${index}`}
                className="room-item"
              >
                <strong>{room.name}:</strong> {room.value}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default RoomInfo;
