import React from "react";
import Link from "next/link";
// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-start lg:w-auto lg:static lg:block lg:justify-start">
            <i className=" text-orange-500  fa-coins text-4xl leading-lg mr-2 mt-4" />{" "}
            <Link href="/">
              <a
                className="text-blueGray-700 text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#home"
              >
                CCS
              </a>
            </Link>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 text-xs uppercase font-bold">
                Track the movement of cryptocurrencies
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
