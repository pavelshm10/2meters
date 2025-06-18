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
        <p
          dangerouslySetInnerHTML={{
            __html: room.description.replace(/\n/g, "<br />"),
          }}
        />
      </div>
      {room.comment && <p className="comment">{room.comment}</p>}

      {room.facilities && (
        <RoomFacility facilities={room.facilities} roomId={room.id} />
      )}

      {room.rooms && (
        <div className="rooms">
          <hr />
          {room.rooms.map(
            (roomItem: { name: string; value: string }, index: number) => (
              <div key={`${room.id}-room-${index}`} className="room-item">
                <span>חדר&nbsp;{roomItem.name}:</span>
                <div className="facility-item">
                  <img
                    src="src/assets/icons/single_beds.svg"
                    alt="single_beds"
                    className="facility-icon"
                    loading="lazy"
                  />
                </div>
                {roomItem.value}
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}

export default RoomInfo;
