const Rooms = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[650px] w-full mx-auto py-10  px-2 lg:px-8"
      style={{
        backgroundImage: `url('/rooms-bg.png')`,
      }}
    >
      {/* Content Layer */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/75">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Luxurious Rooms
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary lg:mx-auto">
            All room are design for your comfort
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
