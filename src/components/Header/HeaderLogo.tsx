import React from 'react';

export const HeaderLogo: React.FC = () => {
  return (
    <>
      <div className='flex items-center font-mono w-1/3 max-sm:w-auto text-white'>
        <h1 className='text-2xl mx-2 font-bold'>
          <span className='text-green'>ronald_barbosa@dev</span>:<span className='text-blue'>~</span>$ portfolio
        </h1>
      </div>
    </>
  )
}
