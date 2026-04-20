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
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#141414]/95 px-3 py-2 shadow-[0_18px_42px_rgba(0,0,0,0.36)] backdrop-blur print:hidden">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">Painel executivo</p>
            <h1 className="text-sm font-semibold tracking-tight text-stone-100 sm:text-base">Análise Vendas x Estoque</h1>
          </div>

          <div className="grid w-full gap-2 sm:w-auto sm:grid-flow-col sm:auto-cols-max sm:items-center">
            <div className="grid grid-cols-2 rounded-[12px] border border-white/10 bg-black/30 p-1 shadow-inner shadow-black/40">
              {modes.map((item) => {
                const active = mode === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMode(item.id)}
                    className={[
                      "inline-flex min-h-10 items-center justify-center gap-2 rounded-[9px] px-3 py-2 text-xs font-semibold transition sm:min-h-9 sm:px-3.5",
                      active
                        ? "bg-[#d63a17] text-white shadow-[0_10px_24px_rgba(214,58,23,0.28)] ring-1 ring-[#ff7148]/40"
                        : "text-stone-400 hover:bg-white/5 hover:text-stone-100",
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
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-[12px] border border-white/10 bg-[#242424] px-3 py-2 text-xs font-semibold text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-[#d63a17] hover:bg-[#2b211e] hover:text-white sm:min-h-9 sm:w-auto sm:px-3.5"
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
