import { Menu, X, ArrowDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Rooms",
    submenu: [
      {
        name: "Available",
        href: "/available",
      },
      {
        name: "Book",
        href: "/book",
      },
    ],
  },
  {
    name: "About",
    href: "#",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [submenuStates, setSubmenuStates] = useState(
    menuItems.map(() => false)
  );

  const toggleSubmenu = (index) => {
    const newSubmenuStates = [...submenuStates];
    newSubmenuStates[index] = !newSubmenuStates[index];
    setSubmenuStates(newSubmenuStates);
  };

  return (
    <nav className="w-full">
      <header className="relative w-full bg-secondary">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
          <div className="inline-flex items-center space-x-2">
            <span className="font-bold md:text-xl">MeetSpace</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  {item.submenu ? (
                    <div
                      onClick={() => toggleSubmenu(index)}
                      className="relative group cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-black flex items-center">
                        {item.name}{" "}
                        <ArrowDown
                          className={`h-4 w-4 ml-1 transition-transform transform ${
                            submenuStates[index] ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                      {submenuStates[index] && (
                        <ul className="absolute z-50 left-0 mt-2 space-y-2 bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg">
                          {item.submenu.map((submenuItem) => (
                            <li key={submenuItem.name}>
                              <Link
                                to={submenuItem.href}
                                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 text-center"
                              >
                                {submenuItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-secondary shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span className="font-bold">MeetSpace</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-gray-100  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
