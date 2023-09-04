const AvailableRooms = ({ rooms, bookings, selectedTime }) => {
  return (
    <div className="mx-auto py-10 max-w-7xl px-2 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl">
          Available Meeting Rooms
        </h2>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 py-8">
          {rooms.map((room) => {
            let isAvailable = true;

            for (const booking of bookings) {
              const bookingStartTime = new Date(booking.start_time).getTime();
              const bookingEndTime = new Date(booking.end_time).getTime();
              const selectedTimeMillis = new Date(selectedTime).getTime();

              if (
                booking.room_id === room.id &&
                selectedTimeMillis >= bookingStartTime &&
                selectedTimeMillis < bookingEndTime
              ) {
                isAvailable = false;
                break;
              }
            }
            return (
              <div
                key={room.id}
                className={`flex items-center justify-between p-3 border-b ${
                  isAvailable ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <div className="mx-auto flex flex-col items-center justify-center">
                  <img
                    src={room.img}
                    alt={isAvailable}
                    className="w-[330px] h-[285px]"
                  />
                  <span className="font-semibold">{room.name}</span>
                  <span
                    className={`text-sm ${
                      isAvailable ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {isAvailable ? "Available" : "Booked"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AvailableRooms;
