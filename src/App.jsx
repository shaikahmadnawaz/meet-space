import { useState } from "react";
import AvailableRooms from "./components/AvailableRooms";
import bookingsData from "./data/bookings.json";
import BookRoom from "./components/BookRoom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // Sample data for available rooms
  const [rooms] = useState(bookingsData.rooms);

  // Sample data for bookings
  const [bookings, setBookings] = useState(bookingsData.bookings);

  // Function to handle room booking
  const handleBookRoom = (room_id, start_time) => {
    // Implement the booking action here and update the bookings state
    const newBooking = {
      id: bookings.length + 1,
      room_id,
      user_id: 1, // You can set the user ID as needed
      start_time: `2023-09-01T${start_time}:00`,
      end_time: `2023-09-01T${
        start_time === "23:30" ? "00:00" : start_time.slice(0, 2)
      }:${start_time === "23:30" ? "30" : "00"}:00`,
      room_name: rooms.find((room) => room.id === room_id)?.name || "",
    };

    setBookings([...bookings, newBooking]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/available"
          element={<AvailableRooms rooms={rooms} bookings={bookings} />}
        />
        <Route
          path="/book"
          element={
            <BookRoom
              rooms={rooms}
              bookings={bookings}
              onBookRoom={handleBookRoom}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
