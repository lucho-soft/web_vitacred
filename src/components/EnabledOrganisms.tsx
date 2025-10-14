import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, Users, Building, FileText, Award } from "lucide-react";

const EnabledOrganisms = () => {
  const organisms = [
    {
      icon: Shield,
      name: "Fuerzas Armadas",
      description: "Ejército, Armada y Fuerza Aérea Argentina",
      color: "text-vitacred-primary",
    },
    {
      icon: Users,
      name: "Fuerzas de Seguridad",
      description: "Policía Federal, Gendarmería, Prefectura y PSA",
      color: "text-vitacred-secondary",
    },
    {
      icon: Building,
      name: "GCBA",
      description: "Gobierno de la Ciudad de Buenos Aires",
      color: "text-vitacred-primary",
    },
    {
      icon: FileText,
      name: "ARCA",
      description: "Administración Federal de Ingresos Públicos",
      color: "text-vitacred-secondary",
    },
    {
      icon: Award,
      name: "Decreto 14/2012",
      description: "Otros organismos habilitados por decreto",
      color: "text-vitacred-primary",
    },
    {
      icon: Users, // podemos usar el mismo icono de Users o cambiarlo si quieres otro
      name: "Retirados",
      description: "Cobran por la caja de Policía Federal",
      color: "text-vitacred-secondary",
    },
  ];

  return (
    <section id="organismos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Organismos{" "}
            <span className="text-vitacred-primary">habilitados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabajás en alguno de estos organismos? Tenés acceso a nuestros
            préstamos con las mejores condiciones y tasas preferenciales.
          </p>
        </div>

        {/* Organisms Grid */}
        <div className="mb-12">
          {/* First row - 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {organisms.slice(0, 3).map((organism, index) => {
              const Icon = organism.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card border border-vitacred-light hover:shadow-elegant transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="text-center">
                    <div className="bg-vitacred-light/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vitacred-light/50 transition-colors">
                      <Icon className={`w-8 h-8 ${organism.color}`} />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {organism.name}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {organism.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second row - 3 cards now */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {organisms.slice(3).map((organism, index) => {
                const Icon = organism.icon;
                return (
                  <div
                    key={index + 3}
                    className="bg-card rounded-xl p-6 shadow-card border border-vitacred-light hover:shadow-elegant transition-all duration-300 group hover:scale-[1.02]"
                  >
                    <div className="text-center">
                      <div className="bg-vitacred-light/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vitacred-light/50 transition-colors">
                        <Icon className={`w-8 h-8 ${organism.color}`} />
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {organism.name}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {organism.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-vitacred-primary to-vitacred-accent rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿No encontrás tu organismo en la lista?
            </h3>

            <p className="text-vitacred-light mb-6 text-lg">
              No te preocupes. Hay muchos otros organismos habilitados bajo el
              Decreto 14/2012. Consultá con nuestros asesores para verificar tu
              elegibilidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-vitacred-primary hover:bg-vitacred-light"
                onClick={() => {
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hablar con un asesor
              </Button>

              <div className="flex items-center space-x-2 text-vitacred-light">
                <span className="text-sm">o llamanos al</span>
                <span className="font-semibold text-white">+54 9 11 6944 5419</span>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-12 bg-muted/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
            Requisitos generales
          </h4>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-vitacred-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-vitacred-primary font-bold">1</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ser empleado de organismo habilitado
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 bg-vitacred-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-vitacred-primary font-bold">2</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Antigüedad mínima de 6 meses
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 bg-vitacred-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-vitacred-primary font-bold">3</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Documentación personal completa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnabledOrganisms;
