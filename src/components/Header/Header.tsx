import React from "react"

import { Menu } from "@/components/Header/Menu/Menu"
import { HeaderLogo } from "@/components/Header/HeaderLogo"

export const Header: React.FC = () => {
  return (
    <div className='flex w-screen p-5 max-sm:flex-col max-md:flex-col max-sm:items-center'>
      <HeaderLogo />
      <Menu />
    </div>
  )
}
