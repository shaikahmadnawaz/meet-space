import React from "react";

const ViewBookings = ({ bookings, user }) => {
  const userBookings = bookings.filter(
    (booking) => booking.user_id === user.id
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
      {userBookings.length === 0 ? (
        <p className="text-gray-500">You have no bookings.</p>
      ) : (
        <ul>
          {userBookings.map((booking) => (
            <li key={booking.id} className="mb-2">
              <strong>{booking.room_name}</strong> -{" "}
              {new Date(booking.start_time).toLocaleString()} to{" "}
              {new Date(booking.end_time).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewBookings;
