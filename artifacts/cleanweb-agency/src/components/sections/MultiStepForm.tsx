import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Users,
  UserPlus,
  HelpCircle,
  Palette,
  Code,
  Camera,
  TrendingUp,
  Target,
  Wrench,
  Clock,
  CalendarCheck,
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle2,
  Shield,
  Zap,
  BadgeCheck,
} from "lucide-react";

interface FormData {
  goal: string;
  services: string[];
  website: string;
  company: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  privacy: boolean;
}

const INITIAL: FormData = {
  goal: "",
  services: [],
  website: "",
  company: "",
  timeline: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  privacy: false,
};

const GOALS = [
  { id: "seo", label: "Online besser gefunden werden", icon: Search },
  { id: "neukunden", label: "Mehr Neukunden gewinnen", icon: Users },
  { id: "fachkraefte", label: "Mehr Fachkräfte gewinnen", icon: UserPlus },
  { id: "andere", label: "Etwas anderes", icon: HelpCircle },
];

const SERVICES = [
  { id: "webdesign", label: "Webdesign", icon: Palette },
  { id: "webdev", label: "Web Entwicklung", icon: Code },
  { id: "fotovideo", label: "Foto/Video", icon: Camera },
  { id: "seo", label: "SEO", icon: TrendingUp },
  { id: "sea", label: "SEA", icon: Target },
  { id: "wartung", label: "Wartung", icon: Wrench },
];

const TIMELINES = [
  { id: "asap", label: "Am besten schon gestern", icon: Zap },
  { id: "nopressure", label: "Kein Zeitdruck", icon: CalendarCheck },
];

