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
  { titulo: "Quantidade vendida", valor: "38.824 un.", detalhe: "Volume total vendido", icon: ShoppingCart },
  { titulo: "Estoque atual", valor: "66.311 un.", detalhe: "Saldo físico consolidado", icon: Boxes },
  { titulo: "Baixo giro em estoque", valor: "R$ 2.174.734,97", detalhe: "13.754 produtos/códigos com 1 a 10 vendas no período", icon: PackageSearch },
  { titulo: "Estoque sem saída", valor: "26.431 un.", detalhe: "11.733 produtos/códigos sem registro de saída", icon: PackageX },
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
  { mes: "Mar/25", qtd: 2476 },
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
  { ref: "TENIS ADIDAS RESPONSE RUNNER IH6100 PRETO/BRANCO/PRETO 40", estoque: 2, receita: 6569.78, qtdVendida: 22, classe: "A" },
  { ref: "MOCHILA CLIO RB24023 ROSA UNICO", estoque: 1, receita: 5699.87, qtdVendida: 14, classe: "A" },
  { ref: "TENIS OLYMPIKUS CHALLENGER5 PRETO/CHUMBO 43", estoque: 3, receita: 5390.82, qtdVendida: 18, classe: "A" },
  { ref: "BOLSA IMPT FEMININA BAOLUOLAN BL21014 DIVERSOS UNICO", estoque: 2, receita: 5111.68, qtdVendida: 30, classe: "A" },
  { ref: "BOLSA IMPT FEMININA BAOLUOLAN BL21015 DIVERSOS UNICO", estoque: 3, receita: 4630.74, qtdVendida: 26, classe: "A" },
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

const brandRed = "#d63a17";
const brandRedSoft = "#ef6a3a";
const brandLine = "#3a3a3a";
const brandMuted = "#a8a29e";
const pieColors = [brandRed, "#6b6b6b", "#343434"];

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
  return <section className={cx("rounded-[10px] border border-stone-800 bg-[#242424] shadow-[0_18px_45px_rgba(0,0,0,0.22)]", className)}>{children}</section>;
}

function CardHeader({ className = "", children }) {
  return <div className={cx("px-5 pt-5", className)}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={cx("px-5 pb-5", className)}>{children}</div>;
}

function CardTitle({ className = "", children }) {
  return <h3 className={cx("text-lg font-semibold tracking-tight text-stone-100", className)}>{children}</h3>;
}

function CardDescription({ className = "", children }) {
  return <p className={cx("mt-1 text-sm leading-6 text-stone-400", className)}>{children}</p>;
}

function Badge({ className = "", children }) {
  return (
    <span className={cx("inline-flex items-center rounded-[6px] px-2.5 py-1 text-xs font-semibold", className)}>
      {children}
    </span>
  );
}

function LogoMark() {
  return (
    <div className="inline-flex items-center rounded-[10px] border border-[#5a2419] bg-[#151515] px-4 py-2 shadow-[0_0_34px_rgba(214,58,23,0.18)]">
      <span className="text-xl font-semibold uppercase tracking-[0.22em] text-[#e34a22] sm:text-2xl">Los Neto</span>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e34a22]">{eyebrow}</p>
        <h2 className="text-base font-semibold tracking-tight text-stone-100 sm:text-lg">{title}</h2>
      </div>
      {description ? <p className="max-w-xl text-xs leading-5 text-stone-500 sm:text-right">{description}</p> : null}
    </div>
  );
}

