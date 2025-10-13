import React from 'react'

export const Header = () => {
  return (
    <header className='fixed top-0 w-full left-0 z-10 bg-[var(--bgSecondary)]'>
      <nav className='flex justify-between items-center p-4 gap-4'>
        <ul>
          <li>Logo</li>
        </ul>
        <ul className='flex gap-4'>
          <li>Favoritas</li>
          <li>Explorar</li>
          <li>Comparar</li>
          <li>Iniciar Sesion</li>
        </ul>
      </nav>
      </header>
  )
}
