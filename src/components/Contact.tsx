import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Número de destino en formato internacional (sin espacios ni guiones)
    const phoneNumber = "+5491169445419";

    // Mensaje que se enviará
    const message = `Hola, me gustaría consultar sobre un préstamo. Mis datos son:
    
   Nombre: ${formData.name}
   Teléfono: ${formData.phone}
   Email: ${formData.email}
   Comentarios: ${formData.comments || "Sin comentarios"}`;

    // Arma la URL de WhatsApp con el mensaje
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Abre WhatsApp en una nueva pestaña
    window.open(url, "_blank");
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+5491169445419",
      action: "Escribinos",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "1169445419",
      action: "Llamanos",
      color: "text-vitacred-primary",
      bgColor: "bg-vitacred-primary/10",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@vitacred.com.ar",
      action: "Escribinos",
      color: "text-vitacred-secondary",
      bgColor: "bg-vitacred-secondary/10",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hablemos de tu{" "}
            <span className="text-vitacred-primary">préstamo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nuestros asesores están listos para ayudarte. Elegí el canal que más
            te convenga o completá el formulario para que nos contactemos con
            vos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contactate ahora
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;

                // acción según el método
                const handleAction = () => {
                  if (method.title === "WhatsApp") {
                    window.open(
                      `https://wa.me/5491169445419?text=Hola, quiero más información sobre un préstamo.`,
                      "_blank"
                    );
                  }
                  if (method.title === "Teléfono") {
                    window.location.href = `tel:${method.value}`;
                  }
                  if (method.title === "Email") {
                    window.location.href = `mailto:${method.value}`;
                  }
                };

                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-card border border-vitacred-light hover:shadow-elegant transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`${method.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform`}
                        >
                          <Icon className={`w-6 h-6 ${method.color}`} />
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground">
                            {method.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {method.value}
                          </p>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleAction}
                        className="group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Office Info */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-vitacred-light">
              <div className="flex items-start space-x-4">
                <div className="bg-vitacred-light/30 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-vitacred-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Oficina Central
                  </h4>
                  <p className="text-muted-foreground mb-1">
                    Sarmiento 348, CABA
                  </p>
                  <p className="text-muted-foreground mb-1">Oficina 23</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Horarios:</strong> Lun a Vie 9:00 - 17:00hs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-elegant border border-vitacred-light">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Dejanos tus datos
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Comentarios</Label>
                <Textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Contanos sobre tu consulta, monto necesario, plazo preferido, etc."
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                Enviar consulta
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Al enviar este formulario, aceptás nuestros términos y
                condiciones. Nos contactaremos contigo en las próximas 24 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
