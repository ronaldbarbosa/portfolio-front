import Link from 'next/link';
import React from 'react';

interface MenuItemProps {
  label: string,
  to: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, to }) => {
  return (
    <li className='mx-3 text-1xl max-sm:py-2'>
      <Link href={to} className='hover:text-white transition duration-500'>{ label }</Link>
    </li>
  )
}
