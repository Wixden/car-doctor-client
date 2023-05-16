const BookingItem = ({ booking, handleDelete }) => {
  const { _id, price, service_image, service_title, bookingDate } = booking;

  return (
    <tr>
      <th>
        <button
          className="btn btn-circle btn-sm"
          onClick={() => handleDelete(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-32 rounded">
              <img src={service_image} />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-xl">{service_title}</h2>
            <p className="text-sm opacity-50">{"Color: Green"}</p>
            <p className="text-sm opacity-50">{"Size: S"}</p>
          </div>
        </div>
      </td>
      <td className="font-semibold text-lg">${price ? price : "20.20"}</td>
      <td>{bookingDate}</td>
      <th>
        <button className="btn btn-ghost btn-xs">status</button>
      </th>
    </tr>
  );
};

export default BookingItem;
