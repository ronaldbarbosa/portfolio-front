import Link from 'next/link';
import React from 'react';

interface MenuItemProps {
  label: string,
  to: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, to }) => {
  return (
    <li className='mx-3 text-2xl max-sm:flex max-sm:w-full justify-center max-sm:p-2'>
      <Link href={to} className='hover:text-white transition duration-500'>{ label }</Link>
    </li>
  )
}
