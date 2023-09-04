const facilitiesData = [
  { id: 1, name: "Wifi", icon: "./wifi.svg" },
  { id: 2, name: "24/7 Light", icon: "./light.svg" },
  { id: 3, name: "Breakfast", icon: "./breakfast.svg" },
  { id: 4, name: "Parking Space", icon: "./parking.svg" },
];

const Facilities = () => {
  return (
    <div className="mx-auto py-10 max-w-7xl px-2 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl">
          Our Facilities
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-black lg:mx-auto">
          We offer modern (5-star) room facilities for your comfort.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 py-8">
        {facilitiesData.map((facility) => (
          <div
            key={facility.id}
            className="w-[280px] h-[250px] flex items-center justify-center bg-secondary rounded-[5px]"
          >
            <div className="mx-auto flex flex-col items-center justify-center">
              <img
                src={facility.icon}
                alt={facility.name}
                width="57"
                height="40"
              />
              <p className="mt-2 text-sm text-[#494847]">{facility.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
