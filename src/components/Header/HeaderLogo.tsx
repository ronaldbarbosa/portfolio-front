import React, { useEffect, useState } from 'react';

export const HeaderLogo = () => {
  const [atribute, setAtribute] = useState('bg-white w-2 text-white');

  useEffect(() => {
    const interval = setTimeout(() => {
      if (atribute == 'bg-white w-2 text-white') setAtribute('bg-black w-2 text-black');
      else setAtribute('bg-white w-2 text-white');
    }, 1000);
  });

  return (
    <>
      <div className='flex font-mono min-w-fit max-sm:w-screen max-md:w-screen max-sm:justify-center max-md:justify-center text-white'>
        <h1 className='flex text-3xl max-sm:text-base max-md:text-2xl max-lg:text-xl font-bold mx-2 max-sm:mx-0 p-3'>
          <span className='text-green'>ronald_barbosa@dev</span>:<span className='text-blue'>~</span>$ portfolio<span className={atribute}></span>
        </h1>
      </div>
    </>
  )
}
