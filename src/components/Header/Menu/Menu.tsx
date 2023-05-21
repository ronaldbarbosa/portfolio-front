import React from 'react';
import { MenuItem } from './MenuItem';

export const Menu: React.FC = () => {
  return (
    <nav className='flex w-2/3 justify-end items-center max-sm:w-auto max-sm:pt-3'>
      <ul className='flex max-sm:flex-col max-sm: items-center text-grey'>
        <MenuItem label="Home" to="/"/>
        <MenuItem label="Back-end skills" to=""/>
        <MenuItem label="Front-end skills" to=""/>
        <MenuItem label="Portfolio" to="projects"/>
        <MenuItem label="Contact" to=""/>
      </ul>
    </nav>
  )
}
