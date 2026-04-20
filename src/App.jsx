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

  if (type === "sun") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    );
  }

  if (type === "moon") {
    return (
      <svg {...common}>
        <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a7 7 0 1 0 11 11z" />
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
  const [theme, setTheme] = useState("dark");
  const isPrintMode = mode === "print";
  const isLightTheme = theme === "light";

  return (
    <div className={["min-h-screen bg-[#1c1c1c]", isLightTheme ? "theme-light" : "theme-dark"].join(" ")}>
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#141414]/95 px-3 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.34)] backdrop-blur print:hidden">
        <div className="mx-auto grid max-w-[1360px] gap-2.5 md:grid-cols-[1fr_auto] md:items-center">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">Painel executivo</p>
            <h1 className="text-sm font-semibold tracking-tight text-stone-100 sm:text-base">Análise Vendas x Estoque</h1>
          </div>

          <div className="grid gap-1.5 rounded-[13px] border border-white/10 bg-black/15 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_26px_rgba(0,0,0,0.18)] sm:grid-cols-[auto_auto] md:w-auto">
            <div className="grid grid-cols-2 gap-0.5 rounded-[10px] bg-black/25 p-0.5 shadow-inner shadow-black/30">
              {modes.map((item) => {
                const active = mode === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMode(item.id)}
                    title={item.label}
                    aria-label={item.label}
                    className={[
                      "inline-flex h-9 w-11 items-center justify-center rounded-[8px] text-[11px] font-semibold transition md:h-8 md:w-10",
                      active
                        ? "bg-[#d63a17] text-white shadow-[0_6px_16px_rgba(214,58,23,0.22)] ring-1 ring-[#ff7148]/30"
                        : "text-stone-400 hover:bg-white/5 hover:text-stone-100",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    <UiIcon type={item.icon} className="h-3.5 w-3.5" />
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-0.5">
              <button
                type="button"
                onClick={() => setTheme(isLightTheme ? "dark" : "light")}
                title={isLightTheme ? "Usar modo escuro" : "Usar modo claro"}
                aria-label={isLightTheme ? "Usar modo escuro" : "Usar modo claro"}
                className="inline-flex h-9 w-full items-center justify-center rounded-[10px] border border-white/10 bg-[#232323] text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:border-[#d63a17]/70 hover:bg-[#2b211e] hover:text-white md:h-8 md:w-10"
              >
                <UiIcon type={isLightTheme ? "moon" : "sun"} className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                title="Imprimir / PDF"
                aria-label="Imprimir / PDF"
                className="inline-flex h-9 w-full items-center justify-center rounded-[10px] border border-white/10 bg-[#232323] text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:border-[#d63a17]/70 hover:bg-[#2b211e] hover:text-white md:h-8 md:w-10"
              >
                <UiIcon type="print" className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={isPrintMode ? "screen-print-preview" : ""}>
        {isPrintMode ? <DashboardLosNetoPrint /> : <DashboardLosNeto />}
      </div>
    </div>
  );
}
