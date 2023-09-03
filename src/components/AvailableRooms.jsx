const AvailableRooms = ({ rooms, bookings, selectedTime }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Available Meeting Rooms</h2>
      <ul>
        {rooms.map((room) => {
          const isAvailable = !bookings.some((booking) => {
            return (
              booking.room_id === room.id &&
              ((selectedTime >= booking.start_time &&
                selectedTime < booking.end_time) ||
                (selectedTime > booking.start_time &&
                  selectedTime <= booking.end_time))
            );
          });

          return (
            <li
              key={room.id}
              className={`flex items-center justify-between p-3 border-b ${
                isAvailable ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <span className="font-semibold">{room.name}</span>
              <span
                className={`text-sm ${
                  isAvailable ? "text-green-500" : "text-red-500"
                }`}
              >
                {isAvailable ? "Available" : "Booked"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AvailableRooms;
