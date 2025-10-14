import React from 'react';
import { CheckCircle } from 'lucide-react';
import aboutUsTeam from '@/assets/about-us-team.jpg';

const AboutUs = () => {
  const benefits = [
    'Sin intermediarios, trato directo',
    'Proceso 100% digital y seguro',
    'Respuesta inmediata',
    'Cuotas fijas en pesos',
    'Acreditación en el día',
    'Atención personalizada'
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={aboutUsTeam} 
                alt="Equipo profesional de Vitacred"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vitacred-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-elegant border border-vitacred-light">
              <div className="text-center">
                <div className="text-3xl font-bold text-vitacred-primary mb-1">15+</div>
                <div className="text-sm text-vitacred-dark">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Con vos,{' '}
                <span className="text-vitacred-primary">sin intermediarios</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                En Vitacred entendemos que necesitás soluciones financieras rápidas y confiables. 
                Por eso, desarrollamos una plataforma que conecta directamente con vos, eliminando 
                las trabas burocráticas y los tiempos de espera innecesarios.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Somos especialistas en préstamos para empleados públicos y de organismos habilitados 
                bajo el Decreto 14/2012, garantizando las mejores condiciones del mercado.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                ¿Por qué elegir Vitacred?
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-vitacred-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-vitacred-light">
              <div className="text-center">
                <div className="text-2xl font-bold text-vitacred-primary mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-vitacred-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Aprobación</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-vitacred-primary mb-1">24hs</div>
                <div className="text-sm text-muted-foreground">Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;