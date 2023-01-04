"use client";

import Link from "next/link";
import { menu } from "./menu";
import { NavLink } from "./navlink";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export function NavBar() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex-none">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-4 font-semibold leading-6 lg:py-6 text-primary">
            <Link className="text-hover" href="/">
              <svg
                className="inline mb-1 stroke-current text-primary-500"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M12 4L4 8l8 4 8-4-8-4M4 12l8 4 8-4M4 16l8 4 8-4"></path>
              </svg>{" "}
              Creative Company
            </Link>
            <div className="flex items-center">
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 -my-1 text-primary md:hidden text-hover"
              >
                <span className="sr-only">Search</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
              </button>
              <div className="ml-2 -my-1 -mr-1 md:hidden">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="flex items-center justify-center w-8 h-8 text-primary text-hover"
                >
                  <span className="sr-only">Navigation</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="items-center hidden md:flex">
                <nav>
                  <ul className="flex items-center space-x-8">
                    {menu.map((item, index) => {
                      return (
                        <li key={`${index}`}>
                          <NavLink
                            href={item.path}
                            exact
                            className="text-hover"
                          >
                            {item.name}
                            {item.new ? (
                              <span className="ml-2 font-medium text-xs leading-5 rounded-full text-new px-2 py-0.5 ">
                                New
                              </span>
                            ) : null}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* background while modal is visible */}
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="fixed w-full max-w-xs p-6 text-base font-semibold bg-white rounded-lg shadow-lg top-2 right-2 text-primary dark:bg-slate-800 dark:highlight-white/5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute flex items-center justify-center w-8 h-8 top-2 right-2 text-primary text-hover"
                tabIndex={0}
              >
                <span className="sr-only">Close navigation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="space-y-6">
                {menu.map((item, index) => {
                  return (
                    <li key={`${index}`}>
                      <NavLink
                        href={item.path}
                        exact
                        className="text-hover"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        {item.new ? (
                          <span className="ml-2 font-medium text-xs leading-5 rounded-full px-2 py-0.5 text-new">
                            New
                          </span>
                        ) : null}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
