import { useState, useCallback } from "react";
import Room from "./Components/Room/Room";
import { rooms } from "./data";
import type { Room as RoomType } from "./types";
import Header from "./Components/Header";
import "./App.css";

function App() {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(rooms[0]);

  const handleRoomSelect = useCallback((room: RoomType) => {
    setSelectedRoom(room);
  }, []);

  return (
    <div className="app-container">
      <div className="title-container">
        <h1 className="title">החדרים שלנו</h1>
      </div>
      <Header />
      <div className="map-container">
        <img
          src="src/assets/images/map.jpg"
          alt="room-header"
          className="map-image"
        />
      </div>
      <div className="rooms-header">
        {rooms.map((room) => (
          <button
            key={room.id}
            onClick={() => handleRoomSelect(room)}
            style={{
              backgroundColor:
                selectedRoom?.id === room.id ? "#FAF7F1" : "#EEE7DA",
              border:
                selectedRoom?.id === room.id ? "1px solid #2b3a41" : undefined,
            }}
          >
            {room.title}
          </button>
        ))}
      </div>
      {selectedRoom && <Room selectedRoom={selectedRoom} />}
    </div>
  );
}

export default App;
