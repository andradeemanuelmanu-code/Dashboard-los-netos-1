import { useState } from "react";
import DashboardLosNeto, { DashboardLosNetoPrint } from "./components/dashboard_los_neto_statico.jsx";

const modes = [
  { id: "dashboard", label: "Modo dashboard", icon: "dashboard" },
  { id: "print", label: "Modo impressão/PDF", icon: "file" },
];

function UiIcon({ type, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "file") {
    return (
      <svg {...common}>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    );
  }

  if (type === "print") {
    return (
      <svg {...common}>
        <path d="M7 8V3h10v5" />
        <path d="M6 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1" />
        <path d="M7 14h10v7H7z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 4h7v7H4z" />
      <path d="M13 4h7v7h-7z" />
      <path d="M4 13h7v7H4z" />
      <path d="M13 13h7v7h-7z" />
    </svg>
  );
}

export default function App() {
  const [mode, setMode] = useState("dashboard");
  const isPrintMode = mode === "print";

  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <div className="sticky top-0 z-50 border-b border-[#3a211c] bg-[#1b1b1b]/95 px-3 py-2 shadow-[0_12px_32px_rgba(0,0,0,0.28)] backdrop-blur print:hidden">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e34a22]">Los Neto</p>
            <h1 className="text-base font-semibold tracking-tight text-stone-100">Painel gerencial</h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="grid grid-cols-2 rounded-[8px] border border-stone-700 bg-[#111111] p-0.5">
              {modes.map((item) => {
                const active = mode === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMode(item.id)}
                    className={[
                      "inline-flex items-center justify-center gap-2 rounded-[6px] px-3 py-1.5 text-xs font-semibold transition",
                      active ? "bg-[#d63a17] text-white shadow-sm" : "text-stone-400 hover:bg-stone-900 hover:text-stone-100",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    <UiIcon type={item.icon} className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-stone-700 bg-[#242424] px-3 py-1.5 text-xs font-semibold text-stone-200 shadow-sm transition hover:border-[#d63a17] hover:text-white"
            >
              <UiIcon type="print" className="h-4 w-4" />
              Imprimir / PDF
            </button>
          </div>
        </div>
      </div>

      <div className={isPrintMode ? "screen-print-preview" : ""}>
        {isPrintMode ? <DashboardLosNetoPrint /> : <DashboardLosNeto />}
      </div>
    </div>
  );
}
