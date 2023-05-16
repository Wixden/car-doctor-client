import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import image from "../../assets/images/services/4.jpg";
import Swal from "sweetalert2";
import BookingItem from "./BookingItem";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:3000/bookings?email=${user?.email}`;
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl container mx-auto">
      <div className="relative w-full rounded-xl">
        <img
          src={image}
          className="w-full object-cover object-center md:h-72 h-52 rounded-xl"
        />
        <div className="absolute w-full h-full top-0 flex items-center bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)] rounded-lg">
          <h2 className="text-4xl font-bold text-white ml-24">Order List</h2>
        </div>
        <div className="absolute w-[296px] bottom-0 md:left-[40%] left-[10%] bg-primaryOrange text-center transform rounded-t-md">
          <p className="text-lg text-white p-2 font-medium">Home/Bookings</p>
        </div>
      </div>
      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingItem
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
