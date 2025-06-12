import { useState, useCallback } from "react";
import Room from "./Components/Room/Room";
import { rooms } from "./data";
import type { Room as RoomType } from "./types";
import Header from "./Components/Header";

function App() {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(rooms[0]);

  const handleRoomSelect = useCallback((room: RoomType) => {
    setSelectedRoom(room);
  }, []);

  return (
    <div className="layout">
      <h1 className="title">החדרים שלנו</h1>
      <Header />
      <div className="rooms-header">
        {rooms.map((room) => (
          <button
            key={room.id}
            onClick={() => handleRoomSelect(room)}
            style={{
              backgroundColor:
                selectedRoom?.id === room.id ? "#646cff" : undefined,
              color: selectedRoom?.id === room.id ? "white" : undefined,
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
