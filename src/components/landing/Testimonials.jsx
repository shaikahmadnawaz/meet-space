const data = [
  {
    id: 1,
    desc: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    date: "2 Mar. 2023",
    img: "./rating.svg",
    dp: "./t1.png",
    name: "Anthony Bruff",
  },
  {
    id: 2,
    desc: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    date: "26 Mar. 2023",
    img: "./rating.svg",
    dp: "./t2.png",
    name: "Regina Gella",
  },
  {
    id: 3,
    desc: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    date: "6 Apr. 2023",
    img: "./rating.svg",
    dp: "./t3.png",
    name: "Jamiyu Aliyu",
  },
];

const Testimonials = () => {
  return (
    <div className="relative bg-cover bg-center h-full w-full mx-auto py-10  px-2 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center py-8">
        <h2 className="text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl">
          Testimonies
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 py-8 px-24">
        {data.map((datum) => (
          <div
            key={datum.id}
            className="w-[420px] h-full flex flex-col items-center justify-center bg-secondary rounded-[10px] px-[28px]"
          >
            <div className="flex w-full items-center justify-between my-10">
              <p>{datum.date}</p>
              <img src={datum.img} alt="rating" />
            </div>
            <div className="mx-auto flex flex-col items-center justify-center">
              <p className="mt-2 text-sm text-black text-justify">
                {datum.desc}
              </p>
            </div>
            <div className="flex items-center w-full justify-start my-10">
              <img
                src={datum.dp}
                alt="dp"
                className="w-[42px] h-[42px] rounded-full"
              />
              <div className="ml-4">
                <p className="text-sm text-black">{datum.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
