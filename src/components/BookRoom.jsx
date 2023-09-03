import React, { useState } from "react";

const BookRoom = ({ rooms, bookings, onBookRoom }) => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isError, setIsError] = useState(false);

  const handleBookRoom = () => {
    // Validate the booking: Check for conflicts and empty fields
    if (!startTime || !endTime || startTime >= endTime) {
      setIsError(true);
      return;
    }

    const roomConflicts = bookings.some((booking) => {
      return (
        booking.room_id === selectedRoom &&
        ((startTime >= booking.start_time && startTime < booking.end_time) ||
          (endTime > booking.start_time && endTime <= booking.end_time))
      );
    });

    if (roomConflicts) {
      setIsError(true);
      return;
    }

    // If validation passes, call the onBookRoom function to book the room
    onBookRoom(selectedRoom, startTime, endTime);

    // Reset form fields and errors
    setSelectedRoom(rooms[0].id);
    setStartTime("");
    setEndTime("");
    setIsError(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Book a Meeting Room</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select a Room:
        </label>
        <select
          className="block w-full p-2 border rounded-md"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Booking Time Slot:
        </label>
        <div className="flex space-x-2">
          <input
            type="time"
            className="flex-1 p-2 border rounded-md"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <span className="flex-1 text-center">to</span>
          <input
            type="time"
            className="flex-1 p-2 border rounded-md"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        {isError && (
          <p className="text-red-600 text-sm mt-2">
            Please select a valid time slot and check for conflicts.
          </p>
        )}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleBookRoom}
      >
        Book Room
      </button>
    </div>
  );
};

export default BookRoom;
