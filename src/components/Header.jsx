
export const Header = () => {

  return (
    <header
      className="relative top-0 w-full z-10 transition-all duration-300 2xl:max-w-[96vw] xl:max-w-[1200px]   lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[600px] max-w-[400px] "
>
  <div className="w-full flex items-center justify-between mx-0 py-4">
    {/* LOGO */}
    <span className="text-2xl font-bold tracking-wide">
      <span className="text-[var(--colorAccent)]">Cine</span>
      <span className="text-white">Rate</span>
    </span>

    {/* NAV */}
    <nav className="flex items-center gap-8 text-[1rem] font-medium">
      <a
        href="#"
        className="hover:bg-[#141621]
          rounded-lg px-3 py-2 transition-colors
        "
      >
        Inicio
      </a>
      <a
        href="#"
        className="
          hover:text-[#d1d1d1] hover:bg-[#141621]
          rounded-lg px-3 py-2 transition-colors
        "
      >
        Explorar
      </a>
      <a
        href="#"
        className="
          hover:text-[#d1d1d1]  hover:bg-[#141621]
          rounded-lg px-3 py-2 transition-colors
        "
      >
        Favoritas
      </a>
      <a
        href="#"
        className="
          hover:text-[#d1d1d1] hover:bg-[#141621]
          rounded-lg px-3 py-2 transition-colors
        "
      >
        Comparar
      </a>
    </nav>

    {/* BOTÓN */}
    <button
      className="
        bg-[var(--colorAccent)]
        text-[#0B0F19] font-semibold text-[1rem] px-5 py-2 rounded-full
        transition-all duration-500 hover:scale-[1.01] hover:bg-[var(--colorHover)] cursor-pointer
      "
    >
      Iniciar
    </button>
  </div>
</header>

  )
}