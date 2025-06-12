import React from "react";
import { type Room as RoomType } from "../../types";
import "./../../App.css";
import RoomFacility from "./RoomFacility";

interface RoomInfoProps {
  room: RoomType;
}

function RoomInfo({ room }: RoomInfoProps) {
  return (
    <>
      <h2 className="room-title">{room.title}</h2>
      <div className="description">
        {room.description.map((sentence, index) => (
          <p key={index}>{sentence}.</p>
        ))}
      </div>
      {room.comment && <p className="comment">{room.comment}</p>}

      {room.facilities && (
        <RoomFacility facilities={room.facilities} roomId={room.id} />
      )}

      {room.rooms && (
        <div className="rooms">
          <h3>חדרים:</h3>
          {room.rooms.map(
            (roomItem: { name: string; value: string }, index: number) => (
              <div key={`${room.id}-room-${index}`} className="room-item">
                <strong>{roomItem.name}:</strong> {roomItem.value}
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}

export default RoomInfo;