export default function DashboardLosNeto() {
  const chartTooltip = {
    contentStyle: {
      borderRadius: 8,
      border: "1px solid #4a2a22",
      background: "#f7f3ee",
      boxShadow: "0 14px 30px rgba(0, 0, 0, 0.24)",
      fontSize: 12,
    },
    labelStyle: { color: "#1c1c1c", fontWeight: 700 },
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
      title: "Reposição",
      value: `${prioridadeReposicao.length} itens`,
      metric: currency(totalReposicaoReceita),
      label: "priorizados",
      className: "border-[#8e2415] bg-[#351915] text-[#ff7a55]",
    },
    {
      title: "Ruptura",
      value: `${riscoRuptura.length} itens`,
      metric: currency(totalRupturaReceita),
      label: "baixo estoque",
      className: "border-[#a9462d] bg-[#332018] text-[#ff9a78]",
    },
    {
      title: "Excesso",
      value: `${number(totalExcessoUnidades)} un.`,
      metric: `${excessoEstoque.length} refs.`,
      label: "baixo giro",
      className: "border-[#7a5c2e] bg-[#332916] text-[#f2c36b]",
    },
  ];

  const executiveInsights = [
    { title: "Receita concentrada", text: "Classe A sustenta a maior parte do faturamento e deve guiar reposição." },
    { title: "Ruptura próxima", text: "Itens Classe A ainda vendem bem, mas têm cobertura curta de estoque." },
    { title: "Capital parado", text: "Classe C reúne saldos altos com baixa movimentação." },
    { title: "Ação recomendada", text: "Repor Classe A, revisar compras de baixo giro e ajustar grade por numeração." },
  ];

  const TruncatedText = ({ value }) => (
    <span className="group relative block max-w-full" title={value}>
      <span className="block truncate">{value}</span>
      <span className="pointer-events-none absolute left-0 top-full z-50 mt-1 hidden max-w-[360px] rounded-[8px] border border-[#4a2a22] bg-[#f7f3ee] px-3 py-2 text-[11px] font-medium leading-4 text-[#1c1c1c] shadow-xl shadow-black/20 group-hover:block">
        {value}
      </span>
    </span>
  );

  const ScatterTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;

    const item = payload[0].payload;
    return (
      <div className="max-w-[280px] rounded-[8px] border border-[#4a2a22] bg-[#f7f3ee] p-3 text-xs shadow-xl shadow-black/20">
        <p className="font-semibold leading-5 text-[#1c1c1c]">{item.ref}</p>
        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-stone-600">
          <span>Vendido</span>
          <span className="text-right font-semibold text-[#1c1c1c]">{number(item.venda)} un.</span>
          <span>Estoque</span>
          <span className="text-right font-semibold text-[#1c1c1c]">{number(item.estoque)} un.</span>
          <span>Receita</span>
          <span className="text-right font-semibold text-[#1c1c1c]">{currency(item.receita)}</span>
        </div>
      </div>
    );
  };

  const NumeracaoTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;

    const venda = payload[0].value;
    return (
      <div className="rounded-[8px] border border-[#4a2a22] bg-[#f7f3ee] p-3 text-xs shadow-xl shadow-black/20">
        <p className="font-semibold text-[#1c1c1c]">Numeração {label}</p>
        <div className="mt-2 flex items-center justify-between gap-8 text-stone-600">
          <span>Quantidade vendida</span>
          <span className="font-semibold text-[#1c1c1c]">{number(venda)} un.</span>
        </div>
      </div>
    );
  };

  const compactTable = (columns, data, tone = "slate") => (
    <div className="min-w-0 overflow-x-auto rounded-[8px] border border-stone-800">
      <table className="min-w-[560px] table-fixed text-[12px] sm:w-full sm:min-w-0">
        <thead className="bg-[#1b1b1b] text-[10px] uppercase tracking-wide text-stone-400">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={cx("px-3 py-2 text-left font-semibold", column.className)}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-800 bg-[#242424]">
          {data.map((row, index) => (
            <tr key={`${row.ref || row.nome || row.classe || index}`} className="hover:bg-[#2d2d2d]">
              {columns.map((column) => (
                <td key={column.key} className={cx("px-3 py-2 align-middle text-stone-300", column.className)}>
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
      red: "bg-[#3a1b16] text-[#ff8a66] ring-[#79301f]",
      amber: "bg-[#332916] text-[#f2c36b] ring-[#74572b]",
      blue: "bg-[#2f211d] text-[#ff9a78] ring-[#884027]",
      slate: "bg-stone-800 text-stone-300 ring-stone-700",
    };

    return <span className={cx("inline-flex rounded px-2 py-0.5 text-[11px] font-semibold ring-1", styles[tone])}>{value}</span>;
  };

  const rankingChart = (data, color) => (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid stroke={brandLine} strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" tick={{ fill: brandMuted, fontSize: 10 }} tickFormatter={(value) => `${Math.round(value / 1000)}k`} axisLine={false} tickLine={false} />
        <YAxis dataKey="nome" type="category" width={86} tick={{ fill: "#d6d3d1", fontSize: 10 }} axisLine={false} tickLine={false} />
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
          <div className="shrink-0 rounded-[8px] border border-[#4a2a22] bg-[#1b1b1b] px-2.5 py-1.5 text-right">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-500">Total</p>
            <p className="text-xs font-semibold text-stone-100">{number(totalItems)} itens</p>
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
                    <Cell key={entry.name} fill={pieColors[index]} />
                  ))}
                </Pie>
                <Tooltip
                  {...chartTooltip}
                  formatter={(value, name, props) => [percent(value), props.payload.name]}
                />
              </PieChart>
            </ResponsiveContainer>
            </div>
            <div className="mt-1 grid grid-cols-3 gap-1 text-center text-[10px] font-semibold text-stone-500">
              <span>A</span>
              <span>B</span>
              <span>C</span>
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-[8px] border border-stone-800">
            <table className="w-full table-fixed text-[12px]">
              <thead className="bg-[#1b1b1b] text-[10px] uppercase tracking-wide text-stone-400">
                <tr>
                  <th className="w-[64px] px-2 py-2 text-left font-semibold">Classe</th>
                  <th className="w-[68px] px-2 py-2 text-right font-semibold">% valor</th>
                  <th className="w-[68px] px-2 py-2 text-right font-semibold">% itens</th>
                  <th className="w-[76px] px-2 py-2 text-right font-semibold">{quantityLabel}</th>
                  <th className="px-2 py-2 text-right font-semibold">Receita</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 bg-[#242424]">
                {tableData.map((row) => {
                  const isA = row.classe === "A";
                  return (
                    <tr key={row.classe} className={isA ? "bg-[#331d18]" : "hover:bg-[#2d2d2d]"}>
                      <td className="px-2 py-2">
                        <span className={cx(
                          "inline-flex rounded px-2 py-0.5 text-[11px] font-semibold ring-1",
                          isA ? "bg-[#d63a17] text-white ring-[#ef6a3a]" : "bg-stone-800 text-stone-300 ring-stone-700",
                        )}>
                          {row.classe}
                        </span>
                      </td>
                      <td className={cx("px-2 py-2 text-right tabular-nums", isA ? "font-semibold text-[#ff9a78]" : "text-stone-300")}>{percent(row.pctValor)}</td>
                      <td className={cx("px-2 py-2 text-right tabular-nums", isA ? "font-semibold text-[#ff9a78]" : "text-stone-300")}>{percent(row.pctItens)}</td>
                      <td className="px-2 py-2 text-right tabular-nums text-stone-300">{number(row[quantityKey])}</td>
                      <td className="px-2 py-2 text-right tabular-nums font-medium text-stone-100">{currency(row.receita)}</td>
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
    <main className="min-h-screen bg-[#1c1c1c] text-stone-100">
      <div className="mx-auto max-w-[1360px] px-3 py-3 sm:px-4 lg:px-5">
        <header className="mb-3 rounded-[14px] border border-[#3a211c] bg-[linear-gradient(135deg,#242424_0%,#1a1a1a_58%,#241713_100%)] px-4 py-4 shadow-[0_22px_55px_rgba(0,0,0,0.28)] sm:px-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <LogoMark />
                <span className="rounded border border-stone-700 bg-[#171717] px-2.5 py-1 text-[11px] font-semibold text-stone-300">Jan/25 a Mar/26</span>
              </div>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-stone-100 sm:text-3xl">
                Análise Vendas x Estoque
              </h1>
            </div>
            <div className="min-w-0 lg:w-[560px]">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e34a22]">Itens prioritários</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {decisionCards.map((card) => (
                <div key={card.title} className={cx("rounded-[10px] border px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]", card.className)}>
                  <p className="text-[10px] font-semibold uppercase tracking-wide">{card.title}</p>
                  <p className="mt-1 text-lg font-semibold leading-none text-stone-100">{card.value}</p>
                  <p className="mt-1 truncate text-[11px] font-medium">{card.metric} · {card.label}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <Card key={kpi.titulo} className="rounded-[10px] border-stone-800 bg-[#242424]">
                <CardContent className="p-3.5 sm:p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-400 sm:text-[11px]">{kpi.titulo}</p>
                      <p className="mt-2 text-xl font-semibold tracking-tight text-stone-100 sm:text-2xl">{kpi.valor}</p>
                      <p className="mt-1 text-[11px] leading-4 text-stone-500 sm:text-xs">{kpi.detalhe}</p>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-[#331d18] text-[#ff7148]">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="mt-5">
          <SectionTitle
            eyebrow="Vendas"
            title="Evolução do período"
            description="Receita e volume mostram o comportamento principal antes da leitura de estoque."
          />
          <div className="grid gap-3 xl:grid-cols-[1.35fr_0.8fr]">
          <Card className="min-w-0 rounded-[10px]">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base">Receita mensal</CardTitle>
              <CardDescription className="text-xs">Evolução do faturamento bruto.</CardDescription>
            </CardHeader>
            <CardContent className="h-[260px] px-3 pb-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={receitaMensal} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
                  <CartesianGrid stroke={brandLine} strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="mes" tick={{ fill: brandMuted, fontSize: 10 }} interval={1} height={28} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: brandMuted, fontSize: 10 }} tickFormatter={(value) => `${Math.round(value / 1000)}k`} width={36} axisLine={false} tickLine={false} />
                  <Tooltip {...chartTooltip} formatter={(value) => currency(value)} />
                  <Line type="monotone" dataKey="receita" stroke={brandRed} strokeWidth={2.5} dot={false} activeDot={{ r: 4, fill: brandRedSoft }} />
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
                  <CartesianGrid stroke={brandLine} strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="mes" tick={{ fill: brandMuted, fontSize: 10 }} interval={2} height={28} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: brandMuted, fontSize: 10 }} tickFormatter={(value) => `${Math.round(value / 1000)}k`} width={34} axisLine={false} tickLine={false} />
                  <Tooltip {...chartTooltip} formatter={(value) => `${number(value)} un.`} />
                  <Bar dataKey="qtd" fill={brandRed} radius={[4, 4, 0, 0]} barSize={12} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          </div>
        </section>

        <section className="mt-5">
          <SectionTitle
            eyebrow="ABC"
            title="Concentração de valor"
            description="Classes A, B e C indicam onde o faturamento está concentrado e onde há risco de acúmulo."
          />
          <div className="grid gap-3 xl:grid-cols-2">
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
          </div>
        </section>

        <section className="mt-5">
          <SectionTitle
            eyebrow="Vendas"
            title="Rankings comerciais"
            description="Principais cortes de receita para orientar compras, exposição e reposição."
          />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1fr]">
          {[
            { title: "Produtos", data: topProdutos, color: brandRed },
            { title: "Referências", data: topReferencias, color: "#b74127" },
            { title: "Marcas", data: topMarcas, color: "#7a7a7a" },
            { title: "Numerações", data: topNumeracoes, color: "#5f5f5f" },
          ].map((item) => (
            <Card key={item.title} className="min-w-0 rounded-[10px]">
              <CardHeader className="px-4 pt-4">
                <CardTitle className="text-sm">Top 5 {item.title}</CardTitle>
              </CardHeader>
              <CardContent className="h-[220px] px-2 pb-3">{rankingChart(item.data, item.color)}</CardContent>
            </Card>
          ))}
          </div>
        </section>

        <section className="mt-5">
          <SectionTitle
            eyebrow="Estoque"
            title="Grade e cobertura"
            description="A matriz cruza venda e estoque para separar oportunidade, equilíbrio, ruptura e excesso."
          />
          <div className="grid gap-3 xl:grid-cols-2">
          <Card className="min-w-0 rounded-[10px]">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base">Vendas por Numeração</CardTitle>
              <CardDescription className="text-xs">Quantidade vendida por numeração no período.</CardDescription>
            </CardHeader>
            <CardContent className="h-[260px] px-3 pb-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={vendasPorNumeracao} margin={{ top: 10, right: 4, bottom: 0, left: -4 }}>
                  <CartesianGrid stroke={brandLine} strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="numeracao" tick={{ fill: brandMuted, fontSize: 10 }} interval={0} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: brandMuted, fontSize: 10 }} tickFormatter={(value) => `${Math.round(value / 1000)}k`} width={34} axisLine={false} tickLine={false} />
                  <Tooltip content={<NumeracaoTooltip />} cursor={{ fill: "rgba(214, 58, 23, 0.08)" }} />
                  <Bar dataKey="venda" name="Vendas" radius={[4, 4, 0, 0]} barSize={10}>
                    {vendasPorNumeracao.map((entry) => (
                      <Cell
                        key={entry.numeracao}
                        fill={entry.venda >= 3000 ? brandRed : entry.venda >= 2000 ? "#a9462d" : "#6b6b6b"}
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
            <CardContent className="h-[280px] min-w-0 px-3 pb-3">
              <div className="h-full min-w-0 overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 10, right: 14, bottom: 12, left: 14 }}>
                    <CartesianGrid stroke={brandLine} strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="venda" name="Venda" tick={{ fill: brandMuted, fontSize: 10 }} height={28} axisLine={false} tickLine={false} />
                    <YAxis type="number" dataKey="estoque" name="Estoque" tick={{ fill: brandMuted, fontSize: 10 }} width={44} axisLine={false} tickLine={false} />
                    <ZAxis type="number" dataKey="receita" range={[60, 260]} />
                    <Tooltip content={<ScatterTooltip />} cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter data={scatterData} name="Referências" fill={brandRed} />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          </div>
        </section>

        <section className="mt-5">
          <SectionTitle
            eyebrow="Ação"
            title="Itens acionáveis"
            description="Ruptura, reposição e excesso aparecem separados para reduzir redundância e facilitar decisão."
          />
          <div className="grid gap-3 xl:grid-cols-3">
          <Card className="min-w-0 rounded-[10px] border-[#a9462d] bg-[#2c1d17]">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base text-[#ff9a78]">Risco de ruptura</CardTitle>
              <CardDescription className="text-xs">Itens Classe A com venda e baixa cobertura.</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              {compactTable(
                [
                  { key: "ref", label: "Produto", className: "w-[42%]" },
                  { key: "classe", label: "ABC", className: "w-[54px]", render: (v) => severityBadge(v, "red") },
                  { key: "qtdVendida", label: "Vendas", className: "w-[64px]", render: (v) => number(v) },
                  { key: "estoque", label: "Est.", className: "w-[58px]", render: (v) => <span className="font-semibold text-[#ff9a78]">{number(v)}</span> },
                  { key: "receita", label: "Receita", render: (v) => currency(v) },
                ],
                riscoRuptura,
                "red",
              )}
            </CardContent>
          </Card>

          <Card className="min-w-0 rounded-[10px] border-[#8e2415] bg-[#301916]">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base text-[#ff7a55]">Prioridade de reposição</CardTitle>
              <CardDescription className="text-xs">Itens zerados com receita relevante.</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              {compactTable(
                [
                  { key: "ref", label: "Produto", className: "w-[42%]" },
                  { key: "prioridade", label: "Prior.", className: "w-[72px]", render: (v) => severityBadge(v, "red") },
                  { key: "estoque", label: "Est.", className: "w-[58px]", render: (v) => <span className="font-semibold text-[#ff7a55]">{number(v)}</span> },
                  { key: "qtdVendida", label: "Vendas", className: "w-[64px]", render: (v) => number(v) },
                  { key: "receita", label: "Receita", render: (v) => currency(v) },
                ],
                prioridadeReposicao,
                "red",
              )}
            </CardContent>
          </Card>

          <Card className="min-w-0 rounded-[10px] border-[#74572b] bg-[#252119]">
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-base text-[#f2c36b]">Excesso de estoque</CardTitle>
              <CardDescription className="text-xs">Alto saldo com baixa venda no período.</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              {compactTable(
                [
                  { key: "ref", label: "Produto", className: "w-[42%]" },
                  { key: "classe", label: "ABC", className: "w-[54px]", render: (v) => severityBadge(v, "amber") },
                  { key: "estoque", label: "Est.", className: "w-[64px]", render: (v) => <span className="font-semibold text-[#f2c36b]">{number(v)}</span> },
                  { key: "qtdVendida", label: "Venda", className: "w-[64px]", render: (v) => number(v) },
                ],
                excessoEstoque,
                "amber",
              )}
            </CardContent>
          </Card>
          </div>
        </section>

        <section className="mt-3 grid gap-3 lg:grid-cols-4">
          {executiveInsights.map((item) => (
            <Card key={item.title} className="rounded-[10px]">
              <CardContent className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#ff7148]">{item.title}</p>
                <p className="mt-2 text-sm leading-5 text-stone-300">{item.text}</p>
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
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Análise Vendas x Estoque</h1>
          </div>
          <div className="shrink-0 rounded-[8px] border border-slate-300 px-4 py-3 text-right">
            <p className="text-[10px] uppercase tracking-wide text-slate-500">Período</p>
            <p className="text-sm font-semibold">Jan/25 a Mar/26</p>
          </div>
        </div>
      </section>

      <section className="mt-5 grid grid-cols-5 gap-3">
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

