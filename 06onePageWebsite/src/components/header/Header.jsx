import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">

      <nav className="bg-[#0b0b0f] border-b border-[#27272f] px-4 lg:px-6 py-2.5">

        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">

          {/* LOGO */}
          <Link to="/" className="flex items-center">

      <img
  src="/logo.png"
  className="mr-3 h-30"
  alt="Logo"
/>

          </Link>


          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center lg:order-2">

            <Link
              to="#"
              className="text-[#d4d4d8] hover:text-white hover:bg-[#13131a] focus:ring-4 focus:ring-[#8b5cf6]/30 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-300"
            >
              Log in
            </Link>


            <Link
              to="#"
              className="text-white bg-[#8b5cf6] hover:bg-[#7c3aed] focus:ring-4 focus:ring-[#8b5cf6]/30 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-300"
            >
              Get started
            </Link>

          </div>


          {/* NAVIGATION */}
          <div
            className="flex justify-between items-center w-full lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >

            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">


              {/* HOME */}
              <li>

                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-[#27272f] ${
                      isActive
                        ? "text-[#8b5cf6]"
                        : "text-[#a1a1aa] hover:text-white"
                    } lg:hover:bg-transparent lg:border-0 lg:p-0`
                  }
                >
                  Home
                </NavLink>

              </li>


              {/* ABOUT */}
              <li>

                <NavLink
                  to="/about/"
                  end
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-[#27272f] ${
                      isActive
                        ? "text-[#8b5cf6]"
                        : "text-[#a1a1aa] hover:text-white"
                    } lg:hover:bg-transparent lg:border-0 lg:p-0`
                  }
                >
                  About
                </NavLink>

              </li>


              {/* CONTACT */}
              <li>

                <NavLink
                  to="/contacts/"
                  end
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-[#27272f] ${
                      isActive
                        ? "text-[#8b5cf6]"
                        : "text-[#a1a1aa] hover:text-white"
                    } lg:hover:bg-transparent lg:border-0 lg:p-0`
                  }
                >
                  Contact
                </NavLink>

              </li>


              {/* GITHUB */}
              <li>

                <NavLink
                  to="/github/"
                  end
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-[#27272f] ${
                      isActive
                        ? "text-[#8b5cf6]"
                        : "text-[#a1a1aa] hover:text-white"
                    } lg:hover:bg-transparent lg:border-0 lg:p-0`
                  }
                >
                  GitHub
                </NavLink>

              </li>


              {/* USER */}
              <li>

                <NavLink
                  to="/user/"
                  end
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-[#27272f] ${
                      isActive
                        ? "text-[#8b5cf6]"
                        : "text-[#a1a1aa] hover:text-white"
                    } lg:hover:bg-transparent lg:border-0 lg:p-0`
                  }
                >
                  User
                </NavLink>

              </li>

            </ul>

          </div>

        </div>

      </nav>

    </header>
  );
}