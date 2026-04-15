import { ArrowRight, CheckCircle, Video } from "lucide-react";

const beneficios = [
  "Demonstração ao vivo",
  "Tire todas as suas dúvidas com nossa equipe",
  "30 dias grátis para testar",
];

export default function DemoScheduling() {
  return (
    <section id="demo" style={{ padding: "100px 24px", background: "#f8f9fb" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section header — same pattern as other sections */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ color: "#2ec4a0", fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
            Demonstração gratuita
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            color: "#111d2e", marginTop: 12, letterSpacing: "-1px", lineHeight: 1.15,
          }}>
            Quer ver o <span style={{ color: "#2ec4a0" }}>Oficinaz</span> funcionando?
          </h2>
          <p style={{ color: "#5a6778", fontSize: 17, maxWidth: 500, margin: "16px auto 0", lineHeight: 1.7 }}>
            Em 30 minutos você vê o sistema funcionando e como ele se encaixa na sua rotina.
          </p>
        </div>

        {/* 2-col content */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
        }} className="demo-grid">

          {/* Left — benefits + testimonial */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {beneficios.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                    background: "#e4faf4", border: "1px solid #b8f1e4",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <CheckCircle size={14} style={{ color: "#127055" }} />
                  </div>
                  <span style={{ color: "#111d2e", fontSize: 16, fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div style={{
              background: "#fffbeb", border: "1px solid #fde68a",
              borderRadius: 12, padding: "20px 22px",
            }}>
              <p style={{ color: "#111d2e", fontSize: 15, fontWeight: 600, lineHeight: 1.6, marginBottom: 8 }}>
                "A migração foi rápida e no mesmo dia já comecei a usar."
              </p>
              <span style={{ color: "#7a8897", fontSize: 13.5 }}>— Carlos A., oficina em São Paulo</span>
            </div>
          </div>

          {/* Right — CTA card */}
          <div style={{
            background: "#fff", borderRadius: 20,
            border: "1px solid #e2e6ec",
            boxShadow: "0 8px 32px rgba(17,29,46,0.07)",
            padding: "40px 36px",
            display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: 16,
              background: "linear-gradient(135deg, rgba(46,196,160,0.12), rgba(18,112,85,0.07))",
              border: "1px solid rgba(46,196,160,0.22)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 20,
            }}>
              <Video size={26} color="#2ec4a0" strokeWidth={1.6} />
            </div>

            <div style={{ fontSize: 19, fontWeight: 800, color: "#111d2e", lineHeight: 1.3, marginBottom: 10 }}>
              30 minutos que podem mudar como você gerencia sua oficina.
            </div>
            <p style={{ color: "#7a8897", fontSize: 15, lineHeight: 1.65, marginBottom: 28 }}>
              Entre em contato e agende sua demo.
            </p>

            <a
              href="https://wa.me/551151073356?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demo%20do%20Oficinaz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: "linear-gradient(135deg, #1eb880 0%, #2ec4a0 100%)",
                color: "#fff", padding: "16px 28px", borderRadius: 12, width: "100%",
                textDecoration: "none", fontSize: 16, fontWeight: 700,
                boxShadow: "0 8px 28px rgba(46,196,160,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxSizing: "border-box",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(46,196,160,0.50), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(46,196,160,0.35), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
            >
              Agendar minha demonstração <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .demo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
