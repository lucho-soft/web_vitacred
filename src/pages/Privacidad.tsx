import React from "react";
import { useNavigate } from "react-router-dom";
import vitacredLogo from "@/assets/vitacred-logo.png"; // 👉 cambia la ruta según tu proyecto
import { Button } from "@/components/ui/button"; // si usás shadcn/ui

const PoliticaDePrivacidad: React.FC = () => {
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

      <h1 className="text-3xl font-bold text-center mb-6">Política de Privacidad</h1>

      <p className="mb-4">
        En el presente se describe la información que se recoge sobre los usuarios
        y el compromiso asumido por <strong>Vitacred</strong> respecto de su
        posterior utilización. Al registrarse, los usuarios aceptan que la relación
        entre las partes se regirá por las pautas que se enuncian a continuación.
      </p>

      <p className="mb-4">
        La privacidad de la información de los usuarios es fundamental para{" "}
        <strong>Vitacred</strong>. Por tal razón se toman las precauciones y recaudos
        necesarios para mantenerla resguardada y segura, utilizando los mecanismos
        de seguridad informática más aptos disponibles en la actualidad.
      </p>

      <p className="mb-4">
        Este documento es parte integrante de los Términos y Condiciones Generales
        de <strong>www.vitacred.com.ar</strong>. Mediante la aceptación de los
        Términos y Condiciones Generales en el momento de la registración, el
        usuario acepta las políticas aquí contenidas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Información a recabar</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          Para utilizar los servicios brindados por el sitio web, los usuarios deberán registrarse completando el formulario respectivo.{" "}
          <strong>Vitacred</strong> podrá confirmar dichos datos acudiendo a entidades
          públicas, compañías especializadas o centrales de riesgo públicas o privadas.
        </li>
        <li>
          En cualquier momento, luego de concluida la relación comercial y no quedando
          saldo alguno a favor de <strong>Vitacred</strong>, el usuario podrá solicitar
          la baja de su solicitud y la eliminación de su cuenta e información de la base
          de datos de <strong>www.vitacred.com.ar</strong>.
        </li>
        <li>
          <strong>Vitacred</strong> recoge y almacena automáticamente cierta información
          personal sobre la actividad de los usuarios dentro del sitio web (URL de
          origen, URL accedida, navegador, direcciones IP, etc.).
        </li>
        <li>
          Si los usuarios envían correspondencia electrónica, <strong>Vitacred</strong>{" "}
          podrá recoger y almacenar tal información.
        </li>
        <li>
          <strong>Vitacred</strong> podrá informar del otorgamiento de cada préstamo a
          las bases de datos de las distintas centrales de riesgo crediticio públicas y
          privadas, y posteriormente sobre el cumplimiento o incumplimiento del usuario.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Uso de la información</h2>
      <p className="mb-4">
        La información recabada se emplea con el fin de suministrar el mejor servicio y
        posibilitar que los usuarios realicen operaciones de forma ágil y segura. Nos
        permite personalizar los servicios y en especial:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Establecer el contacto con los usuarios.</li>
        <li>Desarrollar estudios internos sobre intereses y comportamiento.</li>
        <li>Mejorar nuestras iniciativas comerciales y promocionales.</li>
        <li>
          Enviar información o mensajes sobre nuevos servicios y promociones. El usuario
          puede solicitar en cualquier momento ser excluido de estas listas.
        </li>
        <li>
          El Titular de los datos personales tiene derecho de acceso según la Ley
          25.326. La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES es el órgano
          de control competente.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Confidencialidad de la información</h2>
      <p className="mb-4">
        Una vez registrado en <strong>www.vitacred.com.ar</strong>, los datos de los
        usuarios serán utilizados únicamente en las formas establecidas en este
        documento. Los usuarios deberán utilizar su dirección de correo electrónico y
        clave personal para acceder al sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Clave personal</h2>
      <p className="mb-4">
        Los usuarios registrados dispondrán de una clave personal que podrán modificar
        en cualquier momento. Se comprometen a mantenerla bajo absoluta confidencialidad.
        <strong>Vitacred</strong> no se responsabiliza por el uso indebido de dicha clave.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Capacidad</h2>
      <p className="mb-4">
        Los servicios del sitio solo están disponibles para personas con capacidad legal
        para contratar.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Spam</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Vitacred</strong> toma los recaudos necesarios para evitar el envío no
          solicitado de correos electrónicos.
        </li>
        <li>
          <strong>Vitacred</strong> no se hace responsable por correos enviados por
          terceros.
        </li>
        <li>
          <strong>Vitacred</strong> podrá suspender o inhabilitar a usuarios que
          incumplan esta política.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Seguridad y almacenamiento</h2>
      <p className="mb-4">
        <strong>Vitacred</strong> se compromete a cumplir con la normativa en materia de
        seguridad de la información personal, empleando firewalls, SSL y otras medidas
        de protección. Sin embargo, no será responsable de accesos ilegales por parte de
        terceros.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Derechos de acceso, cancelación y rectificación
      </h2>
      <p className="mb-4">
        Los usuarios pueden acceder, actualizar o rectificar sus datos personales en
        cualquier momento, conforme la normativa aplicable. Los usuarios son responsables
        de mantener la veracidad y vigencia de la información.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Modificaciones de la Política de Privacidad
      </h2>
      <p className="mb-4">
        <strong>Vitacred</strong> podrá modificar en cualquier momento esta Política de
        Privacidad, notificando a los usuarios por correo electrónico o publicando la
        versión actualizada en el sitio. Si el usuario no objeta en 2 días, se entenderá
        que acepta los nuevos términos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contacto</h2>
      <p className="mb-4">
        Para mayor información sobre la confidencialidad de sus datos personales, puede
        contactarnos en el correo electrónico:{" "}
        <strong>info@vitacred.com.ar</strong>.
      </p>

      <p className="text-sm text-gray-600 mt-6">
        El presente convenio se encuentra a disposición de los usuarios que deseen contar
        con el texto impreso en la sede de <strong>Vitacred</strong>, Sarmiento 348, CABA,
        Oficina 23.
      </p>
    </div>
  );
};

export default PoliticaDePrivacidad;
