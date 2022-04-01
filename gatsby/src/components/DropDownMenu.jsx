import React, {
  Fragment,
} from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';

export default function DropDownMenu({ current, pages }) {
  return (
    <Menu as="div" className="relative inline-block pt-1 text-left">
      <div>
        <Menu.Button className="inline-flex items-center justify-center w-full px-3 py-1 text-sm font-medium text-black rounded-md md:py-2 bg-amber-800 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {current}
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-black hover:text-slate-700"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg bg-stone-50 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            { Array.from({ length: pages }).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Menu.Item key={`page-${i}`}>
                <Link to={`/blog${i === 0 ? '' : `/${i + 1}`}`} className={` ${i + 1 === current ? 'bg-amber-300' : 'hover:bg-amber-400'} group flex rounded-md items-center w-full py-2 text-sm px-5 my-1`}>
                  {i + 1}
                </Link>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

  );
}
