import React from "react";

const AvailableRooms = ({ rooms, bookings }) => {
  // Function to check if a room is available at a given time slot
  const isRoomAvailable = (roomId, startTime, endTime) => {
    return !bookings.some((booking) => {
      return (
        booking.room_id === roomId &&
        ((startTime >= booking.start_time && startTime < booking.end_time) ||
          (endTime > booking.start_time && endTime <= booking.end_time))
      );
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Available Meeting Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li
            key={room.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span className="text-lg">{room.name}</span>
            <span
              className={`${
                isRoomAvailable(
                  room.id,
                  new Date(),
                  new Date().getTime() + 30 * 60 * 1000
                )
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {isRoomAvailable(
                room.id,
                new Date(),
                new Date().getTime() + 30 * 60 * 1000
              )
                ? "Available"
                : "Unavailable"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableRooms;
