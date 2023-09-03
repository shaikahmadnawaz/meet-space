import { useState } from "react";
import AvailableRooms from "./components/AvailableRooms";
import BookRoom from "./components/BookRoom";
import ViewBookings from "./components/ViewBookings";
import EditBooking from "./components/EditBooking";

function App() {
  // Sample data for available rooms and bookings
  const [rooms] = useState([
    { id: 1, name: "Room A" },
    { id: 2, name: "Room B" },
  ]);

  const [bookings, setBookings] = useState([
    {
      id: 1,
      room_id: 1,
      user_id: 1,
      start_time: "2023-09-01T09:00:00",
      end_time: "2023-09-01T09:30:00",
      room_name: "Room A",
    },
    {
      id: 2,
      room_id: 2,
      user_id: 2,
      start_time: "2023-09-01T10:30:00",
      end_time: "2023-09-01T11:00:00",
      room_name: "Room B",
    },
    // Add more bookings as needed
  ]);

  // Function to update a booking
  const onUpdateBooking = (bookingId, newStartTime, newEndTime) => {
    // Find the booking by ID
    const updatedBookings = bookings.map((booking) => {
      if (booking.id === bookingId) {
        return {
          ...booking,
          start_time: newStartTime,
          end_time: newEndTime,
        };
      }
      return booking;
    });

    // Update the state with the modified bookings
    setBookings(updatedBookings);
  };

  // Function to cancel a booking
  const onCancelBooking = (bookingId) => {
    // Filter out the canceled booking
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== bookingId
    );

    // Update the state with the remaining bookings
    setBookings(updatedBookings);
  };

  return (
    <div className="App">
      <h1>Meeting Room Booking System</h1>
      <AvailableRooms rooms={rooms} bookings={bookings} />
      <BookRoom rooms={rooms} bookings={bookings} />
      <ViewBookings bookings={bookings} user={{ id: 1 }} />
      <EditBooking
        bookings={bookings}
        user={{ id: 1 }}
        onUpdateBooking={onUpdateBooking}
        onCancelBooking={onCancelBooking}
      />
    </div>
  );
}

export default App;
