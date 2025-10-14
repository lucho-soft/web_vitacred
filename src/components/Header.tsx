import React from "react";
import { Button } from "@/components/ui/button";
import vitacredLogo from "@/assets/logo header.png";

const Header = () => {
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

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button
            variant="cta"
            size="default"
            onClick={() => {
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Simula tu préstamo
          </Button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-border">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
