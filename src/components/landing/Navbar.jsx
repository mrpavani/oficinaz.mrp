import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const LOGO_NAV = "https://media.base44.com/images/public/69cffc3a30bf014e2890f5d3/cba2e6a1d_Oficinaz-LogoOficial.png";
const LOGO_NAV_WHITE = "https://media.base44.com/images/public/69cffc3a30bf014e2890f5d3/cba2e6a1d_Oficinaz-LogoOficial.png";

const links = [
  { label: "O que faz", href: "#features" },
  { label: "Como usar", href: "#how" },
  { label: "Valores", href: "#pricing" },
  { label: "Conhecer mais", href: "#demo" }];

const produtos = [
  { label: "ERP", href: "#", badge: null },
  { label: "Contabilidade", href: "#", badge: "em breve" },
  { label: "Checklist Automotivo", href: "#", badge: "em breve" },
  { label: "Central de Compras", href: "#parceiros", badge: "em breve" },
  { label: "Agendamento de Serviços", href: "#", badge: "em breve" },
  { label: "Link de Pagamentos", href: "#", badge: "em breve" }
];


export default function Navbar({ barHeight = 44 }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: barHeight, left: 0, right: 0, zIndex: 100,
      transition: "top 0.25s ease",
      background: "#ffffff",
      borderBottom: "1px solid #e2e6ec",
      boxShadow: "0 1px 12px rgba(17,29,46,0.06)"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <div style={{ height: 56, overflow: "hidden", display: "flex", alignItems: "center" }}>
            <img
              src={LOGO_NAV}
              alt="Oficinaz"
              style={{
                height: 224,
                width: "auto",
                objectFit: "contain",
                display: "block",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </a>

        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="hidden-mobile">
          <div style={{ position: "relative" }}
            onMouseEnter={() => setProdutosOpen(true)}
            onMouseLeave={() => setProdutosOpen(false)}>
            <button style={{ background: "none", border: "none", color: "#5a6778", fontSize: 15, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, transition: "color 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#2ec4a0"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#5a6778"}>
              Produtos
              <ChevronDown size={16} style={{ transition: "transform 0.2s", transform: produtosOpen ? "rotate(180deg)" : "rotate(0)" }} />
            </button>
            {produtosOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, marginTop: 8, background: "#fff", borderRadius: 12, border: "1px solid #e2e6ec", boxShadow: "0 8px 24px rgba(17,29,46,0.1)", minWidth: 220 }}>
                {produtos.map((p) => (
                  <a key={p.label} href={p.href} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "12px 16px", color: "#5a6778", textDecoration: "none", fontSize: 14, fontWeight: 500, borderBottom: "1px solid #f0f2f5", transition: "background 0.2s", gap: 4 }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#f8f9fb"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <span>{p.label}</span>
                    {p.badge && <span style={{ fontSize: 9, fontWeight: 600, color: "#a0acbb", background: "#f0f2f5", padding: "1px 6px", borderRadius: 100 }}>{p.badge}</span>}
                  </a>
                ))}
              </div>
            )}
          </div>
          {links.map((l) =>
            <a key={l.href} href={l.href} style={{ color: "#5a6778", textDecoration: "none", fontSize: 15, fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={(e) => e.target.style.color = "#2ec4a0"}
              onMouseLeave={(e) => e.target.style.color = "#5a6778"}>
              {l.label}
            </a>
          )}
          <a href="https://app.oficinaz.com/" target="_blank" style={{ color: "#5a6778", textDecoration: "none", fontSize: 15, fontWeight: 500, transition: "color 0.2s" }}
            onMouseEnter={(e) => e.target.style.color = "#2ec4a0"}
            onMouseLeave={(e) => e.target.style.color = "#5a6778"}>
            Login
          </a>
          <a href="#pricing" style={{
            background: "#2ec4a0", color: "#fff",
            padding: "10px 24px", borderRadius: 8,
            textDecoration: "none", fontSize: 15, fontWeight: 700,
            transition: "background 0.2s"
          }}
            onMouseEnter={(e) => e.target.style.background = "#1eb880"}
            onMouseLeave={(e) => e.target.style.background = "#2ec4a0"}>
            Começar grátis
          </a>
        </div>

        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#111d2e", cursor: "pointer", display: "none" }} className="show-mobile">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open &&
        <div style={{ background: "#fff", padding: "16px 24px 24px", borderTop: "1px solid #e2e6ec", boxShadow: "0 8px 24px rgba(17,29,46,0.1)" }}>
          <div>
            <button onClick={() => setProdutosOpen(!produtosOpen)} style={{ background: "none", border: "none", color: "#5a6778", fontSize: 16, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "12px 0", borderBottom: "1px solid #f0f2f5" }}>
              Produtos
              <ChevronDown size={16} style={{ transition: "transform 0.2s", transform: produtosOpen ? "rotate(180deg)" : "rotate(0)" }} />
            </button>
            {produtosOpen && (
              <div style={{ paddingLeft: 16 }}>
                {produtos.map((p) => (
                  <a key={p.label} href={p.href} onClick={() => setOpen(false)} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", color: "#5a6778", textDecoration: "none", fontSize: 15, fontWeight: 500, padding: "10px 0", borderBottom: "1px solid #f0f2f5", gap: 3 }}>
                    <span>{p.label}</span>
                    {p.badge && <span style={{ fontSize: 8, fontWeight: 600, color: "#a0acbb", background: "#f0f2f5", padding: "1px 5px", borderRadius: 100 }}>{p.badge}</span>}
                  </a>
                ))}
              </div>
            )}
          </div>
          {links.map((l) =>
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", color: "#5a6778", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "12px 0", borderBottom: "1px solid #f0f2f5" }}>
              {l.label}
            </a>
          )}
          <a href="/dashboard" onClick={() => setOpen(false)} style={{ display: "block", color: "#5a6778", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "12px 0", borderBottom: "1px solid #f0f2f5" }}>
            Login
          </a>
          <a href="#pricing" onClick={() => setOpen(false)} style={{
            display: "block", marginTop: 16, background: "#2ec4a0", color: "#fff",
            padding: "14px 24px", borderRadius: 8, textDecoration: "none", fontSize: 16, fontWeight: 700, textAlign: "center"
          }}>
            Começar grátis
          </a>
        </div>
      }

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </nav>);

}