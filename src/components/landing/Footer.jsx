import { Linkedin, Instagram, Youtube } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/69cffc3a30bf014e2890f5d3/cba2e6a1d_Oficinaz-LogoOficial.png";

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.22 8.22 0 0 0 4.82 1.56V6.79a4.85 4.85 0 0 1-1.05-.1z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const socialLinks = [
  { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/company/oficinaz", label: "LinkedIn" },
  /*{ icon: <Instagram size={16} />, href: "#", label: "Instagram" },
  { icon: <TikTokIcon />, href: "https://www.tiktok.com/@oficinaz", label: "TikTok" },
  { icon: <Youtube size={16} />, href: "https://www.youtube.com/@oficinaz", label: "YouTube" },*/
  { icon: <WhatsAppIcon />, href: "https://wa.me/551151073356", label: "WhatsApp" },
];

const cols = [
  {
    title: "Produto",
    links: ["Funcionalidades", "Preços", "Changelog", "Roadmap", "API"],
  },
  {
    title: "Empresa",
    links: ["Sobre nós", "Blog", "Cases de sucesso", "Parcerias", "Carreiras"],
  },
  {
    title: "Suporte",
    links: ["Central de ajuda", "WhatsApp", "Treinamentos", "Status do sistema", "Fale conosco"],
  },
  {
    title: "Legal",
    links: ["Termos de uso", "Privacidade", "LGPD", "Cookies"],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid #e2e6ec", padding: "72px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          columnGap: 48,
          rowGap: 20,
          marginBottom: 48,
        }} className="footer-grid">

          {/* Brand — spans both grid rows so MRP block aligns with row 2 */}
          <div className="footer-brand" style={{ gridRow: "1 / 3" }}>
            <img
              src={LOGO}
              alt="Oficinaz"
              style={{ height: 121, width: "auto", objectFit: "contain", display: "block", marginBottom: 16, mixBlendMode: "multiply" }}
            />
            <p style={{ color: "#7a8897", fontSize: 13, lineHeight: 1.6, maxWidth: 280, margin: 0 }}>
              ERP completo para oficinas mecânicas e centros automotivos.
            </p>
            <p style={{ color: "#a0acbb", fontSize: 11, lineHeight: 1.5, maxWidth: 280, margin: "8px 0 0", letterSpacing: 0.1 }}>
              Somos parceiros VHSYS.
            </p>
            <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(226,230,236,0.4)" }}>
              <div style={{ color: "#a0acbb", fontSize: 12, fontWeight: 500, marginBottom: 6 }}>MRP DESENVOLVIMENTO E IMPLANTACAO DE SOLUCOES EM TI LTDA</div>
              <div style={{ color: "#a0acbb", fontSize: 12, lineHeight: 1.5 }}>
                <p style={{ margin: "0 0 4px 0" }}>CNPJ: 51.279.328/0001-20</p>
                <p style={{ margin: "0" }}>Av. Marquês de S. Vicente, 1619 - Barra Funda, São Paulo - SP, 01139-003</p>
              </div>
            </div>
          </div>

          {/* Links — row 1 */}
          {cols.map((col) => (
            <div key={col.title} style={{ gridRow: 1 }}>
              <div style={{ color: "#111d2e", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 20 }}>{col.title}</div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {col.links.map((link) => (
                  <li key={link} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ color: "#7a8897", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#2ec4a0"}
                      onMouseLeave={e => e.target.style.color = "#7a8897"}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social icons — row 2, cols 4–5 (Suporte + Legal), aligned with MRP block */}
          <div className="footer-social" style={{
            gridColumn: "4 / 6",
            gridRow: 2,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 6,
          }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: 34, height: 34, borderRadius: "50%",
                  background: "#f0f2f5", color: "#5a6778",
                  textDecoration: "none",
                  transition: "background 0.18s ease, color 0.18s ease, transform 0.18s cubic-bezier(0.34,1.56,0.64,1)",
                  border: "1px solid #e2e6ec",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#2ec4a0";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.border = "1px solid #2ec4a0";
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#f0f2f5";
                  e.currentTarget.style.color = "#5a6778";
                  e.currentTarget.style.border = "1px solid #e2e6ec";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid #e2e6ec",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}>
          {/* Left: copyright + status */}
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ color: "#7a8897", fontSize: 13 }}>© 2026 Oficinaz. Todos os direitos reservados.</span>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2ec4a0", display: "inline-block" }} />
              <span style={{ color: "#a0acbb", fontSize: 12 }}>Sistema operando normalmente</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .footer-brand { grid-row: auto !important; }
          .footer-social { grid-column: auto !important; grid-row: auto !important; justify-content: flex-start !important; }
        }
      `}</style>
    </footer>
  );
}
