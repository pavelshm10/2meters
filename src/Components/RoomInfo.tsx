import React from "react";
import { type Room } from "../types";
import "../App.css";
import RoomGallery from "./RoomGallery";
import RoomFacility from "./RoomFacility";

interface RoomInfoProps {
  selectedRoom: Room | null;
}

function RoomInfo({ selectedRoom }: RoomInfoProps) {
  if (!selectedRoom) {
    return <div>בחר חדר להצגת פרטים</div>;
  }

  return (
    <div className="room-info" key={selectedRoom.id}>
      <RoomGallery images={selectedRoom.images} title={selectedRoom.title} />

      <h2>{selectedRoom.title}</h2>
      <p>{selectedRoom.description}</p>
      {selectedRoom.comment && (
        <p className="comment">{selectedRoom.comment}</p>
      )}

      <RoomFacility
        facilities={selectedRoom.facilities}
        roomId={selectedRoom.id}
      />

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
