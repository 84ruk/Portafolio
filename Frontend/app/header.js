'use client'
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white p-4 flex justify-between items-center max-w-5xl mx-auto">
      <Link href="/">
        <span className="text-2xl font-bold text-gray-800"></span>
      </Link>

      {/* Menú hamburguesa para pantallas pequeñas */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menú de navegación */}
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex items-center space-x-4 mt-4 md:mt-0 max-w-5xl`}
      >
        <Link href="#sobremi">
          <span className="text-gray-600 hover:text-blue-600">Sobre mi</span>
        </Link>
        <Link href="#portafolio">
          <span className="text-gray-600 hover:text-blue-600">Portafolio</span>
        </Link>
        <Link href="#contacto">
          <span className="text-gray-600 hover:text-blue-600">Contacto</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;