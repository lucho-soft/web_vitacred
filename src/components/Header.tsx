import React, { useState } from "react";
import vitacredLogo from "@/assets/logo header.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Créditos", href: "#creditos" },
    { name: "Organismos habilitados", href: "#organismos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={vitacredLogo}
            alt="Vitacred - Solución financiera al instante"
            className="h-8 w-auto md:h-10"
          />
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-border"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              // Ícono de cerrar
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Ícono de menú
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-background border-t border-border shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium"
                  onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
