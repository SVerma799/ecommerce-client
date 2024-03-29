import React, { useState } from "react";
import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import cn from "classnames";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-white dark:bg-gray-950 border-b-2 border-gray-700 mb-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ">
        <Link href="/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ecommerce
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-950 md:dark:bg-gray-950 dark:border-gray-790">
            <li>
              <Link
                href="/"
                className={cn({
                  "block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white md:hover:text-indigo-700 ":
                    true,
                  "sm:text-indigo-500 md:hover:text-white":
                    activeItem === "home",
                })}
                aria-current="page"
                onClick={() => handleClick("home")}
              >
                Home
              </Link>
            </li>

            {/* Products */}
            <li>
              <Link
                href="/products"
                className={cn({
                  "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white  md:hover:text-indigo-700":
                    true,
                  "sm:text-indigo-500 md:hover:text-white":
                    activeItem === "products",
                })}
                onClick={() => handleClick("products")}
              >
                Products
              </Link>
            </li>
            {/* Categories */}
            <li>
              <a
                href="/categories"
                className={cn({
                  "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 dark:text-white  md:hover:text-indigo-700":
                    true,
                  "sm:text-indigo-500 md:hover:text-white":
                    activeItem === "categories",
                })}
                onClick={() => handleClick("categories")}
              >
                Categories
              </a>
            </li>
            {/* Login */}
            {/* If not logged in Create a sign In Link element which refs to the the auth the SignIn */}
            <li>
              <Link
                href="/auth/signin"
                className={cn({
                  "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 dark:text-white  md:hover:text-indigo-700":
                    true,
                  "sm:text-indigo-500 md:hover:text-white":
                    activeItem === "login",
                })}
                onClick={() => handleClick("login")}
              >
                Sign In
              </Link>
            </li>

            {/*  If Logged in use the user profile picture with dropdown on Sign out and Profile option */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <li>
<Link
  href="#"
  id="dropdownNavbarLink"
  data-dropdown-toggle="dropdownNavbar"
  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-indigo-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
>
  <BiUserCircle className="h-7 w-7" />
</Link>
{/* To  be used as a drop down item. */
}
{
  /* <div
  id="dropdownNavbar"
  className={cn({
    "z-1000000 absolute mt-5  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-900 dark:divide-gray-600":
      true,
    hidden: !isOpen,
  })}
>
  <ul
    className="py-2 text-sm text-gray-700 dark:text-gray-400"
    aria-labelledby="dropdownLargeButton"
  >
    <li>
      <Link
        href="auth/signin"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white"
      >
        SignIn
      </Link>
    </li>
  </ul>
</div> 
</li>

</div>  */
}
