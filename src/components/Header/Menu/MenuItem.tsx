import React from 'react';

interface MenuItemProps {
  label: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return (
    <li className='mx-3 text-1xl max-sm:py-2'>
      <a href="" className=''>{ label }</a>
    </li>
  )
}
