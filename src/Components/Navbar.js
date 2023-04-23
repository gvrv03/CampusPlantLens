import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "campusplantlens/Context/UserAuthContext";

const Navbar = () => {
  const router = useRouter();
  const { signWithGoogle, user, logOut } = useUserAuth();
  const [dropDown, setdropDown] = useState("hidden");
  const handleDrop = () => {
    if (dropDown === "hidden") {
      setdropDown("block");
    } else {
      setdropDown("hidden");
    }
  };
  return (
    <nav className="bg-white shadow-md border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap items-center px-5 justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <img
            src="https://www.gparvi.ac.in/images/arvi_logo.jpg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            Plant Lens
          </span>
        </Link>
        <div className="flex gap-2 md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>

            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  "
              placeholder="Search..."
            />
          </div>

          {!user && (
            <button
              onClick={async () => {
                const res = await signWithGoogle();
              }}
              className="bg-blue-600 flex gap-2 text-white font-semibold py-2 px-5 rounded-full"
            >
              <i class="bi bi-google"></i>
              <span>Google SignIn</span>
            </button>
          )}

          {user && (
            <div className="relative">
              <div
                onClick={handleDrop}
                className="cursor-pointer w-8 h-8 grid place-items-center p-1 rounded-full overflow-hidden border-2 border-gray-500"
              >
                <div>
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="rounded-full"
                  />
                </div>
              </div>

              <div
                className={`absolute ${dropDown} border mt-5 shadow-md p-5 right-0 w-72 bg-white `}
              >
                <div className="pb-2">
                  {" "}
                  hello !{" "}
                  <span className="text-blue-800 font-bold">
                    {user.displayName}
                  </span>
                </div>
                <hr />

                <div className="mt-2">
                  <button
                    onClick={logOut}
                    className="bg-blue-700 font-semibold text-white px-5 py-2 w-full "
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 "
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  "
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <Link
                href="/"
                className={` ${
                  router.pathname == "/" ? "text-blue-700" : "text-gray-700"
                } block py-2 pl-3 pr-4  rounded md:p-0 `}
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className={` ${
                  router.pathname == "/" ? "text-blue-700" : "text-gray-700"
                } block py-2 pl-3 pr-4  rounded md:p-0 `}
                aria-current="page"
              >
                Category
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className={` ${
                  router.pathname == "/" ? "text-blue-700" : "text-gray-700"
                } block py-2 pl-3 pr-4  rounded md:p-0 `}
                aria-current="page"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                href="/Admin/Dashboard"
                className={` ${
                  router.pathname == "/" ? "text-blue-700" : "text-gray-700"
                } block py-2 pl-3 pr-4  rounded md:p-0 `}
                aria-current="page"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
