import { useState } from "react";
import { ArrowRight, CheckCircle, ClipboardList } from "lucide-react";

const bullets = [
  "Ordens de serviços criadas em segundos",
  "Orçamentos enviados pelo WhatsApp",
  "Estoque atualizado automaticamente",
  "Financeiro, caixa e relatórios em tempo real",
];

const barHeights = [28, 42, 35, 58, 48, 74, 100];
const barDays   = ["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];

function getTheme(dark) {
  return dark ? {
    winBg: "linear-gradient(160deg, rgba(42,66,100,0.88) 0%, rgba(32,52,82,0.92) 100%)",
    winBorder: "1px solid rgba(255,255,255,0.13)",
    winShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.10)",
    titleBg: "rgba(255,255,255,0.04)",
    titleBorder: "1px solid rgba(255,255,255,0.07)",
    urlBg: "rgba(255,255,255,0.07)",
    urlText: "rgba(196,216,235,0.55)",
    sidebarBg: "rgba(255,255,255,0.03)",
    sidebarBorder: "1px solid rgba(255,255,255,0.06)",
    sidebarIcon: "rgba(142,176,208,0.35)",
    textPrimary: "rgba(255,255,255,0.92)",
    textSub: "rgba(142,176,208,0.45)",
    textMuted: "rgba(142,176,208,0.55)",
    textSecondary: "rgba(142,176,208,0.6)",
    textLink: "rgba(62,100,144,0.8)",
    cardBg: "rgba(255,255,255,0.04)",
    cardBorder: "1px solid rgba(255,255,255,0.07)",
    cardTopBorder: "rgba(142,176,208,0.20)",
    chartBg: "rgba(255,255,255,0.03)",
    chartBorder: "1px solid rgba(255,255,255,0.06)",
    chartDay: "rgba(62,100,144,0.7)",
    barAlpha: (i) => `rgba(46,196,160,${0.12 + i * 0.055})`,
    listBg: "rgba(255,255,255,0.03)",
    listBorder: "1px solid rgba(255,255,255,0.06)",
    listRowBorder: "rgba(255,255,255,0.04)",
    listText: "rgba(196,216,235,0.88)",
    listSub: "rgba(62,100,144,0.8)",
    toastBg: "linear-gradient(135deg, rgba(36,58,88,0.97) 0%, rgba(24,44,68,0.98) 100%)",
    toastBorder: "1px solid rgba(255,255,255,0.13)",
    toastText: "rgba(255,255,255,0.92)",
    toastShadow: "0 8px 28px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.08)",
    mobileBg: "linear-gradient(160deg, rgba(42,66,100,0.88) 0%, rgba(32,52,82,0.92) 100%)",
    mobileBorder: "1px solid rgba(255,255,255,0.16)",
    mobileShadow: "0 24px 60px rgba(0,0,0,0.60), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.12)",
    mobileHeaderBorder: "1px solid rgba(255,255,255,0.07)",
    mobileCardBg: (h) => h ? "linear-gradient(135deg,rgba(46,196,160,0.16)0%,rgba(30,184,128,0.08)100%)" : "rgba(255,255,255,0.04)",
    mobileCardBorder: (h) => h ? "1px solid rgba(46,196,160,0.30)" : "1px solid rgba(255,255,255,0.07)",
    mobileText: "rgba(255,255,255,0.88)",
    mobileSub: "rgba(142,176,208,0.55)",
    mobileOSBg: "rgba(255,255,255,0.03)",
    mobileOSBorder: "1px solid rgba(255,255,255,0.06)",
    mobileNavBorder: "1px solid rgba(255,255,255,0.08)",
    mobileNavIcon: "rgba(142,176,208,0.40)",
  } : {
    winBg: "#ffffff",
    winBorder: "1px solid #e2e6ec",
    winShadow: "0 32px 80px rgba(17,29,46,0.13), 0 0 0 1px rgba(17,29,46,0.04)",
    titleBg: "#f5f7fa",
    titleBorder: "1px solid #e2e6ec",
    urlBg: "#eef0f3",
    urlText: "#7a8897",
    sidebarBg: "#fafbfc",
    sidebarBorder: "1px solid #e8ebf0",
    sidebarIcon: "#c4cdd8",
    textPrimary: "#111d2e",
    textSub: "#7a8897",
    textMuted: "#7a8897",
    textSecondary: "#7a8897",
    textLink: "#5a6778",
    cardBg: "#f8f9fb",
    cardBorder: "1px solid #e2e6ec",
    cardTopBorder: "#cdd5df",
    chartBg: "#f8f9fb",
    chartBorder: "1px solid #e2e6ec",
    chartDay: "#a0acbb",
    barAlpha: (i) => `rgba(46,196,160,${0.18 + i * 0.08})`,
    listBg: "#f8f9fb",
    listBorder: "1px solid #e2e6ec",
    listRowBorder: "#edf0f4",
    listText: "#111d2e",
    listSub: "#7a8897",
    toastBg: "#ffffff",
    toastBorder: "1px solid #e2e6ec",
    toastText: "#111d2e",
    toastShadow: "0 8px 28px rgba(17,29,46,0.12)",
    mobileBg: "#ffffff",
    mobileBorder: "1px solid #e2e6ec",
    mobileShadow: "0 24px 60px rgba(17,29,46,0.13), 0 0 0 1px rgba(17,29,46,0.04)",
    mobileHeaderBorder: "1px solid #e8ebf0",
    mobileCardBg: (h) => h ? "linear-gradient(135deg,rgba(46,196,160,0.10)0%,rgba(30,184,128,0.05)100%)" : "#f8f9fb",
    mobileCardBorder: (h) => h ? "1px solid rgba(46,196,160,0.30)" : "1px solid #e2e6ec",
    mobileText: "#111d2e",
    mobileSub: "#7a8897",
    mobileOSBg: "#f8f9fb",
    mobileOSBorder: "1px solid #e8ebf0",
    mobileNavBorder: "1px solid #e8ebf0",
    mobileNavIcon: "#c4cdd8",
  };
}

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  const t = getTheme(darkMode);

  return (
    <section className="hero-section" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "flex-start",
      position: "relative",
      overflow: "hidden",
      paddingTop: 88,
      paddingBottom: 48,
      boxSizing: "border-box",
    }}>

      {/* ── BACKGROUNDS ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "url('/hero-workshop.png')",
        backgroundSize: "cover",
        backgroundPosition: "82% center",
        filter: "saturate(0.95) brightness(0.9)",
      }} />
      {/* escurece o rodapé da imagem */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to top, rgba(8,18,32,0.72) 0%, rgba(8,18,32,0.30) 28%, transparent 50%)",
        pointerEvents: "none",
      }} />
      {/* overlay principal — mais opaco no lado esquerdo (onde fica o texto) */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(105deg, rgba(5,12,24,0.90) 0%, rgba(10,20,38,0.65) 45%, rgba(8,30,24,0.10) 100%)",
      }} />
      {/* reforço lateral esquerdo extra */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(to right, rgba(5,14,28,0.50) 0%, rgba(5,14,28,0.20) 38%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 3, opacity: 0.018, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div style={{
        position: "absolute", top: "5%", right: "2%", width: 700, height: 700,
        zIndex: 3, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(46,196,160,0.09) 0%, transparent 65%)",
      }} />

      {/* ── CONTENT ── */}
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "clamp(24px, 6vh, 72px) 32px 0",
        position: "relative", zIndex: 4, width: "100%",
      }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: "clamp(32px, 4vw, 60px)", alignItems: "center" }}
          className="hero-grid"
        >

          {/* ── LEFT COPY ── */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 0,
            background: "linear-gradient(160deg, rgba(5,14,28,0.55) 0%, rgba(5,14,28,0.35) 100%)",
            backdropFilter: "blur(2px)",
            borderRadius: 16,
            padding: "28px 28px 24px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start",
              background: "rgba(46,196,160,0.08)", border: "1px solid rgba(46,196,160,0.25)",
              padding: "7px 15px", borderRadius: 100, marginBottom: 20, marginTop: 40,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2ec4a0", display: "inline-block" }} />
              <span style={{ color: "#2ec4a0", fontSize: 13.5, fontWeight: 600, letterSpacing: 0.4 }}>
                Sistema de gestão para oficinas mecânicas
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: "clamp(36px, 4.2vw, 54px)",
              fontWeight: 800, lineHeight: 1.1,
              color: "#fff", marginBottom: 18,
              letterSpacing: "-0.5px",
              textShadow: "0 2px 12px rgba(0,0,0,0.65), 0 1px 4px rgba(0,0,0,0.5)",
            }}>
              Sua oficina organizada e{" "}
              <span style={{ color: "#2ec4a0" }}>mais lucrativa.</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: "clamp(16px, 1.6vw, 19px)",
              color: "#c4d8eb", lineHeight: 1.7,
              marginBottom: 24, maxWidth: 480,
              fontWeight: 400,
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}>
              Da ordem de serviço à nota fiscal. Tudo em um único sistema.
              Acabe com papel, planilhas e tenha mais controle na sua oficina.
            </p>

            {/* Bullets */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 28 }}>
              {bullets.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 9 }}>
                  <CheckCircle size={18} style={{ color: "#2ec4a0", flexShrink: 0 }} />
                  <span style={{
                    color: "#c4d8eb", fontSize: "clamp(14px, 1.4vw, 16px)",
                    fontWeight: 500, textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                  }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginBottom: 14 }} className="hero-ctas">
              <a href="#pricing" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #1eb880 0%, #2ec4a0 100%)",
                color: "#fff", padding: "15px 30px", borderRadius: 10,
                textDecoration: "none", fontSize: 15, fontWeight: 700,
                boxShadow: "0 8px 32px rgba(46,196,160,0.40), inset 0 1px 0 rgba(255,255,255,0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(46,196,160,0.55), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(46,196,160,0.40), inset 0 1px 0 rgba(255,255,255,0.2)"; }}>
                Testar grátis por 30 dias <ArrowRight size={17} />
              </a>
              <a href="#demo" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                color: "#c4d8eb", padding: "15px 24px", borderRadius: 10,
                textDecoration: "none", fontSize: 15, fontWeight: 600,
                border: "1.5px solid rgba(255,255,255,0.28)",
                transition: "border-color 0.2s, color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(46,196,160,0.7)"; e.currentTarget.style.color = "#2ec4a0"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)"; e.currentTarget.style.color = "#c4d8eb"; }}>
                Agendar demonstração
              </a>
            </div>

            {/* Trust line */}
            <p style={{ color: "rgba(142,176,208,0.45)", fontSize: 13.5, margin: 0 }}>
              Sem cartão de crédito · Cancele quando quiser · Suporte incluso no plano
            </p>
          </div>

          {/* ── RIGHT: APP WINDOW ── */}
          <div style={{ position: "relative", paddingBottom: 56 }} className="hero-visual">

            {/* Ambient glow */}
            <div style={{
              position: "absolute", inset: -32, zIndex: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 75% 55% at 58% 50%, rgba(46,196,160,0.14) 0%, transparent 72%)",
            }} />

            {/* App window + toast wrapper */}
            <div style={{ position: "relative", zIndex: 1 }}>

              {/* App window */}
              <div style={{
                background: t.winBg,
                border: t.winBorder,
                borderRadius: 20,
                boxShadow: t.winShadow,
                backdropFilter: darkMode ? "blur(24px)" : "none",
                overflow: "hidden",
                transition: "background 0.35s, box-shadow 0.35s",
              }}>

                {/* Title bar */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "13px 18px",
                  background: t.titleBg,
                  borderBottom: t.titleBorder,
                  transition: "background 0.35s",
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                  <div style={{
                    flex: 1, marginLeft: 10,
                    background: t.urlBg, borderRadius: 6,
                    padding: "4px 12px", display: "flex", alignItems: "center", gap: 6,
                    transition: "background 0.35s",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2ec4a0" }} />
                    <span style={{ color: t.urlText, fontSize: 11, fontFamily: "'DM Mono', monospace", transition: "color 0.35s" }}>app.oficinaz.com</span>
                  </div>
                  {/* Dark/Light toggle */}
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    title={darkMode ? "Modo claro" : "Modo escuro"}
                    style={{
                      marginLeft: 8, display: "flex", alignItems: "center", gap: 5,
                      background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(17,29,46,0.07)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.14)" : "1px solid #d8dde6",
                      borderRadius: 20, padding: "3px 10px 3px 7px",
                      cursor: "pointer", transition: "all 0.25s",
                    }}
                  >
                    {darkMode ? (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(196,216,235,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                      </svg>
                    ) : (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5a6778" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    )}
                    <span style={{ fontSize: 9.5, fontWeight: 600, color: darkMode ? "rgba(196,216,235,0.7)" : "#7a8897" }}>
                      {darkMode ? "Claro" : "Escuro"}
                    </span>
                  </button>
                </div>

                {/* Body */}
                <div style={{ display: "flex" }}>

                  {/* Sidebar */}
                  <div style={{
                    width: 46, background: t.sidebarBg,
                    borderRight: t.sidebarBorder,
                    padding: "16px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
                    transition: "background 0.35s",
                  }}>
                    {[
                      { d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", active: true },
                      { d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                      { d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                      { d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
                    ].map((icon, i) => (
                      <div key={i} style={{
                        width: 30, height: 30, borderRadius: 8,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: icon.active ? "rgba(46,196,160,0.18)" : "transparent",
                        border: icon.active ? "1px solid rgba(46,196,160,0.35)" : "1px solid transparent",
                      }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                          stroke={icon.active ? "#2ec4a0" : t.sidebarIcon}
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={icon.d} />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Main panel */}
                  <div style={{ flex: 1, padding: "16px 16px 14px", background: darkMode ? "transparent" : "#ffffff", transition: "background 0.35s" }}>

                    {/* Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <div>
                        <div style={{ color: t.textPrimary, fontSize: 13, fontWeight: 700, transition: "color 0.35s" }}>Dashboard</div>
                        <div style={{ color: t.textSub, fontSize: 9.5, marginTop: 1, transition: "color 0.35s" }}>Atualizado agora mesmo</div>
                      </div>
                      <div style={{
                        display: "flex", alignItems: "center", gap: 5,
                        background: "rgba(46,196,160,0.10)", border: "1px solid rgba(46,196,160,0.22)",
                        borderRadius: 20, padding: "3px 9px",
                      }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#2ec4a0" }} />
                        <span style={{ color: "#2ec4a0", fontSize: 9, fontWeight: 700 }}>AO VIVO</span>
                      </div>
                    </div>

                    {/* KPI cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 12 }}>
                      {[
                        { label: "OS Abertas",  value: "42",    trend: "+8%",  highlight: false },
                        { label: "Faturamento", value: "R$38k", trend: "+14%", highlight: true  },
                        { label: "Satisfação",  value: "98%",   trend: "+2%",  highlight: false },
                      ].map((s) => (
                        <div key={s.label} style={{
                          borderRadius: 10, padding: "10px 11px",
                          background: s.highlight
                            ? "linear-gradient(135deg, rgba(46,196,160,0.16) 0%, rgba(30,184,128,0.08) 100%)"
                            : t.cardBg,
                          border: s.highlight ? "1px solid rgba(46,196,160,0.30)" : t.cardBorder,
                          borderTop: `2px solid ${s.highlight ? "#2ec4a0" : t.cardTopBorder}`,
                          transition: "background 0.35s, border 0.35s",
                        }}>
                          <div style={{ color: t.textMuted, fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 5, transition: "color 0.35s" }}>{s.label}</div>
                          <div style={{ color: s.highlight ? "#2ec4a0" : t.textPrimary, fontSize: 18, fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1, transition: "color 0.35s" }}>{s.value}</div>
                          <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 5 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#2ec4a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="18 15 12 9 6 15" />
                            </svg>
                            <span style={{ color: "#2ec4a0", fontSize: 9, fontWeight: 700 }}>{s.trend}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div style={{
                      background: t.chartBg, borderRadius: 10, padding: "11px 12px", marginBottom: 10,
                      border: t.chartBorder, transition: "background 0.35s",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <span style={{ color: t.textSecondary, fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6, transition: "color 0.35s" }}>Faturamento — 7 dias</span>
                        <span style={{ color: "#2ec4a0", fontSize: 10, fontWeight: 800 }}>R$ 38.4k</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 50 }}>
                        {barHeights.map((h, i) => (
                          <div key={i} style={{
                            flex: 1, height: `${h}%`, borderRadius: "3px 3px 2px 2px",
                            background: i === 6
                              ? "linear-gradient(180deg, #4dd4b4 0%, #1eb880 100%)"
                              : t.barAlpha(i),
                            boxShadow: i === 6 ? "0 0 8px rgba(46,196,160,0.45)" : "none",
                            transition: "background 0.35s",
                          }} />
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: 5, marginTop: 5 }}>
                        {barDays.map((d) => (
                          <span key={d} style={{ flex: 1, color: t.chartDay, fontSize: 8, textAlign: "center", transition: "color 0.35s" }}>{d}</span>
                        ))}
                      </div>
                    </div>

                    {/* OS list */}
                    <div style={{
                      background: t.listBg, borderRadius: 10, overflow: "hidden",
                      border: t.listBorder, transition: "background 0.35s",
                    }}>
                      <div style={{ padding: "7px 12px", borderBottom: `1px solid ${t.listRowBorder}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ color: t.textSecondary, fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6, transition: "color 0.35s" }}>Ordens de Serviço</span>
                        <span style={{ color: "#2ec4a0", fontSize: 9, fontWeight: 600 }}>Ver todas →</span>
                      </div>
                      {[
                        { os: "OS #2847", cliente: "Honda Civic 2019",  status: "Em andamento",    cor: "#febc2e", bg: "rgba(254,188,46,0.12)" },
                        { os: "OS #2846", cliente: "Toyota Corolla",    status: "Concluída",        cor: "#2ec4a0", bg: "rgba(46,196,160,0.12)" },
                        { os: "OS #2845", cliente: "Ford Ka 2020",      status: "Aguardando peças", cor: "#8eb0d0", bg: "rgba(142,176,208,0.10)" },
                      ].map((item, i) => (
                        <div key={item.os} style={{
                          padding: "8px 12px",
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          borderBottom: i < 2 ? `1px solid ${t.listRowBorder}` : "none",
                          transition: "border 0.35s",
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", background: item.cor, flexShrink: 0, boxShadow: `0 0 5px ${item.cor}80` }} />
                            <div>
                              <div style={{ color: t.listText, fontSize: 10.5, fontWeight: 600, transition: "color 0.35s" }}>{item.os}</div>
                              <div style={{ color: t.listSub, fontSize: 9, transition: "color 0.35s" }}>{item.cliente}</div>
                            </div>
                          </div>
                          <span style={{
                            background: item.bg, color: item.cor,
                            padding: "3px 8px", borderRadius: 100,
                            fontSize: 8.5, fontWeight: 700,
                            border: `1px solid ${item.cor}30`,
                          }}>{item.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Toast — Nova OS aberta (top-right) */}
              <div style={{
                position: "absolute", top: -18, right: -18, zIndex: 10,
                background: t.toastBg,
                border: t.toastBorder,
                borderRadius: 14, padding: "10px 14px",
                boxShadow: t.toastShadow,
                display: "flex", alignItems: "center", gap: 10,
                backdropFilter: darkMode ? "blur(16px)" : "none",
                transition: "background 0.35s, box-shadow 0.35s",
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: "linear-gradient(135deg, #1eb880, #2ec4a0)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  boxShadow: "0 4px 10px rgba(46,196,160,0.35)",
                }}><ClipboardList size={16} color="#fff" strokeWidth={2} /></div>
                <div>
                  <div style={{ color: t.toastText, fontSize: 11.5, fontWeight: 700, transition: "color 0.35s" }}>Nova OS aberta</div>
                  <div style={{ color: "#2ec4a0", fontSize: 9.5, fontWeight: 600 }}>Agora mesmo</div>
                </div>
              </div>

              {/* Toast — WhatsApp (bottom-left) */}
              <div style={{
                position: "absolute", bottom: -18, left: -18, zIndex: 10,
                background: t.toastBg,
                border: t.toastBorder,
                borderRadius: 14, padding: "10px 14px",
                boxShadow: t.toastShadow,
                display: "flex", alignItems: "center", gap: 10,
                backdropFilter: darkMode ? "blur(16px)" : "none",
                transition: "background 0.35s, box-shadow 0.35s",
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: "linear-gradient(135deg, #27b89e, #2ec4a0)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  boxShadow: "0 4px 10px rgba(46,196,160,0.35)",
                }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.527 3.66 1.438 5.168L2 22l4.98-1.418A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.073-1.117l-.292-.174-3.027.862.862-3.027-.174-.292A7.946 7.946 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.406-5.845c-.242-.121-1.432-.707-1.654-.787-.222-.08-.384-.121-.545.121-.161.242-.626.787-.767.948-.141.162-.282.182-.524.061-.242-.121-1.022-.376-1.946-1.2-.719-.641-1.204-1.433-1.345-1.675-.141-.242-.015-.373.106-.494.109-.108.242-.282.363-.424.121-.141.161-.242.242-.403.08-.162.04-.303-.02-.424-.061-.121-.545-1.314-.747-1.8-.197-.473-.397-.409-.545-.416l-.464-.008c-.161 0-.424.06-.646.303-.222.242-.848.829-.848 2.022s.868 2.344.99 2.506c.12.161 1.707 2.607 4.137 3.554.579.25 1.031.4 1.383.512.581.185 1.11.159 1.528.097.466-.069 1.432-.586 1.634-1.152.201-.565.201-1.049.141-1.151-.06-.1-.222-.161-.464-.282z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ color: t.toastText, fontSize: 11.5, fontWeight: 700, transition: "color 0.35s" }}>Orçamento enviado pelo WhatsApp</div>
                  <div style={{ color: "#2ec4a0", fontSize: 9.5, fontWeight: 600 }}>3 propostas aguardando resposta</div>
                </div>
              </div>

            </div>{/* end wrapper */}

            {/* ── MOBILE VIEW — bottom-right corner ── */}
            <div style={{
              position: "absolute", bottom: 0, right: -14, zIndex: 10,
              width: 202, minHeight: 437,
              display: "flex", flexDirection: "column",
              background: t.mobileBg,
              border: t.mobileBorder,
              borderRadius: 18,
              boxShadow: t.mobileShadow,
              backdropFilter: darkMode ? "blur(24px)" : "none",
              overflow: "hidden",
              transition: "background 0.35s, box-shadow 0.35s",
            }}>
              <div style={{
                padding: "10px 12px 8px", borderBottom: t.mobileHeaderBorder,
                display: "flex", justifyContent: "space-between", alignItems: "center",
                transition: "border 0.35s",
              }}>
                <div>
                  <div style={{ color: t.textPrimary, fontSize: 10, fontWeight: 700, transition: "color 0.35s" }}>Dashboard</div>
                  <div style={{ color: t.textSub, fontSize: 7.5, transition: "color 0.35s" }}>Atualizado agora mesmo</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 3, background: "rgba(46,196,160,0.10)", border: "1px solid rgba(46,196,160,0.22)", borderRadius: 20, padding: "2px 7px" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2ec4a0" }} />
                  <span style={{ color: "#2ec4a0", fontSize: 7.5, fontWeight: 700 }}>AO VIVO</span>
                </div>
              </div>
              <div style={{ padding: "8px 10px 6px", display: "flex", flexDirection: "column", gap: 5 }}>
                {[
                  { label: "OS Abertas",  value: "42",    trend: "+8%",  highlight: false },
                  { label: "Faturamento", value: "R$38k", trend: "+14%", highlight: true  },
                  { label: "Satisfação",  value: "98%",   trend: "+2%",  highlight: false },
                ].map((s) => (
                  <div key={s.label} style={{
                    borderRadius: 8, padding: "6px 9px",
                    background: t.mobileCardBg(s.highlight),
                    border: t.mobileCardBorder(s.highlight),
                    borderTop: `2px solid ${s.highlight ? "#2ec4a0" : t.cardTopBorder}`,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    transition: "background 0.35s",
                  }}>
                    <div>
                      <div style={{ color: t.mobileSub, fontSize: 7.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, transition: "color 0.35s" }}>{s.label}</div>
                      <div style={{ color: s.highlight ? "#2ec4a0" : t.mobileText, fontSize: 14, fontWeight: 800, transition: "color 0.35s" }}>{s.value}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#2ec4a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                      <span style={{ color: "#2ec4a0", fontSize: 8, fontWeight: 700 }}>{s.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "0 10px 10px", display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ color: t.mobileSub, fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2, transition: "color 0.35s" }}>Fat. 7 dias</div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 36 }}>
                  {barHeights.map((h, i) => (
                    <div key={i} style={{
                      flex: 1, height: `${h}%`, borderRadius: "2px 2px 1px 1px",
                      background: i === 6
                        ? "linear-gradient(180deg, #4dd4b4 0%, #1eb880 100%)"
                        : t.barAlpha(i),
                      transition: "background 0.35s",
                    }} />
                  ))}
                </div>
              </div>
              <div style={{ padding: "0 10px 8px", display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
                <div style={{ color: t.mobileSub, fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2, transition: "color 0.35s" }}>Ordens de serviço</div>
                {[
                  { os: "OS #2847", veiculo: "Honda Civic 2019",  status: "Em andamento", cor: "#febc2e" },
                  { os: "OS #2846", veiculo: "Toyota Corolla",    status: "Concluída",    cor: "#2ec4a0" },
                  { os: "OS #2845", veiculo: "VW Gol 2021",       status: "Aguardando",   cor: "#8e9cb3" },
                  { os: "OS #2844", veiculo: "Fiat Argo 2022",    status: "Concluída",    cor: "#2ec4a0" },
                ].map((item) => (
                  <div key={item.os} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "5px 8px", borderRadius: 7,
                    background: t.mobileOSBg, border: t.mobileOSBorder,
                    transition: "background 0.35s",
                  }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: item.cor, flexShrink: 0 }} />
                        <span style={{ color: t.mobileText, fontSize: 8.5, fontWeight: 700, transition: "color 0.35s" }}>{item.os}</span>
                      </div>
                      <div style={{ color: t.mobileSub, fontSize: 7, marginTop: 1, paddingLeft: 8, transition: "color 0.35s" }}>{item.veiculo}</div>
                    </div>
                    <span style={{
                      color: item.cor, fontSize: 7, fontWeight: 700,
                      background: `${item.cor}18`, border: `1px solid ${item.cor}40`,
                      borderRadius: 20, padding: "2px 5px",
                    }}>{item.status}</span>
                  </div>
                ))}
              </div>

              {/* Bottom nav bar */}
              <div style={{
                borderTop: t.mobileNavBorder,
                padding: "8px 10px 10px",
                display: "flex", justifyContent: "space-around", alignItems: "center",
                transition: "border 0.35s",
              }}>
                {[
                  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", active: true },
                  { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", active: false },
                  { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", active: false },
                  { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", active: false },
                ].map((item, i) => (
                  <div key={i} style={{
                    width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                    background: item.active ? "rgba(46,196,160,0.15)" : "transparent",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke={item.active ? "#2ec4a0" : t.mobileNavIcon}
                      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
}
