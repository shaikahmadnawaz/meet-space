import React, { useState } from "react";

const EditBooking = ({ bookings, user, onUpdateBooking, onCancelBooking }) => {
  const userBookings = bookings.filter(
    (booking) => booking.user_id === user.id
  );

  const [selectedBooking, setSelectedBooking] = useState("");
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");

  const handleUpdateBooking = () => {
    // Validation: Check for conflicts and empty fields
    if (!newStartTime || !newEndTime || newStartTime >= newEndTime) {
      // Handle validation error
      return;
    }

    // Update the booking using the onUpdateBooking function
    onUpdateBooking(selectedBooking, newStartTime, newEndTime);

    // Clear form fields
    setSelectedBooking("");
    setNewStartTime("");
    setNewEndTime("");
  };

  const handleCancelBooking = () => {
    // Cancel the booking using the onCancelBooking function
    onCancelBooking(selectedBooking);

    // Clear form fields
    setSelectedBooking("");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Edit or Cancel Booking</h2>
      {userBookings.length === 0 ? (
        <p className="text-gray-500">You have no bookings to edit or cancel.</p>
      ) : (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select a Booking:
            </label>
            <select
              className="block w-full p-2 border rounded-md"
              value={selectedBooking}
              onChange={(e) => setSelectedBooking(e.target.value)}
            >
              <option value="">Select a booking</option>
              {userBookings.map((booking) => (
                <option key={booking.id} value={booking.id}>
                  {new Date(booking.start_time).toLocaleString()} to{" "}
                  {new Date(booking.end_time).toLocaleString()} -{" "}
                  {booking.room_name}
                </option>
              ))}
            </select>
          </div>
          {selectedBooking && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Modify Booking Time Slot:
              </label>
              <div className="flex space-x-2">
                <input
                  type="time"
                  className="flex-1 p-2 border rounded-md"
                  value={newStartTime}
                  onChange={(e) => setNewStartTime(e.target.value)}
                />
                <span className="flex-1 text-center">to</span>
                <input
                  type="time"
                  className="flex-1 p-2 border rounded-md"
                  value={newEndTime}
                  onChange={(e) => setNewEndTime(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleUpdateBooking}
              disabled={!selectedBooking}
            >
              Update Booking
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={handleCancelBooking}
              disabled={!selectedBooking}
            >
              Cancel Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBooking;
