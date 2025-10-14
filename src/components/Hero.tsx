import React from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import PrestamoSimulador from "@/components/Simulador"; // 👈 importamos el simulador

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0 pb-24 md:pb-0"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Entorno financiero profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Tu préstamo, <br />
              <span className="text-vitacred-secondary">fácil</span> y{" "}
              <span className="text-vitacred-secondary">online</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-vitacred-light font-light max-w-xl">
              Préstamos personales hasta $20.000.000 con cuotas fijas. 100%
              digital, sin intermediarios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="hero"
                className="min-w-[200px]"
                onClick={() =>
                  window.open(
                    "https://wa.me/5491169445419?text=Hola, quiero solicitar un préstamo.",
                    "_blank"
                  )
                }
              >
                Solicitar mi préstamo
              </Button>

              <Button
                variant="outline-primary"
                size="hero"
                className="min-w-[200px] border-white text-white hover:bg-white hover:text-vitacred-primary"
                onClick={() => {
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Simular crédito
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md lg:max-w-lg">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-vitacred-secondary mb-1">
                  100%
                </div>
                <div className="text-sm text-vitacred-light">Online</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-vitacred-secondary mb-1">
                  En el día
                </div>
                <div className="text-sm text-vitacred-light">Acreditación</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-vitacred-secondary mb-1">
                  60 días
                </div>
                <div className="text-sm text-vitacred-light">
                  Para empezar a pagar
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Simulador */}
          <div className="flex justify-center lg:justify-end">
            <PrestamoSimulador />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
