"use client";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const links = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  // { title: "Threat to American Housing", href: "/threat" },
  // { title: "Blog", href: "/threat" },
  { title: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 w-full z-50 bg-transparent ${
        mobileMenuOpen ? "bg-white" : "bg-transparent"
      }`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-mr-2 flex items-center">
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="bg-white relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {links.map((link) => (
                        <Link
                          key={link.title + "menu"}
                          href={link.href}
                          className="inline-flex items-center border-b-2 border-transparent  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-blue-300 hover:text-gray-700">
                          {link.title}
                        </Link>
                      ))}
                      <Menu.Item>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700">
                          Your Profile
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
            <div className=" pb-3 pt-2">
              {/* Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {links.map((link) => (
                <Disclosure.Button
                  key={link.title}
                  as="a"
                  href={link.href}
                  className=" bg-white  max-w-sm block py-2 pl-3 pr-4 text-base font-medium text-slate-700 hover:text-blue-600 hover:underline">
                  {link.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
