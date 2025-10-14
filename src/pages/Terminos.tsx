import React from "react";
import { useNavigate } from "react-router-dom";
import vitacredLogo from "@/assets/vitacred-logo.png"; // 👉 cambia la ruta según tu proyecto
import { Button } from "@/components/ui/button"; // si usás shadcn/ui

const TerminosYCondiciones: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      {/* Header con logo y botón volver */}
      <div className="flex items-center justify-between mb-8">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="px-4 py-2 rounded-lg"
        >
          ← Volver al inicio
        </Button>
        <img src={vitacredLogo} alt="Vitacred Logo" className="h-12 object-contain" />
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">Términos y Condiciones</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Introducción. Principios Básicos</h2>
      <p className="mb-4">
        El acceso a este Sitio y la utilización de sus servicios está sujeto a los
        presentes Términos y Condiciones. Usted debe leer, entender y aceptar todas
        las políticas aquí establecidas como condición para acceder al Sitio y
        utilizar los servicios que ofrece.
      </p>
      <p className="mb-4">
        Cualquier persona que desee acceder al Sitio y/o utilizar sus servicios
        ("el Usuario") podrá hacerlo sujetándose a estos Términos y Condiciones. Se
        considerará que el Usuario los acepta en caso de realizar cualquier operación
        en el Sitio.
      </p>
      <p className="mb-4">
        Si el Usuario no acepta estos Términos y Condiciones, deberá abstenerse de
        ingresar al Sitio y de utilizar los servicios ofrecidos.
      </p>
      <p className="mb-4">
        El acceso al Sitio sólo está disponible para personas mayores de dieciocho
        (18) años, con capacidad legal para contratar, que cumplan los recaudos
        requeridos por <strong>Vitacred</strong>.
      </p>
      <p className="mb-4">
        Una vez aceptados los Términos y Condiciones, las relaciones entre el Usuario
        y <strong>Vitacred</strong> (el "Titular"), derivadas de la utilización del
        Sitio y/o de los servicios ofrecidos, se regirán por las cláusulas siguientes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Buena Fe</h2>
      <p className="mb-4">
        El Usuario reconoce y acepta que estos Términos y Condiciones y las relaciones
        surgidas a través del mismo tendrán como principios esenciales la buena fe y
        el deber de colaboración entre las partes. En consecuencia, el Usuario se
        obliga a interactuar en el Sitio sobre la base de dichos principios.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modificaciones</h2>
      <p className="mb-4">
        <strong>Vitacred</strong> se reserva el derecho de modificar estos Términos y
        Condiciones. Las modificaciones entrarán en vigencia a partir de su
        publicación en el Sitio o notificación al Usuario. En caso de que el Usuario
        no acepte las modificaciones, podrá rescindir el contrato notificando dentro
        de los cinco días posteriores a la comunicación y tendrá un máximo de quince
        días para pre-cancelar el saldo adeudado.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Propiedad de derechos, títulos y contenidos</h2>
      <p className="mb-4">
        Todos los derechos, títulos y contenidos de este Sitio son propiedad exclusiva
        de <strong>Vitacred</strong>, salvo que se indique lo contrario. No pueden
        modificarse, copiarse, distribuirse, transmitirse, reproducirse ni usarse con
        fines comerciales o públicos sin autorización escrita de <strong>Vitacred</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Requisitos</h2>
      <p className="mb-4">
        Para acceder a cualquiera de los servicios ofrecidos mediante el Sitio, el
        Usuario deberá cumplir con todos los requisitos descriptos. La aceptación de
        estos Términos y Condiciones implica la conformidad del Usuario con todos los
        términos aplicables.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Formulario de Solicitud de Crédito – Registración del Usuario
      </h2>
      <p className="mb-4">
        El Usuario deberá registrarse con sus datos personales completando los campos
        obligatorios en el formulario de Solicitud de Crédito y proporcionando
        información válida y veraz. <strong>Vitacred</strong> podrá solicitar
        documentación adicional para verificar los datos e incluso rechazar
        solicitudes sin obligación de exponer motivos.
      </p>
      <p className="mb-4">
        El acceso a la cuenta se realizará mediante correo electrónico y clave
        personal, la cual es responsabilidad exclusiva del Usuario. El Usuario
        deberá notificar cualquier uso no autorizado de su cuenta.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Compromiso del Usuario</h2>
      <p className="mb-4">El Usuario se compromete a no:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Transmitir mensajes anónimos, injuriosos, obscenos o engañosos.</li>
        <li>Transmitir archivos que contengan virus u otros elementos dañinos.</li>
        <li>Enviar correos electrónicos masivos no solicitados.</li>
        <li>
          Intentar acceder de manera no autorizada o realizar acciones que perjudiquen
          la funcionalidad del Sitio.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Responsabilidad del Titular</h2>
      <p className="mb-4">
        <strong>Vitacred</strong> no se responsabiliza por la publicidad de terceros
        en el Sitio ni por fallas técnicas, interrupciones o errores en el sistema,
        servidor o Internet que afecten el acceso o uso del Sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Otorgamiento de Crédito – Servicio</h2>
      <p className="mb-4">
        El servicio ofrecido consiste en la gestión y otorgamiento online de créditos
        personales bajo las condiciones publicadas en el Sitio. La aprobación de los
        créditos es exclusiva potestad de <strong>Vitacred</strong>, sin obligación de
        otorgarlos.
      </p>
      <p className="mb-4">
        El Usuario se obliga a devolver el monto recibido más intereses y comisiones
        en las formas de pago habilitadas por <strong>Vitacred</strong> (Rapipago,
        Pago Fácil, Cobro Express, Mercado Pago, tarjetas de débito, Pago Mis Cuentas,
        etc.).
      </p>
      <p className="mb-4">
        El Usuario consiente que entidades como COELSA, el BCRA y bancos puedan
        informar a <strong>Vitacred</strong> datos bancarios (CBUs) para verificar la
        información suministrada y realizar los débitos correspondientes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Propiedad intelectual. Enlaces</h2>
      <p className="mb-4">
        Los contenidos, programas y bases de datos del Sitio son propiedad de{" "}
        <strong>Vitacred</strong> y están protegidos por leyes de propiedad intelectual.
        El uso indebido está prohibido sin autorización expresa.
      </p>
      <p className="mb-4">
        El Sitio puede contener enlaces a otros sitios web ajenos a{" "}
        <strong>Vitacred</strong>, por los que no asume responsabilidad alguna.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Renuncias</h2>
      <p className="mb-4">
        La demora u omisión de <strong>Vitacred</strong> en exigir el cumplimiento de
        estos Términos y Condiciones no se interpretará como renuncia a sus derechos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Notificaciones y Publicidad</h2>
      <p className="mb-4">
        El Usuario acepta la validez de notificaciones enviadas por{" "}
        <strong>Vitacred</strong> vía correo electrónico, Sitio o correo postal. Así
        también acepta el envío de material promocional, salvo que solicite su exclusión.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Otras Disposiciones</h2>
      <p className="mb-4">
        El Usuario declara haber leído y comprendido estos Términos y Condiciones y
        contar con copia disponible. Asimismo, presta conformidad para que{" "}
        <strong>Vitacred</strong> pueda ceder libremente los derechos resultantes de
        cualquier préstamo solicitado.
      </p>
    </div>
  );
};

export default TerminosYCondiciones;
