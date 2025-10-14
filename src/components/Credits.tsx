import React from "react";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Calendar,
  Clock,
  Shield,
  Zap,
  CreditCard,
} from "lucide-react";

const Credits = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Hasta $20.000.000",
      description: "Préstamos de alto monto para cubrir todas tus necesidades",
      highlight: "$20M",
    },
    {
      icon: CreditCard,
      title: "Cuotas fijas",
      description: "Sin sorpresas. Siempre pagás el mismo monto",
      highlight: "Fijas",
    },
    {
      icon: Calendar,
      title: "6 a 26 meses",
      description: "Elegí el plazo que mejor se adapte a tu situación",
      highlight: "26 meses",
    },
    {
      icon: Shield,
      title: "100% online",
      description: "Todo el proceso desde tu casa, de forma segura",
      highlight: "100%",
    },
    {
      icon: Zap,
      title: "Acreditación en el día",
      description: "Recibí tu dinero en menos de 24 horas hábiles",
      highlight: "24hs",
    },
    {
      icon: Clock,
      title: "Pagás a los 60 días",
      description: "Dos meses de gracia para organizar tus finanzas",
      highlight: "60 días",
    },
  ];

  return (
    <section id="creditos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Créditos <span className="text-vitacred-primary">personales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diseñados especialmente para empleados públicos y de organismos
            habilitados. Las mejores condiciones del mercado, sin
            complicaciones.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card border border-vitacred-light/50 hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-vitacred-primary/10 p-3 rounded-lg group-hover:bg-vitacred-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-vitacred-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">
                        {advantage.title}
                      </h3>
                      <span className="text-xs font-bold text-vitacred-secondary bg-vitacred-secondary/10 px-2 py-1 rounded-full">
                        {advantage.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-card rounded-2xl p-8 shadow-elegant border border-vitacred-light">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para obtener tu préstamo?
            </h3>

            <p className="text-muted-foreground mb-6">
              Completá tu solicitud en menos de 5 minutos y recibí una respuesta
              inmediata. Sin papelerío, sin vueltas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => {
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Quiero mi crédito
              </Button>

              <Button
                variant="outline-primary"
                size="lg"
                onClick={() => {
                  document
                    .getElementById("inicio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Simular crédito
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-vitacred-light">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Requisitos mínimos:</span>{" "}
                Empleado público o de organismo habilitado, antigüedad mínima de
                6 meses, ingresos demostrables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credits;
