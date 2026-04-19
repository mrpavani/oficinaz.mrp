import { Check, X, Users, Gift } from "lucide-react";
import { useState } from "react";

const allFeatures = [
  { label: "Treinamento gratuito" },
  { label: "Gestão financeira" },
  { label: "Emissão de notas fiscais (NF-e, NFC-e, NFS-e)" },
  { label: "Integração contábil" },
  { label: "Suporte gratuito" },
  { label: "DRE gerencial" },
  { label: "Gestão de vendas" },
  { label: "Serviços recorrentes" },
  { label: "Relatórios de serviços mais vendidos e ordens de serviços" },
  { label: "Controle de estoque completo" },
  { label: "PDV (Ponto de Venda / Venda Balcão)" },
  { label: "Gestão Multi CNPJ" },
  { label: "Conciliação bancária" },
  { label: "Responsivo mobile.", sublabel: "Crie o ícone de atalho no seu celular e use como um app." },
];

const plans = [
  {
    name: "Essencial",
    price: { monthly: 137, yearly: 123, yearlyTotal: "1.477" },
    desc: "Para profissionais autonômos e pequenas oficinas",
    highlight: false,
    badge: null,
    consulta: false,
    users: "1 usuário",
    extraUser: "R$99/usuário adicional",
    cta: "Assinar agora",
    features: [
      true,     // Treinamento gratuito
      "básica", // Gestão financeira
      true,     // Emissão de notas fiscais
      true,     // Integração contábil
      true,     // Suporte gratuito
      false,    // DRE gerencial
      false,    // Gestão de vendas
      false,    // Serviços recorrentes
      false,    // Relatórios de serviços
      false,    // Controle de estoque completo
      false,    // PDV
      false,    // Gestão Multi CNPJ
      false,    // Conciliação bancária
      true,     // Responsivo mobile
    ],
  },
  {
    name: "Completo",
    price: { monthly: 637, yearly: 573, yearlyTotal: "6.877" },
    desc: "Pensado e projetado para oficinas de médio porte",
    highlight: true,
    badge: "Mais escolhido",
    consulta: false,
    users: "5 usuários",
    cta: "Assinar agora",
    features: [
      true,
      "completa",
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
  },
  {
    name: "Enterprise",
    price: null,
    desc: "Para redes de oficinas e auto centers de grande porte",
    highlight: false,
    badge: null,
    consulta: true,
    users: "+5 usuários",
    cta: "Falar com especialista",
    features: [
      true, true, true, true, true, true,
      true, true, true, true, true, true, true, true,
    ],
  },
];

function FeatureValue({ value }) {
  if (value === false) return <X size={15} style={{ color: "#d0d5dd", flexShrink: 0, marginTop: 2 }} />;
  if (value === true) return <Check size={15} style={{ color: "#2ec4a0", flexShrink: 0, marginTop: 2 }} />;
  return <Check size={15} style={{ color: "#2ec4a0", flexShrink: 0, marginTop: 2 }} />;
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" style={{ padding: "100px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#2ec4a0", fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Preços</span>
            <span style={{
              background: "#fff8ed", border: "1px solid #fed7aa",
              borderRadius: 4, padding: "2px 7px",
              fontSize: 10.5, color: "#c2410c", fontWeight: 700, letterSpacing: 0.5,
              textTransform: "uppercase",
            }}>Lançamento</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#111d2e", marginTop: 12, letterSpacing: "-1px" }}>
            Planos para oficinas e centro automotivos de todos os tamanhos<span style={{ color: "#2ec4a0" }}>.</span>
          </h2>
          <p style={{ color: "#5a6778", fontSize: 17, maxWidth: 520, margin: "16px auto 0" }}>
            30 dias grátis em todos os planos. Sem cartão de crédito. Cancele quando quiser.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 16 }}>
            <span style={{ color: !yearly ? "#111d2e" : "#a0acbb", fontSize: 14, fontWeight: 600 }}>Mensal</span>
            <div onClick={() => setYearly(!yearly)} style={{
              width: 48, height: 26, borderRadius: 100,
              background: yearly ? "#2ec4a0" : "#e2e6ec",
              cursor: "pointer", position: "relative", transition: "background 0.2s",
            }}>
              <div style={{
                position: "absolute", top: 3, left: yearly ? 25 : 3, width: 20, height: 20,
                borderRadius: "50%", background: "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                transition: "left 0.2s",
              }} />
            </div>
            <span style={{ color: yearly ? "#111d2e" : "#a0acbb", fontSize: 14, fontWeight: 600 }}>Anual</span>
            <span style={{ background: "#e4faf4", color: "#127055", padding: "3px 10px", borderRadius: 100, fontSize: 12, fontWeight: 700 }}>
              Economize 10%
            </span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, alignItems: "stretch" }} className="price-grid">
          {plans.map((plan) => (
            <div key={plan.name} style={{
              background: plan.highlight ? "#111d2e" : "#f8f9fb",
              border: `1px solid ${plan.highlight ? "#2ec4a0" : "#e2e6ec"}`,
              borderRadius: 20, padding: 28, position: "relative",
              boxShadow: plan.highlight ? "0 20px 60px rgba(17,29,46,0.15)" : "none",
              transition: "transform 0.3s",
              display: "flex", flexDirection: "column",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}>
              {plan.badge && (
                <div style={{
                  position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                  background: "#2ec4a0", color: "#fff",
                  padding: "4px 16px", borderRadius: 100, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
                }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: 4, color: plan.highlight ? "#fff" : "#a0acbb", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>{plan.name}</div>

              {/* Users badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: plan.highlight ? "rgba(46,196,160,0.15)" : "#e4faf4", border: `1px solid ${plan.highlight ? "rgba(46,196,160,0.30)" : "#b8f1e4"}`, borderRadius: 8, padding: "5px 12px", marginBottom: 10 }}>
                <Users size={13} style={{ color: "#2ec4a0", flexShrink: 0 }} />
                <span style={{ color: plan.highlight ? "#4dd4b4" : "#127055", fontSize: 13, fontWeight: 700 }}>{plan.users}</span>
              </div>

              {plan.consulta ? (
                <div style={{ margin: "12px 0 4px" }}>
                  <div style={{ color: plan.highlight ? "#fff" : "#111d2e", fontSize: 26, fontWeight: 800, letterSpacing: "-0.5px" }}>Sob consulta</div>
                  <div style={{ color: "#a0acbb", fontSize: 13, marginTop: 4 }}>Orçamento personalizado</div>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, margin: "8px 0 4px" }}>
                    <span style={{ color: plan.highlight ? "#8eb0d0" : "#a0acbb", fontSize: 16, fontWeight: 600 }}>R$</span>
                    <span style={{ color: plan.highlight ? "#fff" : "#111d2e", fontSize: 40, fontWeight: 800, letterSpacing: "-2px" }}>
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span style={{ color: plan.highlight ? "#5a6778" : "#a0acbb", fontSize: 13 }}>/mês</span>
                  </div>
                  {yearly && (
                    <div style={{ color: "#2ec4a0", fontSize: 12, marginBottom: 4 }}>
                      Cobrado R$ {plan.price.yearlyTotal ?? plan.price.yearly * 12}/ano
                    </div>
                  )}
                  {plan.extraUser && (
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      marginTop: 8, padding: "3px 10px 3px 8px",
                      background: "#f8f9fb", border: "1px solid #e2e6ec",
                      borderRadius: 100,
                    }}>
                      <Users size={11} style={{ color: "#a0acbb", flexShrink: 0 }} />
                      <span style={{ color: "#a0acbb", fontSize: 11.5, fontWeight: 500, letterSpacing: 0.1 }}>{plan.extraUser}</span>
                    </div>
                  )}
                </>
              )}
              <p style={{ color: plan.highlight ? "#c4d8eb" : "#7a8897", fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>{plan.desc}</p>

              <div style={{ background: plan.highlight ? "rgba(46,196,160,0.10)" : "#e4faf4", border: `1px solid ${plan.highlight ? "rgba(46,196,160,0.25)" : "#b8f1e4"}`, borderRadius: 8, padding: "8px 12px", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <Gift size={14} style={{ color: "#127055", flexShrink: 0 }} />
                <span style={{ color: "#127055", fontSize: 13, fontWeight: 700 }}>1º mês gratuito</span>
              </div>

              <a href="#demo" style={{
                display: "block", textAlign: "center",
                background: plan.highlight ? "#2ec4a0" : "#111d2e",
                color: "#fff",
                padding: "12px", borderRadius: 10, textDecoration: "none",
                fontSize: 14, fontWeight: 700, marginBottom: 24,
                transition: "opacity 0.2s",
                marginTop: "auto",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                {plan.cta}
              </a>

              <div style={{ borderTop: `1px solid ${plan.highlight ? "rgba(255,255,255,0.08)" : "#e2e6ec"}`, paddingTop: 20 }}>
                <div style={{ color: plan.highlight ? "#8eb0d0" : "#a0acbb", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Benefícios</div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {allFeatures.map((f, i) => {
                    const val = plan.features[i];
                    const labelSuffix = typeof val === "string" ? ` ${val}` : "";
                    return (
                      <li key={f.label} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                        <FeatureValue value={val} />
                        <span style={{
                          color: val === false
                            ? (plan.highlight ? "#3a4a5a" : "#c0c8d4")
                            : (plan.highlight ? "#fff" : "#5a6778"),
                          fontSize: 14, lineHeight: 1.6,
                        }}>
                          {f.label}{labelSuffix}
                          {f.sublabel && (
                            <span style={{ display: "block", fontSize: 12, opacity: 0.7, marginTop: 1 }}>
                              ({f.sublabel})
                            </span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ color: "#7a8897", fontSize: 14 }}>
            Precisa de algo personalizado ou tem mais de uma unidade?{" "}
            <a href="#demo" style={{ color: "#2ec4a0", textDecoration: "none", fontWeight: 600 }}>Fale com nossa equipe →</a>
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .price-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .price-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}