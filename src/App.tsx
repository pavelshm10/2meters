import { useState, useCallback } from "react";
import RoomInfo from "./Components/RoomInfo";
import { rooms, type Room } from "./data";

function App() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(rooms[0]);

  const handleRoomSelect = useCallback((room: Room) => {
    setSelectedRoom(room);
  }, []);

  return (
    <div>
      <div>
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
      {selectedRoom && <RoomInfo selectedRoom={selectedRoom} />}
    </div>
  );
}

export default App;
