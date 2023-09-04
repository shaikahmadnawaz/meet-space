const data = [
  {
    id: 1,
    desc: "Television set, Extra sheets and Breakfast",
    img: "./room1.png",
  },
  {
    id: 2,
    desc: "Television set, Extra sheets, Breakfast, and fireplace",
    img: "./room2.png",
  },
  {
    id: 3,
    desc: "Television set, Extra sheets, Breakfast, and fireplace",
    img: "./room3.png",
  },
];

const Rooms = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen md:h-[650px] w-full mx-auto py-10  px-2 lg:px-8"
      style={{
        backgroundImage: `url('/rooms-bg.png')`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75">
        <div className="mx-auto max-w-2xl lg:text-center pb-10">
          <h2 className="text-3xl font-medium leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Luxurious Rooms
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary lg:mx-auto">
            All room are design for your comfort
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 py-8">
          {data.map((datum) => (
            <div
              key={datum.id}
              className="w-[385px] h-[384px] flex items-center justify-center bg-white rounded-[10px] px-[28px]"
            >
              <div className="mx-auto flex flex-col items-center justify-center">
                <img
                  src={datum.img}
                  alt={datum.desc}
                  className="w-[330px] h-[285px]"
                />
                <p className="mt-2 text-sm text-black">{datum.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
