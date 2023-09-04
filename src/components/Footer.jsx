const Footer = () => {
  return (
    <footer className="py-10 text-white bg-[#040816]">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <span className="ml-4 text-3xl font-bold">MeetSpace</span>
              </div>
              <div>
                <p className="mb-4  text-base font-medium">
                  The service at the Rooms was exceptional. There was absolutely
                  no issue that was not addressed timely and with satisfactory
                  results. We were particulary impressed with how the hotel
                  staff anticipated our needs (periodically coming by the Board
                  Room to check with us)
                </p>
                <p className="text-sm">
                  &copy; Copyright 2022. All Rights Reserved by MeetSpace.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase">
                Quick links
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium  " href="#">
                    Room booking
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium  " href="#">
                    Rooms
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium  " href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium  " href="#">
                    Explore
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium  " href="#">
                    Refund policy
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium  " href="#">
                    F.A.Q
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium  " href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">
                Social media
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium  " href="#">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium  " href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium  mb-4" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium  " href="#">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
