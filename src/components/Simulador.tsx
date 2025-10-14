// PrestamoSimulador.jsx
import { useState } from "react";

const PrestamoSimulador = () => {
  const [monto, setMonto] = useState(1750000);
  const cuotas = 18;

  const calcularCuota = (monto) => {
    const tasa = 12.5152 / 100;
    return Math.round(monto * tasa);
  };

  const cuota = calcularCuota(monto);

  return (
    <div className="w-full max-w-md lg:max-w-lg bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl text-center border border-white/30">
      <h2 className="text-lg font-semibold mb-2 text-white">
        ¿Cuánto querés pedir?
      </h2>

      {/* Slider */}
      <input
        type="range"
        min={50000}
        max={3000000}
        step={50000}
        value={monto}
        onChange={(e) => setMonto(Number(e.target.value))}
        className="w-full accent-[#E89C55] mb-6"
      />

      <p className="text-4xl font-extrabold text-white mb-4">
        ${monto.toLocaleString("es-AR")}
      </p>

      <p className="text-gray-200 mb-2">Valor cuota desde:</p>
      <p className="text-2xl font-bold text-white mb-6">
        ${cuota.toLocaleString("es-AR")}
      </p>

      <div className="flex justify-between text-sm text-gray-200 border-t border-white/20 pt-3 mt-2">
        <span>Cantidad de cuotas</span>
        <span className="font-medium">{cuotas}</span>
      </div>
      {/*
  <div className="flex justify-between text-sm text-gray-200 border-b border-white/20 pb-3">
    <span>Primer vencimiento</span>
    <span className="font-medium">6 de OCTUBRE</span>
  </div>
  */}

      <button
        className="mt-6 w-full bg-[#E89C55] hover:bg-[#eaab70] text-white py-3 px-4 rounded-full font-semibold transition"
        onClick={() => {
          document
            .getElementById("contacto")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Pedilo ahora
      </button>

      <p className="mt-3 text-xs text-gray-300">
        * Sujeto a verificación crediticia
      </p>
    </div>
  );
};

export default PrestamoSimulador;
