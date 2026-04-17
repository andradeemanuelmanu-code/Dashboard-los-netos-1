import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis, Legend } from "recharts";

// ==========================================
// DASHBOARD ESTÁTICO - LOS NETO
// Substitua os valores abaixo pelos resultados da sua análise.
// Não lê Excel. É um painel visual pronto para apresentação.
// ==========================================

function LocalIcon({ className = "", type = "dot" }) {
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

  if (type === "alert") {
    return (
      <svg {...common}>
        <path d="M12 3 2.5 20h19z" />
        <path d="M12 9v5" />
        <path d="M12 17h.01" />
      </svg>
    );
  }

  if (type === "trend") {
    return (
      <svg {...common}>
        <path d="M4 17 10 11l4 4 6-8" />
        <path d="M15 7h5v5" />
      </svg>
    );
  }

  if (type === "box") {
    return (
      <svg {...common}>
        <path d="M4 8 12 4l8 4-8 4z" />
        <path d="M4 8v8l8 4 8-4V8" />
        <path d="M12 12v8" />
      </svg>
    );
  }

  if (type === "cart") {
    return (
      <svg {...common}>
        <path d="M5 5h2l2 10h8l2-7H8" />
        <path d="M10 20h.01" />
        <path d="M17 20h.01" />
      </svg>
    );
  }

  if (type === "refresh") {
    return (
      <svg {...common}>
        <path d="M20 11a8 8 0 0 0-14-5l-2 2" />
        <path d="M4 4v4h4" />
        <path d="M4 13a8 8 0 0 0 14 5l2-2" />
        <path d="M20 20v-4h-4" />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg {...common}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }

  if (type === "search") {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 4 4" />
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

const AlertTriangle = (props) => <LocalIcon {...props} type="alert" />;
const BarChart3 = (props) => <LocalIcon {...props} type="dashboard" />;
const Boxes = (props) => <LocalIcon {...props} type="box" />;
const CheckCircle2 = (props) => <LocalIcon {...props} type="check" />;
const PackageSearch = (props) => <LocalIcon {...props} type="search" />;
const PackageX = (props) => <LocalIcon {...props} type="alert" />;
const RefreshCw = (props) => <LocalIcon {...props} type="refresh" />;
const ShoppingCart = (props) => <LocalIcon {...props} type="cart" />;
const TrendingUp = (props) => <LocalIcon {...props} type="trend" />;

const kpis = [
  { titulo: "Receita total do período", valor: "R$ 6.468.994,19", detalhe: "Jan/25 a Mar/26", icon: TrendingUp },
  { titulo: "Quantidade vendida", valor: "38.615 un.", detalhe: "Volume total vendido", icon: ShoppingCart },
  { titulo: "Estoque atual", valor: "66.311 un.", detalhe: "Saldo físico consolidado", icon: Boxes },
  { titulo: "Referências ativas", valor: "14.367", detalhe: "Com registro de venda no período", icon: BarChart3 },
];

const receitaMensal = [
  { mes: "Jan/25", receita: 406257.14 },
  { mes: "Fev/25", receita: 373749.85 },
  { mes: "Mar/25", receita: 386474.29 },
  { mes: "Abr/25", receita: 432903.45 },
  { mes: "Mai/25", receita: 475332.24 },
  { mes: "Jun/25", receita: 433562.05 },
  { mes: "Jul/25", receita: 394531.70 },
  { mes: "Ago/25", receita: 477975.75 },
  { mes: "Set/25", receita: 376705.66 },
  { mes: "Out/25", receita: 408611.04 },
  { mes: "Nov/25", receita: 412814.60 },
  { mes: "Dez/25", receita: 668674.14 },
  { mes: "Jan/26", receita: 452493.37 },
  { mes: "Fev/26", receita: 400280.20 },
  { mes: "Mar/26", receita: 368628.71 },
];

const qtdMensal = [
  { mes: "Jan/25", qtd: 2424 },
  { mes: "Fev/25", qtd: 2316 },
  { mes: "Mar/25", qtd: 2267 },
  { mes: "Abr/25", qtd: 2654 },
  { mes: "Mai/25", qtd: 2974 },
  { mes: "Jun/25", qtd: 2593 },
  { mes: "Jul/25", qtd: 2331 },
  { mes: "Ago/25", qtd: 2841 },
  { mes: "Set/25", qtd: 2284 },
  { mes: "Out/25", qtd: 2413 },
  { mes: "Nov/25", qtd: 2482 },
  { mes: "Dez/25", qtd: 4040 },
  { mes: "Jan/26", qtd: 2440 },
  { mes: "Fev/26", qtd: 2289 },
  { mes: "Mar/26", qtd: 2267 },
];

const topProdutos = [
  { nome: "SAPATO FERRACINI MT 29999", receita: 17897.40 },
  { nome: "PRODUTO QM LOSNETO QM999", receita: 16645.32 },
  { nome: "TENIS OLYMPIKUS CHALLENGER 5 STONE/MARINHO 37", receita: 13469.55 },
  { nome: "MOCHILA CLIO RB27425", receita: 12055.05 },
  { nome: "SAPATO RAFARILLO 29999", receita: 11956.32 },
];

const topReferencias = [
  { nome: "CHALLENGER5", receita: 125390.58 },
  { nome: "BEATS", receita: 105602.15 },
  { nome: "DYNAMIC343", receita: 103478.02 },
  { nome: "CORREMAX", receita: 87332.17 },
  { nome: "SWIFT5", receita: 56592.51 },
];

const topMarcas = [
  { nome: "OLYMPIKUS", receita: 1177724.05 },
  { nome: "ADIDAS", receita: 595101.58 },
  { nome: "PEGADA", receita: 378470.05 },
  { nome: "SANTINO", receita: 325611.73 },
  { nome: "MODARE", receita: 267772.61 },
];

const topNumeracoes = [
  { nome: "37", receita: 627029.04 },
  { nome: "38", receita: 608114.89 },
  { nome: "36", receita: 510140.25 },
  { nome: "39", receita: 507577.68 },
  { nome: "40", receita: 502404.67 },
];

const abcEstoque = [
  { classe: "A", pctValor: 69.97, pctItens: 18.56, qtdRefs: 661, receita: 4526172.38, observacao: "Modelos mais relevantes para o faturamento" },
  { classe: "B", pctValor: 19.99, pctItens: 25.13, qtdRefs: 895, receita: 1293001.25, observacao: "Importância intermediária" },
  { classe: "C", pctValor: 10.05, pctItens: 56.30, qtdRefs: 2005, receita: 649820.56, observacao: "Baixa contribuição e atenção ao excesso" },
];

const abcProduto = [
  { classe: "A", pctValor: 61.47, pctItens: 19.99, qtdItens: 2872, receita: 3976493.47, observacao: "Produtos com maior contribuição econômica" },
  { classe: "B", pctValor: 23.93, pctItens: 30.00, qtdItens: 4310, receita: 1548207.50, observacao: "Faixa intermediária de contribuição" },
  { classe: "C", pctValor: 14.60, pctItens: 50.01, qtdItens: 7185, receita: 944293.22, observacao: "Baixa contribuição e maior risco de acúmulo" },
];

const riscoRuptura = [
  { ref: "MALA SANTINO DE BORDO", estoque: 0, receita: 30998.85, qtdVendida: 107, classe: "A" },
  { ref: "MOCHILA SANTINO NOTEBOOK OSLO POL SAN405 AZUL MARINHO UNICO", estoque: 0, receita: 27841.78, qtdVendida: 92, classe: "A" },
  { ref: "MALA SANTINO BORDO AMZV183P AZUL CLARO P", estoque: 0, receita: 22499.24, qtdVendida: 76, classe: "A" },
  { ref: "SAPATO FERRACINI MT 29999", estoque: 0, receita: 17897.40, qtdVendida: 54, classe: "A" },
  { ref: "PRODUTO QM LOSNETO QM999", estoque: 0, receita: 16645.32, qtdVendida: 475, classe: "A" },
];

const excessoEstoque = [
  { ref: "TENIS MOLEKINHO 2841217 PRETO/AMARELO NEON 33", estoque: 159, receita: 90.65, qtdVendida: 1, classe: "C" },
  { ref: "TAMANCO MODARE 7183105", estoque: 144, receita: 119.99, qtdVendida: 1, classe: "C" },
  { ref: "TAMANCO MODARE 7127246 TAN 35", estoque: 131, receita: 109.99, qtdVendida: 1, classe: "C" },
  { ref: "TENIS MOLEKINHO 2838123 CAFE/AREIA/BRANCO OFF 28", estoque: 108, receita: 129.99, qtdVendida: 1, classe: "C" },
  { ref: "TAMANCO MODARE ULTRACONFORTO 7132138 PRETO 35", estoque: 96, receita: 119.99, qtdVendida: 1, classe: "C" },
];

const vendasPorNumeracao = [
  { numeracao: "23", venda: 129 },
  { numeracao: "24", venda: 75 },
  { numeracao: "25", venda: 168 },
  { numeracao: "26", venda: 146 },
  { numeracao: "27", venda: 152 },
  { numeracao: "28", venda: 259 },
  { numeracao: "29", venda: 341 },
  { numeracao: "30", venda: 255 },
  { numeracao: "31", venda: 463 },
  { numeracao: "32", venda: 454 },
  { numeracao: "33", venda: 556 },
  { numeracao: "34", venda: 872 },
  { numeracao: "35", venda: 1978 },
  { numeracao: "36", venda: 2954 },
  { numeracao: "37", venda: 3580 },
  { numeracao: "38", venda: 4036 },
  { numeracao: "39", venda: 2611 },
  { numeracao: "40", venda: 2173 },
  { numeracao: "41", venda: 1987 },
  { numeracao: "42", venda: 1699 },
  { numeracao: "43", venda: 1581 },
  { numeracao: "44", venda: 2107 },
  { numeracao: "45", venda: 125 },
];

const prioridadeReposicao = [
  { ref: "MALA SANTINO DE BORDO GEOMETRIC 360 ASAV7003P", prioridade: "Alta", estoque: 0, classe: "A", qtdVendida: 107, receita: 30998.85 },
  { ref: "MOCHILA SANTINO NOTEBOOK", prioridade: "Alta", estoque: 0, classe: "A", qtdVendida: 92, receita: 27841.78 },
  { ref: "MALA SANTINO BORDO AMZV183P", prioridade: "Alta", estoque: 0, classe: "A", qtdVendida: 76, receita: 22499.24 },
  { ref: "SAPATO FERRACINI MT 29999", prioridade: "Alta", estoque: 0, classe: "A", qtdVendida: 54, receita: 17897.40 },
  { ref: "PRODUTO QM LOSNETO QM999", prioridade: "Alta", estoque: 0, classe: "A", qtdVendida: 475, receita: 16645.32 },
];

const scatterData = [
  { ref: "MALA SANTINO DE BORDO GEOMETRIC", venda: 107, estoque: 0, receita: 30998.85 },
  { ref: "MOCHILA SANTINO NOTEBOOK OSLO POL SAN405", venda: 92, estoque: 0, receita: 27841.78 },
  { ref: "TENIS OLYMPIKUS CHALLENGER 5", venda: 407, estoque: 205, receita: 125390.58 },
  { ref: "TENIS OLYMPIKUS BEATS", venda: 340, estoque: 177, receita: 105602.15 },
  { ref: "TENIS ACTVITTA 4901207", venda: 9, estoque: 332, receita: 1789.91 },
  { ref: "TENIS VIZZANO 1389120", venda: 7, estoque: 299, receita: 1329.93 },
];

const pieData = [
  { name: "Classe A", value: 661 },
  { name: "Classe B", value: 895 },
  { name: "Classe C", value: 2005 },
];

const pieColors = ["#0f172a", "#475569", "#cbd5e1"];

const currency = (v) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(v || 0);

const number = (v) => new Intl.NumberFormat("pt-BR").format(v || 0);
const percent = (v) => `${new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v || 0)}%`;

const cx = (...classes) => classes.filter(Boolean).join(" ");

function Card({ className = "", children }) {
  return <section className={cx("rounded-[10px] border border-slate-200 bg-white shadow-sm", className)}>{children}</section>;
}

function CardHeader({ className = "", children }) {
  return <div className={cx("px-5 pt-5", className)}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={cx("px-5 pb-5", className)}>{children}</div>;
}

function CardTitle({ className = "", children }) {
  return <h3 className={cx("text-lg font-semibold tracking-tight text-slate-950", className)}>{children}</h3>;
}

function CardDescription({ className = "", children }) {
  return <p className={cx("mt-1 text-sm leading-6 text-slate-500", className)}>{children}</p>;
}

function Badge({ className = "", children }) {
  return (
    <span className={cx("inline-flex items-center rounded-[6px] px-2.5 py-1 text-xs font-semibold", className)}>
      {children}
    </span>
  );
}

export default function DashboardLosNeto() {
  const chartTooltip = {
    contentStyle: {
      borderRadius: 8,
      border: "1px solid #cbd5e1",
      boxShadow: "0 10px 24px rgba(15, 23, 42, 0.14)",
      fontSize: 12,
    },
    labelStyle: { color: "#0f172a", fontWeight: 700 },
  };

  const totalRupturaReceita = riscoRuptura.reduce((total, item) => total + item.receita, 0);
  const totalExcessoUnidades = excessoEstoque.reduce((total, item) => total + item.estoque, 0);
  const totalReposicaoReceita = prioridadeReposicao.reduce((total, item) => total + item.receita, 0);
  const abcReferenciaChart = abcEstoque.map((item) => ({
    name: `Classe ${item.classe}`,
    value: item.pctValor,
    receita: item.receita,
    pctItens: item.pctItens,
    qtd: item.qtdRefs,
  }));
  const abcProdutoChart = abcProduto.map((item) => ({
    name: `Classe ${item.classe}`,
    value: item.pctValor,
    receita: item.receita,
    pctItens: item.pctItens,
    qtd: item.qtdItens,
  }));

  const decisionCards = [
    {
      title: "Ruptura",
      value: `${riscoRuptura.length} refs.`,
      metric: currency(totalRupturaReceita),
      label: "receita sob risco",
      className: "border-red-200 bg-red-50 text-red-800",
    },
    {
      title: "Excesso",
      value: `${number(totalExcessoUnidades)} un.`,
      metric: `${excessoEstoque.length} refs.`,
      label: "baixo giro",
      className: "border-amber-200 bg-amber-50 text-amber-800",
    },
    {
      title: "Reposição",
      value: `${prioridadeReposicao.length} itens`,
      metric: currency(totalReposicaoReceita),
      label: "priorizados",
      className: "border-blue-200 bg-blue-50 text-blue-900",
    },
  ];

  const executiveInsights = [
    { title: "Receita concentrada", text: "Classe A sustenta a maior parte do faturamento e deve guiar reposição." },
    { title: "Ruptura imediata", text: "Itens relevantes aparecem com estoque zerado e venda comprovada." },
    { title: "Capital parado", text: "Classe C reúne saldos altos com baixa movimentação." },
    { title: "Ação recomendada", text: "Repor Classe A, revisar compras de baixo giro e ajustar grade por numeração." },
  ];

  const TruncatedText = ({ value }) => (
    <span className="group relative block max-w-full" title={value}>
      <span className="block truncate">{value}</span>
      <span className="pointer-events-none absolute left-0 top-full z-50 mt-1 hidden max-w-[360px] rounded-[8px] border border-slate-200 bg-white px-3 py-2 text-[11px] font-medium leading-4 text-slate-800 shadow-xl shadow-slate-950/10 group-hover:block">
        {value}
      </span>
    </span>
  );

  const ScatterTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;

    const item = payload[0].payload;
    return (
      <div className="max-w-[280px] rounded-[8px] border border-slate-200 bg-white p-3 text-xs shadow-xl shadow-slate-950/10">
        <p className="font-semibold leading-5 text-slate-950">{item.ref}</p>
        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-slate-600">
          <span>Vendido</span>
          <span className="text-right font-semibold text-slate-900">{number(item.venda)} un.</span>
          <span>Estoque</span>
          <span className="text-right font-semibold text-slate-900">{number(item.estoque)} un.</span>
          <span>Receita</span>
          <span className="text-right font-semibold text-slate-900">{currency(item.receita)}</span>
        </div>
      </div>
    );
  };

  const NumeracaoTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;

    const venda = payload[0].value;
    return (
      <div className="rounded-[8px] border border-slate-200 bg-white p-3 text-xs shadow-xl shadow-slate-950/10">
        <p className="font-semibold text-slate-950">Numeração {label}</p>
        <div className="mt-2 flex items-center justify-between gap-8 text-slate-600">
          <span>Quantidade vendida</span>
          <span className="font-semibold text-slate-900">{number(venda)} un.</span>
        </div>
      </div>
    );
  };

  const compactTable = (columns, data, tone = "slate") => (
    <div className="min-w-0 overflow-visible rounded-[8px] border border-slate-200">
      <table className="w-full table-fixed text-[12px]">
        <thead className="bg-slate-100 text-[10px] uppercase tracking-wide text-slate-600">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={cx("px-3 py-2 text-left font-semibold", column.className)}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {data.map((row, index) => (
            <tr key={`${row.ref || row.nome || row.classe || index}`} className="hover:bg-slate-50">
              {columns.map((column) => (
                <td key={column.key} className={cx("px-3 py-2 align-middle text-slate-700", column.className)}>
                  {column.render
                    ? column.render(row[column.key], row, tone)
                    : typeof row[column.key] === "string" && (column.key === "ref" || column.key === "nome" || column.truncate)
                      ? <TruncatedText value={row[column.key]} />
                      : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const severityBadge = (value, tone = "slate") => {
    const styles = {
      red: "bg-red-100 text-red-800 ring-red-200",
      amber: "bg-amber-100 text-amber-800 ring-amber-200",
      blue: "bg-blue-100 text-blue-900 ring-blue-200",
      slate: "bg-slate-100 text-slate-700 ring-slate-200",
    };

    return <span className={cx("inline-flex rounded px-2 py-0.5 text-[11px] font-semibold ring-1", styles[tone])}>{value}</span>;
  };

  const rankingChart = (data, color) => (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" tick={{ fill: "#64748b", fontSize: 10 }} tickFormatter={(value) => `${Math.round(value / 1000)}k`} axisLine={false} tickLine={false} />
        <YAxis dataKey="nome" type="category" width={86} tick={{ fill: "#334155", fontSize: 10 }} axisLine={false} tickLine={false} />
        <Tooltip {...chartTooltip} formatter={(value) => currency(value)} />
        <Bar dataKey="receita" fill={color} radius={[0, 4, 4, 0]} barSize={16} />
      </BarChart>
    </ResponsiveContainer>
  );

  const abcCard = ({ title, description, chartData, tableData, quantityKey, quantityLabel, totalItems }) => (
    <Card className="min-w-0 rounded-[10px]">
      <CardHeader className="px-4 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <CardDescription className="text-xs">{description}</CardDescription>
          </div>
          <div className="shrink-0 rounded-[8px] border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-right">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Total</p>
            <p className="text-xs font-semibold text-slate-900">{number(totalItems)} itens</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="grid min-h-[236px] gap-4 xl:grid-cols-[0.72fr_1.28fr]">
          <div className="flex min-w-0 flex-col justify-center">
            <div className="h-[168px] min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
                <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={46} outerRadius={66} paddingAngle={3}>
                  {chartData.map((entry, index) => (
                    <Cell key={entry.name} fill={["#12355b", "#64748b", "#d6dde8"][index]} />
                  ))}
                </Pie>
                <Tooltip
                  {...chartTooltip}
                  formatter={(value, name, props) => [percent(value), props.payload.name]}
                />
              </PieChart>
            </ResponsiveContainer>
            </div>
            <div className="mt-1 grid grid-cols-3 gap-1 text-center text-[10px] font-semibold text-slate-500">
              <span>A</span>
              <span>B</span>
              <span>C</span>
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-[8px] border border-slate-200">
            <table className="w-full table-fixed text-[12px]">
              <thead className="bg-slate-100 text-[10px] uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="w-[64px] px-2 py-2 text-left font-semibold">Classe</th>
                  <th className="w-[68px] px-2 py-2 text-right font-semibold">% valor</th>
                  <th className="w-[68px] px-2 py-2 text-right font-semibold">% itens</th>
                  <th className="w-[76px] px-2 py-2 text-right font-semibold">{quantityLabel}</th>
                  <th className="px-2 py-2 text-right font-semibold">Receita</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {tableData.map((row) => {
                  const isA = row.classe === "A";
                  return (
                    <tr key={row.classe} className={isA ? "bg-blue-50/60" : "hover:bg-slate-50"}>
                      <td className="px-2 py-2">
                        <span className={cx(
                          "inline-flex rounded px-2 py-0.5 text-[11px] font-semibold ring-1",
                          isA ? "bg-blue-100 text-blue-900 ring-blue-200" : "bg-slate-100 text-slate-700 ring-slate-200",
                        )}>
                          {row.classe}
                        </span>
                      </td>
                      <td className={cx("px-2 py-2 text-right tabular-nums", isA ? "font-semibold text-blue-950" : "text-slate-700")}>{percent(row.pctValor)}</td>
                      <td className={cx("px-2 py-2 text-right tabular-nums", isA ? "font-semibold text-blue-950" : "text-slate-700")}>{percent(row.pctItens)}</td>
                      <td className="px-2 py-2 text-right tabular-nums text-slate-700">{number(row[quantityKey])}</td>
                      <td className="px-2 py-2 text-right tabular-nums font-medium text-slate-900">{currency(row.receita)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="mx-auto max-w-[1360px] px-3 py-3 sm:px-4 lg:px-5">
        <header className="mb-3 rounded-[10px] border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded bg-slate-900 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">Los Neto</span>
                <span className="rounded border border-slate-300 px-2 py-1 text-[11px] font-semibold text-slate-600">Jan/25 a Mar/26</span>
                <span className="rounded border border-slate-300 px-2 py-1 text-[11px] font-semibold text-slate-600">Dashboard estático</span>
              </div>
              <h1 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                Painel executivo de vendas, estoque e reposição
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-2 lg:w-[520px]">
              {decisionCards.map((card) => (
                <div key={card.title} className={cx("rounded-[8px] border px-3 py-2", card.className)}>
                  <p className="text-[10px] font-semibold uppercase tracking-wide">{card.title}</p>
                  <p className="mt-1 text-lg font-semibold leading-none text-slate-950">{card.value}</p>
                  <p className="mt-1 truncate text-[11px] font-medium">{card.metric} · {card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-3 lg:grid-cols-4">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <Card key={kpi.titulo} className="rounded-[10px] border-slate-200 bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-semibold uppercase tracking-wide text-slate-500">{kpi.titulo}</p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{kpi.valor}</p>
                      <p className="mt-1 truncate text-xs text-slate-500">{kpi.detalhe}</p>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-slate-100 text-slate-700">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="mt-3 grid gap-3 xl:grid-cols-[1.35fr_0.8fr]">
          <Card className="min-w-0 rounded-[10px]">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base">Receita mensal</CardTitle>
              <CardDescription className="text-xs">Evolução do faturamento bruto.</CardDescription>
            </CardHeader>
            <CardContent className="h-[260px] px-3 pb-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={receitaMensal} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="mes" tick={{ fill: "#64748b", fontSize: 10 }} interval={1} height={28} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#64748b", fontSize: 10 }} tickFormatter={(value) => `${Math.round(value / 1000)}k`} width={36} axisLine={false} tickLine={false} />
                  <Tooltip {...chartTooltip} formatter={(value) => currency(value)} />
                  <Line type="monotone" dataKey="receita" stroke="#12355b" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="min-w-0 rounded-[10px]">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base">Quantidade vendida</CardTitle>
              <CardDescription className="text-xs">Unidades por mês.</CardDescription>
            </CardHeader>
            <CardContent className="h-[260px] px-3 pb-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={qtdMensal} margin={{ top: 10, right: 4, bottom: 0, left: -8 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="mes" tick={{ fill: "#64748b", fontSize: 10 }} interval={2} height={28} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#64748b", fontSize: 10 }} tickFormatter={(value) => `${Math.round(value / 1000)}k`} width={34} axisLine={false} tickLine={false} />
                  <Tooltip {...chartTooltip} formatter={(value) => `${number(value)} un.`} />
                  <Bar dataKey="qtd" fill="#64748b" radius={[4, 4, 0, 0]} barSize={12} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        <section className="mt-3 grid gap-3 xl:grid-cols-2">
          {abcCard({
            title: "ABC por referência",
            description: "Curva por referência: valor, itens e receita.",
            chartData: abcReferenciaChart,
            tableData: abcEstoque,
            quantityKey: "qtdRefs",
            quantityLabel: "Refs",
            totalItems: 3561,
          })}

          {abcCard({
            title: "ABC por produto",
            description: "Curva por produto: valor, itens e receita.",
            chartData: abcProdutoChart,
            tableData: abcProduto,
            quantityKey: "qtdItens",
            quantityLabel: "Itens",
            totalItems: 14367,
          })}
        </section>

        <section className="mt-3 grid gap-3 xl:grid-cols-[1fr_1fr_1fr_1fr]">
          {[
            { title: "Produtos", data: topProdutos, color: "#12355b" },
            { title: "Referências", data: topReferencias, color: "#1f4e79" },
            { title: "Marcas", data: topMarcas, color: "#475569" },
            { title: "Numerações", data: topNumeracoes, color: "#64748b" },
          ].map((item) => (
            <Card key={item.title} className="min-w-0 rounded-[10px]">
              <CardHeader className="px-4 pt-4">
                <CardTitle className="text-sm">Top 5 {item.title}</CardTitle>
              </CardHeader>
              <CardContent className="h-[220px] px-2 pb-3">{rankingChart(item.data, item.color)}</CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-3 grid gap-3 xl:grid-cols-2">
          <Card className="min-w-0 rounded-[10px]">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base">Vendas por Numeração</CardTitle>
              <CardDescription className="text-xs">Quantidade vendida por numeração no período.</CardDescription>
            </CardHeader>
            <CardContent className="h-[260px] px-3 pb-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={vendasPorNumeracao} margin={{ top: 10, right: 4, bottom: 0, left: -4 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="numeracao" tick={{ fill: "#64748b", fontSize: 10 }} interval={0} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#64748b", fontSize: 10 }} tickFormatter={(value) => `${Math.round(value / 1000)}k`} width={34} axisLine={false} tickLine={false} />
                  <Tooltip content={<NumeracaoTooltip />} cursor={{ fill: "rgba(15, 23, 42, 0.04)" }} />
                  <Bar dataKey="venda" name="Vendas" radius={[4, 4, 0, 0]} barSize={10}>
                    {vendasPorNumeracao.map((entry) => (
                      <Cell
                        key={entry.numeracao}
                        fill={entry.venda >= 3000 ? "#12355b" : entry.venda >= 2000 ? "#476987" : "#9aa8b8"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="min-w-0 overflow-hidden rounded-[10px]">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base">Matriz venda x estoque</CardTitle>
              <CardDescription className="text-xs">Ruptura, equilíbrio e excesso.</CardDescription>
            </CardHeader>
            <CardContent className="h-[260px] min-w-0 px-2 pb-3">
              <div className="h-full min-w-0 overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 10, right: 8, bottom: 4, left: -8 }}>
                    <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="venda" name="Venda" tick={{ fill: "#64748b", fontSize: 10 }} width={30} axisLine={false} tickLine={false} />
                    <YAxis type="number" dataKey="estoque" name="Estoque" tick={{ fill: "#64748b", fontSize: 10 }} width={30} axisLine={false} tickLine={false} />
                    <ZAxis type="number" dataKey="receita" range={[60, 260]} />
                    <Tooltip content={<ScatterTooltip />} cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter data={scatterData} name="Referências" fill="#12355b" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-3 grid gap-3 xl:grid-cols-3">
          <Card className="min-w-0 rounded-[10px] border-red-200">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base text-red-900">Risco de ruptura</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              {compactTable(
                [
                  { key: "ref", label: "Referência", className: "w-[48%]" },
                  { key: "classe", label: "ABC", className: "w-[54px]", render: (v) => severityBadge(v, "red") },
                  { key: "estoque", label: "Est.", className: "w-[54px]", render: (v) => <span className="font-semibold text-red-700">{number(v)}</span> },
                  { key: "receita", label: "Receita", render: (v) => currency(v) },
                ],
                riscoRuptura,
                "red",
              )}
            </CardContent>
          </Card>

          <Card className="min-w-0 rounded-[10px] border-amber-200">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base text-amber-900">Excesso de estoque</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              {compactTable(
                [
                  { key: "ref", label: "Referência", className: "w-[48%]" },
                  { key: "classe", label: "ABC", className: "w-[54px]", render: (v) => severityBadge(v, "amber") },
                  { key: "estoque", label: "Est.", className: "w-[64px]", render: (v) => <span className="font-semibold text-amber-700">{number(v)}</span> },
                  { key: "qtdVendida", label: "Venda", className: "w-[54px]", render: (v) => number(v) },
                ],
                excessoEstoque,
                "amber",
              )}
            </CardContent>
          </Card>

          <Card className="min-w-0 rounded-[10px] border-blue-200">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base text-blue-950">Prioridade de reposição</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              {compactTable(
                [
                  { key: "ref", label: "Referência", className: "w-[48%]" },
                  { key: "prioridade", label: "Prior.", className: "w-[72px]", render: (v) => severityBadge(v, "blue") },
                  { key: "estoque", label: "Est.", className: "w-[54px]", render: (v) => <span className="font-semibold text-red-700">{number(v)}</span> },
                  { key: "receita", label: "Receita", render: (v) => currency(v) },
                ],
                prioridadeReposicao,
                "blue",
              )}
            </CardContent>
          </Card>
        </section>

        <section className="mt-3 grid gap-3 lg:grid-cols-4">
          {executiveInsights.map((item) => (
            <Card key={item.title} className="rounded-[10px]">
              <CardContent className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{item.title}</p>
                <p className="mt-2 text-sm leading-5 text-slate-700">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}

export function DashboardLosNetoPrint() {
  const totalRupturaReceita = riscoRuptura.reduce((total, item) => total + item.receita, 0);
  const totalExcessoUnidades = excessoEstoque.reduce((total, item) => total + item.estoque, 0);
  const totalReposicaoReceita = prioridadeReposicao.reduce((total, item) => total + item.receita, 0);
  const maiorReceita = Math.max(...receitaMensal.map((item) => item.receita));

  const printTable = (columns, data) => (
    <table className="w-full border-collapse text-[10px]">
      <thead>
        <tr className="border-b border-slate-300 bg-slate-100 text-left text-[9px] uppercase tracking-wide text-slate-600">
          {columns.map((column) => (
            <th key={column.key} className="px-2 py-2 font-semibold">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={`${row.ref || row.classe || row.nome || index}`} className="border-b border-slate-200">
            {columns.map((column) => (
              <td key={column.key} className="px-2 py-2 align-top text-slate-700">
                {column.render ? column.render(row[column.key], row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <main className="mx-auto min-h-screen max-w-[920px] bg-white p-8 text-slate-950 print:max-w-none print:p-0">
      <section className="border-b-4 border-slate-950 pb-5">
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Los Neto</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Dashboard gerencial de vendas e estoque</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Visão estática para impressão/PDF com foco em receita, curva ABC, ruptura, excesso e prioridade de reposição.
            </p>
          </div>
          <div className="shrink-0 rounded-[8px] border border-slate-300 px-4 py-3 text-right">
            <p className="text-[10px] uppercase tracking-wide text-slate-500">Período</p>
            <p className="text-sm font-semibold">Jan/25 a Mar/26</p>
          </div>
        </div>
      </section>

      <section className="mt-5 grid grid-cols-4 gap-3">
        {kpis.map((kpi) => (
          <div key={kpi.titulo} className="rounded-[8px] border border-slate-200 p-3">
            <p className="text-[10px] font-medium text-slate-500">{kpi.titulo}</p>
            <p className="mt-2 text-xl font-semibold tracking-tight">{kpi.valor}</p>
            <p className="mt-1 text-[10px] text-slate-500">{kpi.detalhe}</p>
          </div>
        ))}
      </section>

      <section className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-[8px] border border-red-200 bg-red-50 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-red-700">Risco de ruptura</p>
          <p className="mt-2 text-2xl font-semibold">{riscoRuptura.length} refs.</p>
          <p className="mt-1 text-[11px] text-slate-600">{currency(totalRupturaReceita)} em receita relevante</p>
        </div>
        <div className="rounded-[8px] border border-amber-200 bg-amber-50 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-700">Excesso de estoque</p>
          <p className="mt-2 text-2xl font-semibold">{number(totalExcessoUnidades)} un.</p>
          <p className="mt-1 text-[11px] text-slate-600">Saldo concentrado em Classe C de baixo giro</p>
        </div>
        <div className="rounded-[8px] border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-700">Prioridade de reposição</p>
          <p className="mt-2 text-2xl font-semibold">{prioridadeReposicao.length} itens</p>
          <p className="mt-1 text-[11px] text-slate-600">{currency(totalReposicaoReceita)} em receita priorizada</p>
        </div>
      </section>

      <section className="mt-6 rounded-[8px] border border-slate-200 p-4">
        <div className="mb-3 flex items-end justify-between">
          <div>
            <h2 className="text-base font-semibold">Receita mensal</h2>
            <p className="text-[11px] text-slate-500">Escala visual simplificada para impressão.</p>
          </div>
          <p className="text-[11px] font-medium text-slate-600">Pico: Dez/25</p>
        </div>
        <div className="space-y-2">
          {receitaMensal.map((item) => (
            <div key={item.mes} className="grid grid-cols-[48px_1fr_86px] items-center gap-3 text-[10px]">
              <span className="font-medium text-slate-600">{item.mes}</span>
              <div className="h-2.5 rounded-full bg-slate-100">
                <div className="h-2.5 rounded-full bg-slate-950" style={{ width: `${(item.receita / maiorReceita) * 100}%` }} />
              </div>
              <span className="text-right font-semibold">{currency(item.receita)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-[8px] border border-slate-200 p-4">
          <h2 className="text-base font-semibold">Top referências por receita</h2>
          <div className="mt-3">
            {printTable(
              [
                { key: "nome", label: "Referência" },
                { key: "receita", label: "Receita", render: (v) => currency(v) },
              ],
              topReferencias,
            )}
          </div>
        </div>

        <div className="rounded-[8px] border border-slate-200 p-4">
          <h2 className="text-base font-semibold">ABC por produto</h2>
          <div className="mt-3">
            {printTable(
              [
                { key: "classe", label: "Classe" },
                { key: "qtdItens", label: "Produtos", render: (v) => number(v) },
                { key: "receita", label: "Receita", render: (v) => currency(v) },
              ],
              abcProduto,
            )}
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[8px] border border-red-200 p-4">
        <h2 className="text-base font-semibold text-red-800">Risco de ruptura</h2>
        <div className="mt-3">
          {printTable(
            [
              { key: "ref", label: "Referência" },
              { key: "classe", label: "ABC" },
              { key: "estoque", label: "Estoque", render: (v) => number(v) },
              { key: "qtdVendida", label: "Vendido", render: (v) => number(v) },
              { key: "receita", label: "Receita", render: (v) => currency(v) },
            ],
            riscoRuptura,
          )}
        </div>
      </section>

      <section className="mt-6 rounded-[8px] border border-amber-200 p-4">
        <h2 className="text-base font-semibold text-amber-800">Excesso de estoque</h2>
        <div className="mt-3">
          {printTable(
            [
              { key: "ref", label: "Referência" },
              { key: "classe", label: "ABC" },
              { key: "estoque", label: "Estoque", render: (v) => number(v) },
              { key: "qtdVendida", label: "Vendido", render: (v) => number(v) },
              { key: "receita", label: "Receita", render: (v) => currency(v) },
            ],
            excessoEstoque,
          )}
        </div>
      </section>

      <section className="mt-6 rounded-[8px] border border-emerald-200 p-4">
        <h2 className="text-base font-semibold text-emerald-800">Prioridade de reposição</h2>
        <div className="mt-3">
          {printTable(
            [
              { key: "ref", label: "Referência" },
              { key: "prioridade", label: "Prioridade" },
              { key: "classe", label: "ABC" },
              { key: "estoque", label: "Estoque", render: (v) => number(v) },
              { key: "receita", label: "Receita", render: (v) => currency(v) },
            ],
            prioridadeReposicao,
          )}
        </div>
      </section>

      <section className="mt-6 rounded-[8px] border border-slate-300 bg-slate-50 p-5">
        <h2 className="text-base font-semibold">Síntese executiva</h2>
        <p className="mt-2 text-xs leading-6 text-slate-700">
          A análise indica concentração de receita em itens de Classe A, com risco imediato de ruptura em referências
          relevantes e excesso em itens de Classe C com baixo giro. A recomendação é priorizar reposição dos itens sem
          cobertura, revisar compras de baixa movimentação e ajustar a grade de numerações conforme a demanda observada.
        </p>
      </section>
    </main>
  );
}

