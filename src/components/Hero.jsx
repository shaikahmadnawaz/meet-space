const Hero = () => {
  return (
    <div className="relative w-full bg-secondary">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <p className="mt-8 text-xl font-semibold text-primary">
            Paradise View
          </p>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Room for every moment rich in emotion
          </h1>
          <p className="mt-8 text-lg text-black">
            Every moment feels like the first time in paradise view
          </p>
          <div className="mt-8 flex items-start">
            <button
              type="button"
              className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="./hero.png"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
