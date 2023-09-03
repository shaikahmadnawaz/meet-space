const ViewBookings = ({ bookings, user }) => {
  // Filter bookings for the current user
  const userBookings = bookings.filter(
    (booking) => booking.user_id === user.id
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
      {userBookings.length === 0 ? (
        <p className="text-gray-600">You have no bookings at the moment.</p>
      ) : (
        <ul>
          {userBookings.map((booking) => (
            <li key={booking.id} className="mb-2">
              <span className="font-medium">{booking.room_name}</span>
              <span className="ml-2 text-gray-600">
                ({booking.start_time} - {booking.end_time})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewBookings;
