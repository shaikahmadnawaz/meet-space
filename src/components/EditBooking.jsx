import { useState } from "react";

const EditBooking = ({ bookings, user, onUpdateBooking, onCancelBooking }) => {
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle the edit action
  const handleEdit = (bookingId) => {
    const selectedBooking = bookings.find(
      (booking) => booking.id === bookingId
    );
    setSelectedBookingId(bookingId);
    setNewStartTime(selectedBooking.start_time);
    setNewEndTime(selectedBooking.end_time);
    setIsEditing(true);
  };

  // Function to handle the update action
  const handleUpdate = () => {
    if (newStartTime && newEndTime) {
      onUpdateBooking(selectedBookingId, newStartTime, newEndTime);
      setIsEditing(false);
    }
  };

  // Function to handle the cancel action
  const handleCancel = (bookingId) => {
    onCancelBooking(bookingId);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Edit or Cancel Bookings</h2>
      {bookings.map((booking) => (
        <div key={booking.id} className="mb-4">
          <p className="text-gray-600">
            {booking.room_name} ({booking.start_time} - {booking.end_time})
          </p>
          {user.id === booking.user_id && (
            <div className="mt-2">
              {isEditing && selectedBookingId === booking.id ? (
                <>
                  <input
                    type="time"
                    className="w-32 py-2 px-3 border rounded-md"
                    value={newStartTime}
                    onChange={(e) => setNewStartTime(e.target.value)}
                  />
                  <span className="mx-2">to</span>
                  <input
                    type="time"
                    className="w-32 py-2 px-3 border rounded-md"
                    value={newEndTime}
                    onChange={(e) => setNewEndTime(e.target.value)}
                  />
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                  <button
                    className="text-red-600 py-2 px-4 ml-2"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-md"
                    onClick={() => handleEdit(booking.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 py-2 px-4 ml-2"
                    onClick={() => handleCancel(booking.id)}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditBooking;
