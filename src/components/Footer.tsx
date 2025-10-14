import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import vitacredIsotipo from "@/assets/Vitacred Isotipo Fondo Transparente (6).png";

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Créditos", href: "#creditos" },
    { name: "Organismos", href: "#organismos" },
    { name: "Contacto", href: "#contacto" },
  ];

  const legalLinks = [
    { name: "Términos y Condiciones", href: "terminos" },
    { name: "Política de Privacidad", href: "privacidad" },
    //{ name: "Defensa del Consumidor", href: "#" },
    //{ name: "Preguntas Frecuentes", href: "#" },
  ];

  const socialNetworks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61580861481350#" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/vitacred.ar/",
    },
  ];

  return (
    <footer className="bg-vitacred-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={vitacredIsotipo}
                alt="Vitacred"
                className="h-8 w-auto"
              />
            </div>

            <p className="text-vitacred-light text-sm leading-relaxed">
              Tu solución financiera al instante. Préstamos personales para
              empleados públicos con las mejores condiciones del mercado.
            </p>

            <div className="space-y-2 text-sm">
              <p className="text-vitacred-light">
                <strong className="text-white">Teléfono:</strong> +54 9 11 6944
                5419
              </p>
              <p className="text-vitacred-light">
                <strong className="text-white">Email:</strong>{" "}
                info@vitacred.com.ar
              </p>
              <p className="text-vitacred-light">
                <strong className="text-white">Horarios:</strong> Lun a Vie 9:00
                - 17:00hs
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-vitacred-light hover:text-vitacred-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-vitacred-light hover:text-vitacred-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Networks */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Seguinos</h4>

            <div className="flex space-x-3 mb-6">
              {socialNetworks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-vitacred-primary/20 p-2 rounded-lg hover:bg-vitacred-secondary hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            {/*
            <div className="space-y-2 text-sm">
              <p className="text-vitacred-light">
                <strong className="text-white">CUIT:</strong> 20-12345678-9
              </p>
              <p className="text-vitacred-light">
                <strong className="text-white">Habilitación:</strong> #12345
              </p>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="border-t border-vitacred-primary/20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-3">
            <p className="text-sm text-vitacred-light leading-relaxed max-w-4xl mx-auto">
              <strong className="text-white">Información importante:</strong>{" "}
              Préstamos personales para empleados dentro del Decreto 14/2012.
              Cuotas fijas en pesos. Sujeto a evaluación crediticia. Las tasas y
              condiciones pueden variar según el perfil del solicitante y el
              organismo de pertenencia.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-vitacred-light">
              <span>© 2025 Vitacred. Todos los derechos reservados.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
