import React from 'react'
import { HiHome } from 'react-icons/hi'
import { Link } from 'react-router-dom';

function SideNav() {
  const navItems = [
    {
      path: "/",
      name: "Home",
      icon: <HiHome />,
    },
    {
      path: "/",
      name: "Home",
      icon: <HiHome />,
    },
    {
      path: "/",
      name: "Home",
      icon: <HiHome />,
    },
  ];
  return (
    <div className='bg-white flex flex-col space-y-4 rounded p-4'>
      {navItems.map((item, index) => (
        <Link key={index} to={item.path} className='flex items-center justify-center space-x-2'>
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default SideNav