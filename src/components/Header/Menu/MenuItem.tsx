import React from 'react';

interface MenuItemProps {
  label: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return (
    <li className='mx-3 text-1xl max-sm:py-2'>
      <a href="" className='hover:text-white transition duration-500'>{ label }</a>
    </li>
  )
}
