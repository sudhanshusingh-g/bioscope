import React from 'react'
import Logo from './Logo'
import { HiMenuAlt1 } from "react-icons/hi";
function Header() {
  return (
    <header>
      <nav className='flex justify-between cursor-pointer'>
        <Logo />

        <div className='flex items-center justify-center space-x-2'>
          <HiMenuAlt1 />
          <div>
            User
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header