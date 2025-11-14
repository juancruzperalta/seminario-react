import React from 'react'
export const Footer = () => {
  return (
    <footer className="text-center text-gray-400 bg-[var(--bgSecondary)]  w-full max-w-[100vw] overflow-hidden h-[200px] flex items-center justify-between relative">
      <div className='grid grid-cols-3 w-full z-10'>
        <div className='flex flex-col justify-start  items-center'>
          <span className='text-xl mb-2 uppercase '>Información</span>
          <span className=''>Sobre nosotros</span>
          <span>Politica de privacidad</span>
          <span>Ayuda</span>
        </div>
        <div className='flex flex-col justify-start  items-center'>
                    <span className='text-xl mb-2 uppercase'>Navegación</span>
          <span>Home</span>
          <span>Populars Series</span>
          <span>Premiere Series</span>
          <span>Top Ten Series</span>
        </div>
        <div className='flex flex-col justify-start  items-center'>
                    <span className='text-xl mb-2 uppercase'>Cine Rate</span>
          <span>@CopyRight CineRate</span>
          <span>@Github</span>
          <span>@API propia</span>
        </div>
      </div>
    </footer>
  )
}
