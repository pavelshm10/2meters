import React from "react";
import { type Room as RoomType } from "../../types";
import "./../../App.css";
import RoomGallery from "./RoomGallery";
import RoomInfo from "./RoomInfo";

interface RoomProps {
  selectedRoom: RoomType | null;
}

function Room({ selectedRoom }: RoomProps) {
  if (!selectedRoom) {
    return <div>בחר חדר להצגת פרטים</div>;
  }

  return (
    <div className="room-container" key={selectedRoom.id}>
      <div className="room-gallery-section">
        <RoomGallery images={selectedRoom.images} title={selectedRoom.title} />
      </div>
      <div className="room-info-section">
        <RoomInfo room={selectedRoom} />
      </div>
    </div>
  );
}

export default Room;
