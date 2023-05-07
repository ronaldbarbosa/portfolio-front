import React from "react"

import { Menu } from "@/components/Header/Menu/Menu"
import { HeaderLogo } from "@/components/Header/HeaderLogo"

export const Header: React.FC = () => {
  return (
    <div className='flex p-5 text-white max-sm:flex-col max-sm:items-center'>
      <HeaderLogo />
      <Menu />
    </div>
  )
}
