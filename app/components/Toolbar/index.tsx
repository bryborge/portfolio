'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '../Icons/HomeIcon';
import Socials from '../Socials';
import Clock from './Clock';
import TerminalIcon from '../Icons/TerminalIcon';
import BlogIcon from '../Icons/BlogIcon';

const Toolbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Closes the menu on new navigations.
   *
   * @return {void}
   */
  useEffect(() => {
    setIsOpen(false); 
  }, [pathname]);

  /**
   * Toggles the menu open/closed state.
   *
   * @return {void}
   */
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-200 text-slate-800 h-14 w-auto flex flex-row justify-between items-center absolute sticky top-0 z-50">
      <div className="flex flex-row items-center ml-4">
        <button className="flex flex-col justify-center items-center font-bold text-slate-800 hover:bg-slate-300 px-3 py-4 rounded" type="button" onClick={handleClick}>
          <span className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
          <span className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
          <span className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} ></span>
        </button>
        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute top-16 bg-slate-200 min-w-48 rounded`} onBlur={handleClick}>
          <ol className="text-lg font-sans p-2" onClick={handleClick}>
            <Link href="/">
              <li className="px-4 flex flex-row items-center hover:bg-slate-300">
                <HomeIcon /><span className="ml-2">Home</span>
              </li>
            </Link>
            <Link href="/terminal" onClick={handleClick}>
              <li className="px-4 flex flex-row items-center hover:bg-slate-300">
                <TerminalIcon /><span className="ml-2">Terminal</span>
              </li>
            </Link>
            <Link href="/blog" onClick={handleClick}>
              <li className="px-4 flex flex-row items-center hover:bg-slate-300">
                <BlogIcon /><span className="ml-1">Blog</span>
              </li>
            </Link>
          </ol>
        </div>
      </div>
      <div></div>
      <div className="flex flex-row">
        <div className="mr-4 mt-1">
          <Socials />
        </div>
        <Clock />
      </div>
    </nav>
  );
}

export default Toolbar;
