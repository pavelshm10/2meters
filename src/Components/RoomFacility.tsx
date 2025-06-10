import React from "react";
import { type Room } from "../types";

interface RoomFacilityProps {
  facilities: Room["facilities"];
  roomId: string | number;
}

function RoomFacility({ facilities, roomId }: RoomFacilityProps) {
  return (
    <div className="facilities">
      <h3>מתקנים:</h3>
      <div className="facilities-grid">
        {facilities.map((facility, index: number) => (
          <div key={`${roomId}-facility-${index}`} className="facility-item">
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
  );
}

export default RoomFacility;