const STEP_TITLES = [
  "Was ist das primäre Ziel?",
  "Welche Leistungen benötigen Sie?",
  "Um welches Projekt geht es?",
  "Wann soll die Webseite fertig werden?",
  "Wie können wir Sie erreichen?",
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

function TrustBar() {
  const items = [
    { icon: Clock, text: "Antwort in 24 Std." },
    { icon: Shield, text: "100% unverbindlich" },
    { icon: BadgeCheck, text: "Erste Preiseinschätzung" },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs text-white/50">
          <item.icon size={13} className="text-electric/70 shrink-0" />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-5">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="transition-all duration-300"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background: i <= current ? "#2563EB" : "rgba(255,255,255,0.12)",
              boxShadow: i === current ? "0 0 10px rgba(37,99,235,0.4)" : "none",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function SelectionCard({
  label,
  icon: Icon,
  selected,
  onClick,
}: {
  label: string;
  icon: React.ElementType;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="text-left w-full"
      style={{
        padding: "14px 16px",
        borderRadius: 12,
        border: selected
          ? "1.5px solid rgba(37,99,235,0.8)"
          : "1px solid rgba(255,255,255,0.1)",
        background: selected
          ? "rgba(37,99,235,0.12)"
          : "rgba(255,255,255,0.04)",
        boxShadow: selected
          ? "0 0 20px rgba(37,99,235,0.2), inset 0 1px 0 rgba(37,99,235,0.15)"
          : "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 12,
        transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: selected
            ? "rgba(37,99,235,0.2)"
            : "rgba(255,255,255,0.06)",
          transition: "background 0.2s",
        }}
      >
        <Icon size={18} style={{ color: selected ? "#3B82F6" : "rgba(255,255,255,0.45)" }} />
      </div>
      <span
        style={{
          fontSize: "0.85rem",
          fontWeight: 500,
          color: selected ? "white" : "rgba(255,255,255,0.7)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {label}
      </span>
      {selected && (
        <CheckCircle2
          size={16}
          className="ml-auto shrink-0"
          style={{ color: "#3B82F6" }}
        />
      )}
    </motion.button>
  );
}

function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs font-medium"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {label}
        {required && <span className="text-electric ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full"
        style={{
          padding: "10px 14px",
          borderRadius: 10,
          border: error
            ? "1px solid rgba(239,68,68,0.6)"
            : "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.05)",
          color: "white",
          fontSize: "0.85rem",
          fontFamily: "'Inter', sans-serif",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => {
          if (!error) e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)";
        }}
        onBlur={(e) => {
          if (!error) e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
        }}
      />
      {error && (
        <span className="text-[0.7rem]" style={{ color: "rgba(239,68,68,0.8)" }}>
          {error}
        </span>
      )}
    </div>
  );
}

export function MultiStepForm({ onStepChange }: { onStepChange?: (step: number) => void }) {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const goTo = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
    onStepChange?.(next);
  };

  const canNext = () => {
    switch (step) {
      case 0:
        return !!data.goal;
      case 1:
        return data.services.length > 0;
      case 2:
        return !!data.company;
      case 3:
        return !!data.timeline;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const validateFinal = (): boolean => {
    const errs: Record<string, string> = {};
    if (!data.firstName.trim()) errs.firstName = "Pflichtfeld";
    if (!data.lastName.trim()) errs.lastName = "Pflichtfeld";
    if (!data.email.trim()) errs.email = "Pflichtfeld";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Ungültige E-Mail-Adresse";
    if (!data.privacy) errs.privacy = "Bitte bestätigen";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validateFinal()) return;
    console.log("Form submitted:", JSON.stringify(data, null, 2));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        >
          <CheckCircle2 size={52} style={{ color: "#2563EB" }} />
        </motion.div>
        <h3
          className="mt-4 text-xl font-bold text-white"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Vielen Dank!
        </h3>
        <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 300 }}>
          Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <TrustBar />
      <StepIndicator current={step} total={5} />

      <h2
        className="text-center text-base sm:text-lg font-bold text-white mb-5"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {STEP_TITLES[step]}
      </h2>

      <div style={{ minHeight: 260, position: "relative" }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={step}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {step === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {GOALS.map((g) => (
                  <SelectionCard
                    key={g.id}
                    label={g.label}
                    icon={g.icon}
                    selected={data.goal === g.id}
                    onClick={() => setData({ ...data, goal: g.id })}
                  />
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <SelectionCard
                    key={s.id}
                    label={s.label}
                    icon={s.icon}
                    selected={data.services.includes(s.id)}
                    onClick={() => {
                      const next = data.services.includes(s.id)
                        ? data.services.filter((x) => x !== s.id)
                        : [...data.services, s.id];
                      setData({ ...data, services: next });
                    }}
                  />
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                <FormInput
                  label="Webseite (optional)"
                  value={data.website}
                  onChange={(v) => setData({ ...data, website: v })}
                  placeholder="www.beispiel.de"
                />
                <FormInput
                  label="Unternehmen"
                  value={data.company}
                  onChange={(v) => setData({ ...data, company: v })}
                  placeholder="Firmenname"
                  required
                />
              </div>
            )}

            {step === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIMELINES.map((t) => (
                  <SelectionCard
                    key={t.id}
                    label={t.label}
                    icon={t.icon}
                    selected={data.timeline === t.id}
                    onClick={() => setData({ ...data, timeline: t.id })}
                  />
                ))}
              </div>
            )}

            {step === 4 && (
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <FormInput
                    label="Vorname"
                    value={data.firstName}
                    onChange={(v) => {
                      setData({ ...data, firstName: v });
                      if (errors.firstName) setErrors({ ...errors, firstName: "" });
                    }}
                    placeholder="Max"
                    required
                    error={errors.firstName}
                  />
                  <FormInput
                    label="Nachname"
                    value={data.lastName}
                    onChange={(v) => {
                      setData({ ...data, lastName: v });
                      if (errors.lastName) setErrors({ ...errors, lastName: "" });
                    }}
                    placeholder="Mustermann"
                    required
                    error={errors.lastName}
                  />
                </div>
                <FormInput
                  label="E-Mail"
                  value={data.email}
                  onChange={(v) => {
                    setData({ ...data, email: v });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  placeholder="max@firma.de"
                  type="email"
                  required
                  error={errors.email}
                />
                <FormInput
                  label="Telefon (optional)"
                  value={data.phone}
                  onChange={(v) => setData({ ...data, phone: v })}
                  placeholder="+49 123 456789"
                  type="tel"
                />
                <label className="flex items-start gap-2.5 mt-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={data.privacy}
                    onChange={(e) => {
                      setData({ ...data, privacy: e.target.checked });
                      if (errors.privacy) setErrors({ ...errors, privacy: "" });
                    }}
                    className="mt-0.5 shrink-0"
                    style={{
                      width: 16,
                      height: 16,
                      accentColor: "#2563EB",
                    }}
                  />
                  <span
                    className="text-xs leading-relaxed"
                    style={{ color: errors.privacy ? "rgba(239,68,68,0.8)" : "rgba(255,255,255,0.45)" }}
                  >
                    Ich stimme der{" "}
                    <a
                      href={`${import.meta.env.BASE_URL}datenschutz`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      style={{ color: "#3B82F6" }}
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    zu. *
                  </span>
                </label>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-5 gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{
              color: "rgba(255,255,255,0.5)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 12px",
              borderRadius: 8,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            <ArrowLeft size={15} /> Zurück
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <motion.button
            type="button"
            onClick={() => canNext() && goTo(step + 1)}
            whileHover={{ scale: canNext() ? 1.03 : 1 }}
            whileTap={{ scale: canNext() ? 0.97 : 1 }}
            className="flex items-center gap-1.5 text-sm font-semibold"
            style={{
              padding: "10px 22px",
              borderRadius: 10,
              border: "none",
              background: canNext() ? "#2563EB" : "rgba(37,99,235,0.3)",
              color: canNext() ? "white" : "rgba(255,255,255,0.4)",
              cursor: canNext() ? "pointer" : "not-allowed",
              boxShadow: canNext() ? "0 4px 16px rgba(37,99,235,0.3)" : "none",
              fontFamily: "'Montserrat', sans-serif",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
          >
            Weiter <ArrowRight size={15} />
          </motion.button>
        ) : (
          <motion.button
            type="button"
            onClick={handleSubmit}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 text-sm font-semibold"
            style={{
              padding: "10px 22px",
              borderRadius: 10,
              border: "none",
              background: "#2563EB",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
              fontFamily: "'Montserrat', sans-serif",
              transition: "background 0.2s",
            }}
          >
            Jetzt anfragen <Send size={14} />
          </motion.button>
        )}
      </div>

    </div>
  );
}
