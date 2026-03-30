import { motion, AnimatePresence } from "framer-motion";

interface CaseCard {
  title: string;
  quote: string;
  industry: string;
  accentColor: string;
  gradient: string;
  previewType: string;
}

function BrowserChrome({ children, bg }: { children: React.ReactNode; bg: string }) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: 8,
        overflow: "hidden",
        background: bg,
        border: "1px solid rgba(255,255,255,0.06)",
        fontSize: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "4px 8px",
          background: "rgba(0,0,0,0.25)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          gap: 3,
        }}
      >
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(239,68,68,0.6)" }} />
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(234,179,8,0.6)" }} />
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(34,197,94,0.6)" }} />
        <div
          style={{
            flex: 1,
            height: 4,
            borderRadius: 2,
            background: "rgba(255,255,255,0.06)",
            marginLeft: 6,
            marginRight: 14,
          }}
        />
      </div>
      {children}
    </div>
  );
}

function TextLine({ w, color, h = 2, mb = 2 }: { w: string | number; color: string; h?: number; mb?: number }) {
  return <div style={{ width: w, height: h, borderRadius: 1, background: color, marginBottom: mb }} />;
}

function PreviewTax() {
  return (
    <BrowserChrome bg="#fafbfc">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: "5px", fontWeight: 700, color: "#1e3a5f", fontFamily: "'Montserrat', sans-serif" }}>KANZLEI VORBERG</div>
        <div style={{ display: "flex", gap: 6 }}>
          {["Leistungen", "Team", "Karriere", "Kontakt"].map((t, i) => (
            <span key={i} style={{ fontSize: "3.5px", color: "#6b7280" }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "14px 10px 8px", background: "linear-gradient(180deg, #f0f4f8 0%, #fafbfc 100%)" }}>
        <TextLine w="70%" color="#1e3a5f" h={3} mb={4} />
        <TextLine w="55%" color="#94a3b8" mb={3} />
        <TextLine w="45%" color="#94a3b8" mb={3} />
        <TextLine w="60%" color="#94a3b8" mb={6} />
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 28, height: 7, borderRadius: 2, background: "#1e3a5f" }} />
          <div style={{ width: 28, height: 7, borderRadius: 2, border: "1px solid #1e3a5f", background: "transparent" }} />
        </div>
      </div>
      <div style={{ padding: "6px 10px 8px", display: "flex", gap: 5 }}>
        {["Steuerberatung", "Wirtschaftsprüfung", "Rechtsberatung"].map((s, i) => (
          <div key={i} style={{ flex: 1, padding: "5px 3px", background: "#f0f4f8", borderRadius: 3, textAlign: "center" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#dbe4ef", margin: "0 auto 3px" }} />
            <div style={{ fontSize: "3px", fontWeight: 600, color: "#475569" }}>{s}</div>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

function PreviewAuto() {
  return (
    <BrowserChrome bg="#0f0f13">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ fontSize: "5px", fontWeight: 800, color: "#e2e8f0", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.05em" }}>DRIVEHOUSE</div>
        <div style={{ display: "flex", gap: 6 }}>
          {["Fahrzeuge", "Leasing", "Service"].map((t, i) => (
            <span key={i} style={{ fontSize: "3.5px", color: "rgba(255,255,255,0.4)" }}>{t}</span>
          ))}
          <div style={{ width: 16, height: 5, borderRadius: 2, background: "#dc2626", marginLeft: 2 }}>
            <span style={{ fontSize: "3px", color: "white", display: "block", textAlign: "center", lineHeight: "5px" }}>Kontakt</span>
          </div>
        </div>
      </div>
      <div style={{ padding: "10px 10px 6px", background: "linear-gradient(135deg, #1a1a24 0%, #0f0f13 100%)", display: "flex", gap: 8 }}>
        <div style={{ flex: 1 }}>
          <TextLine w="50%" color="rgba(255,255,255,0.12)" mb={6} />
          <div style={{ fontSize: "6px", fontWeight: 800, color: "#e2e8f0", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.2, marginBottom: 4 }}>
            Ihr nächstes Fahrzeug.
          </div>
          <TextLine w="80%" color="rgba(255,255,255,0.2)" mb={2} />
          <TextLine w="60%" color="rgba(255,255,255,0.15)" mb={6} />
          <div style={{ width: 30, height: 7, borderRadius: 2, background: "#dc2626" }} />
        </div>
        <div style={{ width: "45%", height: 44, borderRadius: 4, background: "linear-gradient(135deg, #1f1f2e, #2a2a3d)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 30, height: 16, borderRadius: 3, background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.2)" }} />
        </div>
      </div>
      <div style={{ padding: "5px 10px 7px", display: "flex", gap: 4 }}>
        {[1, 2, 3].map((_, i) => (
          <div key={i} style={{ flex: 1, height: 20, borderRadius: 3, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column" as const, justifyContent: "flex-end", padding: 3 }}>
            <TextLine w="70%" color="rgba(255,255,255,0.2)" h={1.5} mb={1} />
            <TextLine w="40%" color="rgba(220,38,38,0.5)" h={1.5} mb={0} />
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

function PreviewCleaning() {
  return (
    <BrowserChrome bg="#f0fdf4">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
          <div style={{ fontSize: "4.5px", fontWeight: 700, color: "#065f46", fontFamily: "'Montserrat', sans-serif" }}>REINPRO</div>
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          {["Leistungen", "Gewerbe", "Privat", "Anfrage"].map((t, i) => (
            <span key={i} style={{ fontSize: "3.5px", color: "#6b7280" }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "10px", background: "linear-gradient(180deg, #ecfdf5 0%, #f0fdf4 100%)", display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "5.5px", fontWeight: 700, color: "#065f46", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.3, marginBottom: 4 }}>
            Sauberkeit, die überzeugt.
          </div>
          <TextLine w="85%" color="#94a3b8" mb={2} />
          <TextLine w="65%" color="#94a3b8" mb={5} />
          <div style={{ display: "flex", gap: 3 }}>
            <div style={{ width: 32, height: 7, borderRadius: 3, background: "#10b981" }}>
              <span style={{ fontSize: "3px", color: "white", display: "block", textAlign: "center", lineHeight: "7px" }}>Jetzt anfragen</span>
            </div>
          </div>
        </div>
        <div style={{ width: "35%", height: 38, borderRadius: 6, background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "10px", opacity: 0.3 }}>✓</div>
        </div>
      </div>
      <div style={{ padding: "5px 10px 7px" }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
          <div style={{ flex: 1, height: 3, borderRadius: 1.5, background: "#10b981", opacity: 0.6 }} />
          <div style={{ flex: 1, height: 3, borderRadius: 1.5, background: "#10b981", opacity: 0.4 }} />
          <div style={{ flex: 1, height: 3, borderRadius: 1.5, background: "#10b981", opacity: 0.2 }} />
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {["Büro", "Industrie", "Glas"].map((s, i) => (
            <div key={i} style={{ flex: 1, padding: 4, background: "white", borderRadius: 3, border: "1px solid #e5e7eb" }}>
              <TextLine w="60%" color="#10b981" h={1.5} mb={2} />
              <div style={{ fontSize: "3px", color: "#6b7280" }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function PreviewDental() {
  return (
    <BrowserChrome bg="#f0f9ff">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ fontSize: "4.5px", fontWeight: 700, color: "#0369a1", fontFamily: "'Montserrat', sans-serif" }}>DR. SCHÖNFELD</div>
        <div style={{ display: "flex", gap: 5 }}>
          {["Praxis", "Behandlungen", "Termin"].map((t, i) => (
            <span key={i} style={{ fontSize: "3.5px", color: "#6b7280" }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", height: 48, overflow: "hidden" }}>
        <div style={{ width: "55%", background: "linear-gradient(180deg, #e0f2fe, #f0f9ff)", padding: "10px", display: "flex", flexDirection: "column" as const, justifyContent: "center" }}>
          <div style={{ fontSize: "5.5px", fontWeight: 700, color: "#0c4a6e", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.3, marginBottom: 4 }}>
            Für Ihr strahlendes Lächeln.
          </div>
          <TextLine w="90%" color="#94a3b8" mb={2} />
          <TextLine w="70%" color="#94a3b8" mb={5} />
          <div style={{ width: 30, height: 6, borderRadius: 3, background: "#0ea5e9" }}>
            <span style={{ fontSize: "2.5px", color: "white", display: "block", textAlign: "center", lineHeight: "6px" }}>Online Termin</span>
          </div>
        </div>
        <div style={{ width: "45%", background: "linear-gradient(135deg, #bae6fd, #7dd3fc)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "4px" }}>
          <div style={{ width: "70%", height: "80%", borderRadius: "20px 20px 0 0", background: "rgba(255,255,255,0.5)" }} />
        </div>
      </div>
      <div style={{ padding: "5px 10px 7px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
        {["Prophylaxe", "Implantate", "Ästhetik", "Kinderzahn"].map((s, i) => (
          <div key={i} style={{ padding: "3px 4px", borderRadius: 3, background: "white", border: "1px solid #e0f2fe", display: "flex", alignItems: "center", gap: 3 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#bae6fd", flexShrink: 0 }} />
            <div style={{ fontSize: "3px", fontWeight: 600, color: "#475569" }}>{s}</div>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

function PreviewFitness() {
  return (
    <BrowserChrome bg="#18181b">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ fontSize: "5px", fontWeight: 900, color: "#fbbf24", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em" }}>IRONFORGE</div>
        <div style={{ display: "flex", gap: 5 }}>
          {["Kurse", "Preise", "Team"].map((t, i) => (
            <span key={i} style={{ fontSize: "3.5px", color: "rgba(255,255,255,0.4)" }}>{t}</span>
          ))}
          <div style={{ width: 18, height: 5, borderRadius: 2, background: "#fbbf24" }}>
            <span style={{ fontSize: "2.5px", color: "#18181b", display: "block", textAlign: "center", lineHeight: "5px", fontWeight: 700 }}>JOIN</span>
          </div>
        </div>
      </div>
      <div style={{ background: "linear-gradient(135deg, #27272a, #18181b)", padding: "8px 10px", position: "relative" as const, overflow: "hidden" }}>
        <div style={{ position: "absolute" as const, right: 6, top: 4, width: 40, height: 40, borderRadius: "50%", background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.12)" }} />
        <div style={{ position: "relative" as const, zIndex: 1 }}>
          <div style={{ fontSize: "3px", fontWeight: 700, color: "#fbbf24", letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: 3 }}>DEIN POTENZIAL</div>
          <div style={{ fontSize: "7px", fontWeight: 900, color: "white", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.1, marginBottom: 4 }}>
            PUSH YOUR<br />LIMITS.
          </div>
          <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
            <div style={{ width: 28, height: 7, borderRadius: 2, background: "#fbbf24" }}>
              <span style={{ fontSize: "2.5px", color: "#18181b", display: "block", textAlign: "center", lineHeight: "7px", fontWeight: 800 }}>STARTEN</span>
            </div>
            <div style={{ width: 28, height: 7, borderRadius: 2, border: "1px solid rgba(251,191,36,0.4)", background: "transparent" }}>
              <span style={{ fontSize: "2.5px", color: "#fbbf24", display: "block", textAlign: "center", lineHeight: "7px" }}>MEHR</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "5px 10px 7px", display: "flex", gap: 4 }}>
        {["Krafttraining", "Cardio", "Yoga"].map((s, i) => (
          <div key={i} style={{ flex: 1, padding: "4px 3px", borderRadius: 3, background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.12)", textAlign: "center" as const }}>
            <div style={{ fontSize: "6px", marginBottom: 2, opacity: 0.6 }}>{["🏋️", "🏃", "🧘"][i]}</div>
            <div style={{ fontSize: "3px", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>{s}</div>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

function PreviewBeauty() {
  return (
    <BrowserChrome bg="#fdf2f8">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
        <div style={{ fontSize: "4.5px", fontWeight: 600, color: "#831843", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.08em", fontStyle: "italic" as const }}>maison belle</div>
        <div style={{ display: "flex", gap: 5 }}>
          {["Treatments", "Galerie", "Buchen"].map((t, i) => (
            <span key={i} style={{ fontSize: "3.5px", color: "#9ca3af" }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", height: 50 }}>
        <div style={{ width: "50%", background: "linear-gradient(180deg, #fce7f3, #fbcfe8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "75%", height: "80%", borderRadius: 8, background: "linear-gradient(135deg, #f9a8d4, #f472b6)", opacity: 0.4 }} />
        </div>
        <div style={{ width: "50%", padding: "10px 8px", display: "flex", flexDirection: "column" as const, justifyContent: "center", background: "#fdf2f8" }}>
          <div style={{ fontSize: "3px", fontWeight: 600, color: "#db2777", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 3 }}>BEAUTY & WELLNESS</div>
          <div style={{ fontSize: "5.5px", fontWeight: 700, color: "#831843", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.2, marginBottom: 4 }}>
            Ihr Moment der Schönheit.
          </div>
          <TextLine w="90%" color="#d4a0b9" mb={2} />
          <TextLine w="70%" color="#d4a0b9" mb={5} />
          <div style={{ width: 30, height: 6, borderRadius: 12, background: "#db2777" }}>
            <span style={{ fontSize: "2.5px", color: "white", display: "block", textAlign: "center", lineHeight: "6px" }}>Termin buchen</span>
          </div>
        </div>
      </div>
      <div style={{ padding: "5px 10px 7px", display: "flex", gap: 4 }}>
        {["Gesicht", "Körper", "Nägel"].map((s, i) => (
          <div key={i} style={{ flex: 1, padding: "4px 3px", borderRadius: 6, background: "white", border: "1px solid #fce7f3", textAlign: "center" as const }}>
            <div style={{ width: "100%", height: 10, borderRadius: 4, background: `rgba(219,39,119,${0.06 + i * 0.03})`, marginBottom: 3 }} />
            <div style={{ fontSize: "3px", fontWeight: 600, color: "#831843" }}>{s}</div>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

function PreviewCraft() {
  return (
    <BrowserChrome bg="#fefce8">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 6, height: 6, borderRadius: 1, background: "#92400e" }} />
          <div style={{ fontSize: "4.5px", fontWeight: 800, color: "#78350f", fontFamily: "'Montserrat', sans-serif" }}>HOLZWERK BERGER</div>
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          {["Projekte", "Über uns", "Kontakt"].map((t, i) => (
            <span key={i} style={{ fontSize: "3.5px", color: "#92400e" }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ background: "linear-gradient(180deg, #fef3c7 0%, #fefce8 100%)", padding: "8px 10px" }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: "55%", height: 44, borderRadius: 4, background: "linear-gradient(135deg, #d97706, #b45309)", display: "flex", alignItems: "flex-end", padding: 4, position: "relative" as const, overflow: "hidden" }}>
            <div style={{ position: "absolute" as const, inset: 0, background: "rgba(0,0,0,0.2)" }} />
            <div style={{ position: "relative" as const, zIndex: 1 }}>
              <TextLine w={20} color="rgba(255,255,255,0.7)" h={1.5} mb={1} />
              <TextLine w={30} color="rgba(255,255,255,0.4)" h={1} mb={0} />
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" as const, justifyContent: "center" }}>
            <div style={{ fontSize: "5.5px", fontWeight: 800, color: "#78350f", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.2, marginBottom: 4 }}>
              Meisterbetrieb seit 1987.
            </div>
            <TextLine w="90%" color="#b8977a" mb={2} />
            <TextLine w="70%" color="#b8977a" mb={5} />
            <div style={{ display: "flex", gap: 3 }}>
              <div style={{ width: 28, height: 7, borderRadius: 2, background: "#92400e" }}>
                <span style={{ fontSize: "2.5px", color: "white", display: "block", textAlign: "center", lineHeight: "7px" }}>Projekte</span>
              </div>
              <div style={{ width: 20, height: 7, borderRadius: 2, background: "transparent", border: "1px solid #92400e" }}>
                <span style={{ fontSize: "2.5px", color: "#92400e", display: "block", textAlign: "center", lineHeight: "7px" }}>Anrufen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "5px 10px 7px", display: "flex", gap: 4 }}>
        {["Küchen", "Treppen", "Möbel"].map((s, i) => (
          <div key={i} style={{ flex: 1, height: 18, borderRadius: 3, background: `rgba(146,64,14,${0.06 + i * 0.02})`, border: "1px solid rgba(146,64,14,0.1)", display: "flex", alignItems: "flex-end", padding: "0 3px 3px" }}>
            <div style={{ fontSize: "3px", fontWeight: 700, color: "#78350f" }}>{s}</div>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

function PreviewGastro() {
  return (
    <BrowserChrome bg="#1c1917">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ fontSize: "5px", fontWeight: 600, color: "#fbbf24", fontFamily: "'Montserrat', sans-serif", fontStyle: "italic" as const }}>Osteria Limone</div>
        <div style={{ display: "flex", gap: 5 }}>
          {["Speisekarte", "Reservieren", "Events"].map((t, i) => (
            <span key={i} style={{ fontSize: "3.5px", color: "rgba(255,255,255,0.35)" }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ height: 48, background: "linear-gradient(180deg, #292524, #1c1917)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" as const }}>
        <div style={{ position: "absolute" as const, inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(251,191,36,0.06), transparent 70%)" }} />
        <div style={{ textAlign: "center" as const, position: "relative" as const, zIndex: 1 }}>
          <div style={{ fontSize: "3px", fontWeight: 600, color: "#fbbf24", letterSpacing: "0.2em", textTransform: "uppercase" as const, marginBottom: 4 }}>WILLKOMMEN</div>
          <div style={{ fontSize: "6.5px", fontWeight: 700, color: "#fafaf9", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.2, marginBottom: 3 }}>
            Cucina Italiana
          </div>
          <div style={{ width: 20, height: 1, background: "#fbbf24", margin: "0 auto 4px", opacity: 0.5 }} />
          <div style={{ fontSize: "3px", color: "rgba(255,255,255,0.35)" }}>Authentisch seit 2008</div>
        </div>
      </div>
      <div style={{ padding: "5px 10px 7px", display: "flex", gap: 4 }}>
        {["Antipasti", "Pasta", "Dolci"].map((s, i) => (
          <div key={i} style={{ flex: 1, padding: "4px 3px", borderRadius: 3, background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.08)", textAlign: "center" as const }}>
            <div style={{ width: "100%", height: 10, borderRadius: 2, background: "rgba(251,191,36,0.05)", marginBottom: 2 }} />
            <div style={{ fontSize: "3px", fontWeight: 600, color: "#fbbf24", opacity: 0.7 }}>{s}</div>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

const PREVIEW_MAP: Record<string, () => JSX.Element> = {
  tax: PreviewTax,
  auto: PreviewAuto,
  cleaning: PreviewCleaning,
  dental: PreviewDental,
  fitness: PreviewFitness,
  beauty: PreviewBeauty,
  craft: PreviewCraft,
  gastro: PreviewGastro,
};

const CASES_PER_STEP: CaseCard[][] = [
  [
    {
      title: "Kanzlei Vorberg & Partner",
      quote: "Seit dem Relaunch 3x mehr Anfragen über Google.",
      industry: "Steuer- & Wirtschaftsberatung",
      accentColor: "#1e3a5f",
      gradient: "linear-gradient(135deg, rgba(30,58,95,0.12), rgba(59,130,246,0.06))",
      previewType: "tax",
    },
    {
      title: "DriveHouse Berlin",
      quote: "Endlich ein Webauftritt, der unsere Marke widerspiegelt.",
      industry: "Premium Automotive",
      accentColor: "#dc2626",
      gradient: "linear-gradient(135deg, rgba(220,38,38,0.12), rgba(248,113,113,0.06))",
      previewType: "auto",
    },
  ],
  [
    {
      title: "ReinPro Süd GmbH",
      quote: "Online-Präsenz komplett neu aufgebaut – Auftragsanfragen verdoppelt.",
      industry: "Gebäudeservice",
      accentColor: "#10b981",
      gradient: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(52,211,153,0.06))",
      previewType: "cleaning",
    },
    {
      title: "Praxis Dr. Schönfeld",
      quote: "Terminanfragen über die Website verdoppelt.",
      industry: "Zahnmedizin",
      accentColor: "#0ea5e9",
      gradient: "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(56,189,248,0.06))",
      previewType: "dental",
    },
  ],
  [
    {
      title: "IronForge Athletics",
      quote: "Mitgliederzahl um 40% gestiegen seit Launch.",
      industry: "Fitness & Sport",
      accentColor: "#fbbf24",
      gradient: "linear-gradient(135deg, rgba(251,191,36,0.12), rgba(253,224,71,0.06))",
      previewType: "fitness",
    },
    {
      title: "Maison Belle Köln",
      quote: "Unsere Buchungen kommen jetzt fast nur noch über die Website.",
      industry: "Beauty & Wellness",
      accentColor: "#db2777",
      gradient: "linear-gradient(135deg, rgba(219,39,119,0.12), rgba(244,114,182,0.06))",
      previewType: "beauty",
    },
  ],
  [
    {
      title: "Holzwerk Berger",
      quote: "Endlich werden unsere Projekte online richtig präsentiert.",
      industry: "Schreinerei & Innenausbau",
      accentColor: "#92400e",
      gradient: "linear-gradient(135deg, rgba(146,64,14,0.12), rgba(217,119,6,0.06))",
      previewType: "craft",
    },
    {
      title: "Kanzlei Vorberg & Partner",
      quote: "Professioneller Webauftritt, der Vertrauen schafft.",
      industry: "Steuer- & Wirtschaftsberatung",
      accentColor: "#1e3a5f",
      gradient: "linear-gradient(135deg, rgba(30,58,95,0.12), rgba(59,130,246,0.06))",
      previewType: "tax",
    },
  ],
  [
    {
      title: "Osteria Limone",
      quote: "Reservierungen über die neue Website um 60% gestiegen.",
      industry: "Gastronomie",
      accentColor: "#fbbf24",
      gradient: "linear-gradient(135deg, rgba(251,191,36,0.10), rgba(253,224,71,0.05))",
      previewType: "gastro",
    },
    {
      title: "DriveHouse Berlin",
      quote: "Rundum-Service: Design, Entwicklung und SEO – alles perfekt.",
      industry: "Premium Automotive",
      accentColor: "#dc2626",
      gradient: "linear-gradient(135deg, rgba(220,38,38,0.12), rgba(248,113,113,0.06))",
      previewType: "auto",
    },
  ],
];

function CaseCardUI({ card, index }: { card: CaseCard; index: number }) {
  const PreviewComponent = PREVIEW_MAP[card.previewType];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        padding: 16,
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.08)",
        background: card.gradient,
        backdropFilter: "blur(8px)",
      }}
    >
      {PreviewComponent && <PreviewComponent />}

      <h4
        style={{
          fontSize: "0.85rem",
          fontWeight: 700,
          color: "white",
          fontFamily: "'Montserrat', sans-serif",
          marginTop: 12,
          marginBottom: 5,
        }}
      >
        {card.title}
      </h4>

      <p
        style={{
          fontSize: "0.75rem",
          lineHeight: 1.5,
          color: "rgba(255,255,255,0.5)",
          fontStyle: "italic",
          marginBottom: 8,
        }}
      >
        „{card.quote}"
      </p>

      <span
        style={{
          fontSize: "0.65rem",
          fontWeight: 600,
          color: `${card.accentColor}B3`,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {card.industry}
      </span>
    </motion.div>
  );
}

export function ShowcaseCards({ currentStep }: { currentStep: number }) {
  const cards = CASES_PER_STEP[currentStep] || CASES_PER_STEP[0];

  return (
    <div className="flex flex-col gap-4">
      <AnimatePresence mode="wait">
        <motion.div key={currentStep} className="flex flex-col gap-4">
          {cards.map((card, i) => (
            <CaseCardUI key={`${currentStep}-${i}`} card={card} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
