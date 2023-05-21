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
      <div className='flex font-mono w-1/3 max-sm:w-auto text-white'>
        <h1 className='flex text-3xl mx-2 font-bold p-3'>
          <span className='text-green'>ronald_barbosa@dev</span>:<span className='text-blue'>~</span>$ portfolio<span className={atribute}></span>
        </h1>
      </div>
    </>
  )
}
