import { useState } from "react";

const BookRoom = ({ rooms, onBookRoom }) => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);
  const [selectedTime, setSelectedTime] = useState("");
  const [isBookingSuccessful, setBookingSuccessful] = useState(false);

  // Function to handle room selection
  const handleRoomChange = (event) => {
    setSelectedRoom(parseInt(event.target.value, 10));
  };

  // Function to handle time slot selection
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Function to handle the booking action
  const handleBookRoom = () => {
    if (selectedTime && selectedRoom) {
      // Check if the selected time slot is available
      const isAvailable = !bookings.some((booking) => {
        return (
          booking.room_id === selectedRoom &&
          ((selectedTime >= booking.start_time &&
            selectedTime < booking.end_time) ||
            (selectedTime > booking.start_time &&
              selectedTime <= booking.end_time))
        );
      });

      if (isAvailable) {
        // Trigger the booking action
        onBookRoom(selectedRoom, selectedTime);
        setBookingSuccessful(true);
      } else {
        setBookingSuccessful(false);
      }
    }
  };

  return (
    <div className="mx-auto py-10 max-w-md px-4">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Book a Meeting Room
        </h2>
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Select a Room:</label>
        <select
          className="w-full p-2 border rounded-md"
          onChange={handleRoomChange}
          value={selectedRoom}
        >
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-600">
          Select a Time Slot:
        </label>
        <select
          className="w-full p-2 border rounded-md"
          onChange={handleTimeChange}
          value={selectedTime}
        >
          <option value="">Select a time slot</option>
          {/* Generate time slots in increments of 30 minutes */}
          {Array.from({ length: 48 }).map((_, index) => {
            const hour = Math.floor(index / 2);
            const minute = index % 2 === 0 ? "00" : "30";
            const time = `${hour}:${minute}`;
            return (
              <option key={time} value={time}>
                {time}
              </option>
            );
          })}
        </select>
      </div>
      <button
        className="bg-primary text-white py-2 px-4 mt-3 rounded-md hover:bg-primary-dark"
        onClick={handleBookRoom}
      >
        Book Room
      </button>
      {isBookingSuccessful ? (
        <p className="mt-2 text-green-600">Booking successful!</p>
      ) : (
        <p className="mt-2 text-red-600">
          This time slot is already booked. Please choose another time.
        </p>
      )}
    </div>
  );
};

export default BookRoom;
