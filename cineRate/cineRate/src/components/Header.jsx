import React from 'react'
export const Header = () => {
  return (
<header className="
  fixed top-0 left-0 w-full z-50
  bg-[#3d3d43]/80 backdrop-blur-xl
  border-b border-white/10
">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
    {/* LOGO */}
    <span className="text-white text-2xl font-bold tracking-wide">
      <span className="text-[#8B5CF6]">Cine</span>Rate
    </span>

    {/* NAV */}
    <nav className="flex items-center gap-8 text-sm font-medium text-gray-300">
      <a href="#" className="hover:text-white transition-colors">Inicio</a>
      <a href="#" className="hover:text-white transition-colors">Explorar</a>
      <a href="#" className="hover:text-white transition-colors">Favoritas</a>
      <a href="#" className="hover:text-white transition-colors">Comparar</a>
    </nav>

    {/* BOTÓN */}
    <button className="
      bg-[#8B5CF6] hover:bg-[#7C3AED]
      text-white font-semibold text-sm px-4 py-2 rounded-full
      transition-all duration-200 shadow-[0_0_15px_rgba(139,92,246,0.4)]
    ">
      Iniciar Sesión
    </button>
  </div>
</header>


  )
}