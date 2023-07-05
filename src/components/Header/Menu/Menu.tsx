import React, { useState } from 'react';
import { MenuItem } from './MenuItem';

import  { SlArrowDown } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

export const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='flex w-2/3 max-md:w-full max-sm:w-full max-md:justify-center justify-end items-center max-sm:pt-3 max-sm:flex-col'>
      <ul className='flex max-sm:hidden items-center text-grey'>
        <MenuItem label="Home" to="/"/>
        <MenuItem label="Projects" to="/projects"/>
        <MenuItem label="Contact" to="/contact"/>
      </ul>
      <button className="hidden max-sm:flex w-full justify-center text-3xl text-green" onClick={ () => setOpen(!open) }>
        { open == true ? <RxCross2 /> :  <SlArrowDown /> }
      </button>
      <br></br>
      {
        open ? (
          <ul className='flex text-grey flex-col w-full mt-3 items-center'>
            <MenuItem label="Home" to="/"/>
            <MenuItem label="Projects" to="/projects"/>
            <MenuItem label="Contact" to="/contact"/>
          </ul>
        ) : null
      }
    </nav>
  )
}
