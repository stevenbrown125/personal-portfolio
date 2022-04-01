import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];
const navigationLeft = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
];

const navigationRight = [
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 z-40 w-full min-w-full shadow-lg bg-stone-50">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col w-4/5 max-w-xs pb-12 overflow-y-auto shadow-xl bg-stone-50">
              <div className="relative flex items-center justify-between px-4 pt-4 pb-3">
                <Link to="/">
                  <button onClick={() => setMobileMenuOpen(false)} type="button">
                    <StaticImage
                      className="block h-auto mx-2 w-44"
                      src="../images/logo.png"
                      alt="Steven Brown Full Stack Web Developer Logo"
                    />
                  </button>
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 -m-2 text-black rounded-md hover:text-primary focus:outline-none "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </button>

              </div>

              {/* Links */}
              <div className="px-4 py-4 space-y-4 border-t border-primary-dark">
                {navigation.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link to={page.href}>
                      <button onClick={() => setMobileMenuOpen(false)} type="button" className="block px-2 text-lg font-medium text-warm-gray-700 hover:text-primary">
                        {page.name}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="">
        <nav aria-label="Top" className="">
          <div className="z-10 bg-stone-50">
            <div className="">
              <div className="justify-center mx-auto xl:max-w-7xl lg:px-4 md:flex">
                <div className="flex items-center justify-between p-2 ">

                  <div className="relative hidden md:flex">
                    <div className="px-4">
                      {navigationLeft.map((item) => (
                        <Link key={item.name} to={item.href} className="px-8 text-lg font-medium lg:px-16 text-stone-700 xl:text-2xl hover:text-primary">
                          {item.name}
                        </Link>
                      ))}

                    </div>
                  </div>
                  {/* Logo (lg+) */}
                  <div className="hidden md:flex lg:items-center">
                    <Link to="/">
                      <span className="sr-only">Steven Develops</span>
                      <StaticImage
                        className="flex-shrink-0 block w-56 h-auto mx-2"
                        src="../images/logo.png"
                        alt="Steven Brown Full Stack Web Developer Logo"
                      />
                    </Link>
                  </div>
                  <div className="relative hidden pl-4 md:flex justify-items-stretch">
                    <div className="px-4">
                      {navigationRight.map((item) => (
                        <Link key={item.name} to={item.href} className="px-8 text-lg font-medium lg:px-16 text-stone-700 xl:text-2xl hover:text-primary">
                          {item.name}
                        </Link>
                      ))}

                    </div>
                  </div>
                  {/* Mobile menu and search (lg-) */}
                  <div className="flex items-center flex-1 ml-4 md:hidden">
                    <button
                      type="button"
                      className="p-2 -ml-2 text-black rounded-md "
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <div className="flex justify-center w-full">
                    <Link to="/">
                      <button type="button" className="mt-1 -ml-12 md:hidden">
                        <span className="sr-only">Steven Develops</span>
                        <StaticImage
                          className="flex-shrink-0 block w-40 h-auto mx-2"
                          src="../images/logo.png"
                          alt="Steven Brown Full Stack Web Developer Logo"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
