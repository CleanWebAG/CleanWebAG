import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  User,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

interface BookingData {
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30",
];

const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTH_NAMES = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}

function isWeekend(year: number, month: number, day: number) {
  const d = new Date(year, month, day).getDay();
  return d === 0 || d === 6;
}

function isPast(year: number, month: number, day: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(year, month, day) < today;
}

export function BookingModal({ onClose }: { onClose: () => void }) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [bookingStep, setBookingStep] = useState<"calendar" | "time" | "details" | "confirmed">("calendar");
  const [booking, setBooking] = useState<BookingData>({
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfWeek(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const canGoPrev = () => {
    return viewYear > today.getFullYear() || (viewYear === today.getFullYear() && viewMonth > today.getMonth());
  };

  const selectDate = (day: number) => {
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setBooking({ ...booking, date: dateStr });
    setBookingStep("time");
  };

  const selectTime = (time: string) => {
    setBooking({ ...booking, time });
    setBookingStep("details");
  };

  const validateAndSubmit = () => {
    const errs: Record<string, string> = {};
    if (!booking.name.trim()) errs.name = "Pflichtfeld";
    if (!booking.email.trim()) errs.email = "Pflichtfeld";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email))
      errs.email = "Ungültige E-Mail";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    console.log("Booking submitted:", JSON.stringify(booking, null, 2));
    setBookingStep("confirmed");
  };

  const formatDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    return `${d}. ${MONTH_NAMES[m - 1]} ${y}`;
  };

  const availableSlots = TIME_SLOTS.filter(() => Math.random() > 0.15);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(8px)",
          padding: 16,
        }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            width: "100%",
            maxWidth: 480,
            maxHeight: "90vh",
            overflow: "auto",
            background: "linear-gradient(180deg, #0f1729 0%, #0B1220 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,235,0.08)",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 22px 14px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(37,99,235,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Calendar size={18} style={{ color: "#3B82F6" }} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "white",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Beratungstermin buchen
                </div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>
                  Kostenlos · 30 Min · Online oder Telefon
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "rgba(255,255,255,0.4)",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.color = "rgba(255,255,255,0.4)";
              }}
            >
              <X size={16} />
            </button>
          </div>

          <div style={{ padding: "16px 22px 22px" }}>
            {bookingStep === "confirmed" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle2 size={48} style={{ color: "#2563EB" }} />
                </motion.div>
                <h3
                  className="mt-4 text-lg font-bold text-white"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Termin bestätigt!
                </h3>
                <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.5)", maxWidth: 280 }}>
                  {formatDate(booking.date)} um {booking.time} Uhr
                </p>
                <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Sie erhalten eine Bestätigung per E-Mail an {booking.email}
                </p>
                <button
                  onClick={onClose}
                  style={{
                    marginTop: 20,
                    padding: "10px 28px",
                    borderRadius: 10,
                    background: "#2563EB",
                    color: "white",
                    border: "none",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Schließen
                </button>
              </motion.div>
            ) : bookingStep === "details" ? (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  onClick={() => setBookingStep("time")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    padding: 0,
                    marginBottom: 12,
                  }}
                >
                  <ChevronLeft size={14} /> Zurück
                </button>

                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 10,
                    background: "rgba(37,99,235,0.08)",
                    border: "1px solid rgba(37,99,235,0.15)",
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Calendar size={14} style={{ color: "#3B82F6" }} />
                  <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
                    {formatDate(booking.date)}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.25)", margin: "0 2px" }}>·</span>
                  <Clock size={14} style={{ color: "#3B82F6" }} />
                  <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
                    {booking.time} Uhr
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { icon: User, label: "Name", key: "name", placeholder: "Max Mustermann", type: "text" },
                    { icon: Mail, label: "E-Mail", key: "email", placeholder: "max@firma.de", type: "email" },
                    { icon: Phone, label: "Telefon (optional)", key: "phone", placeholder: "+49 177 ...", type: "tel" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: "0.7rem",
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.5)",
                          marginBottom: 5,
                        }}
                      >
                        <field.icon size={12} />
                        {field.label}
                        {field.key !== "phone" && <span style={{ color: "#3B82F6" }}>*</span>}
                      </label>
                      <input
                        type={field.type}
                        value={(booking as any)[field.key]}
                        onChange={(e) => {
                          setBooking({ ...booking, [field.key]: e.target.value });
                          if (errors[field.key]) setErrors({ ...errors, [field.key]: "" });
                        }}
                        placeholder={field.placeholder}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: 10,
                          border: errors[field.key]
                            ? "1px solid rgba(239,68,68,0.5)"
                            : "1px solid rgba(255,255,255,0.1)",
                          background: "rgba(255,255,255,0.04)",
                          color: "white",
                          fontSize: "0.85rem",
                          fontFamily: "'Inter', sans-serif",
                          outline: "none",
                          transition: "border-color 0.2s",
                          boxSizing: "border-box" as const,
                        }}
                        onFocus={(e) => {
                          if (!errors[field.key]) e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)";
                        }}
                        onBlur={(e) => {
                          if (!errors[field.key]) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                        }}
                      />
                      {errors[field.key] && (
                        <span style={{ fontSize: "0.65rem", color: "rgba(239,68,68,0.7)", marginTop: 3, display: "block" }}>
                          {errors[field.key]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={validateAndSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    marginTop: 16,
                    padding: "12px 20px",
                    borderRadius: 12,
                    background: "#2563EB",
                    color: "white",
                    border: "none",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "'Montserrat', sans-serif",
                    boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  Termin bestätigen <CheckCircle2 size={16} />
                </motion.button>
              </motion.div>
            ) : bookingStep === "time" ? (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  onClick={() => setBookingStep("calendar")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    padding: 0,
                    marginBottom: 10,
                  }}
                >
                  <ChevronLeft size={14} /> Zurück
                </button>

                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginBottom: 12 }}>
                  <span style={{ fontWeight: 600, color: "white" }}>{formatDate(booking.date)}</span>
                  {" "}— Verfügbare Zeiten:
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 6,
                  }}
                >
                  {availableSlots.map((slot) => (
                    <motion.button
                      key={slot}
                      onClick={() => selectTime(slot)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: "8px 4px",
                        borderRadius: 8,
                        border: "1px solid rgba(37,99,235,0.2)",
                        background: "rgba(37,99,235,0.06)",
                        color: "#93c5fd",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        fontFamily: "'Inter', sans-serif",
                        transition: "all 0.2s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(37,99,235,0.15)";
                        e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(37,99,235,0.06)";
                        e.currentTarget.style.borderColor = "rgba(37,99,235,0.2)";
                        e.currentTarget.style.color = "#93c5fd";
                      }}
                    >
                      <Clock size={12} />
                      {slot}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 14,
                  }}
                >
                  <button
                    onClick={prevMonth}
                    disabled={!canGoPrev()}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 7,
                      background: canGoPrev() ? "rgba(255,255,255,0.06)" : "transparent",
                      border: "none",
                      color: canGoPrev() ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.1)",
                      cursor: canGoPrev() ? "pointer" : "default",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "white",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {MONTH_NAMES[viewMonth]} {viewYear}
                  </span>
                  <button
                    onClick={nextMonth}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 7,
                      background: "rgba(255,255,255,0.06)",
                      border: "none",
                      color: "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: 2,
                    marginBottom: 4,
                  }}
                >
                  {WEEKDAYS.map((wd) => (
                    <div
                      key={wd}
                      style={{
                        textAlign: "center",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.3)",
                        padding: "4px 0",
                      }}
                    >
                      {wd}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: 2,
                  }}
                >
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const past = isPast(viewYear, viewMonth, day);
                    const weekend = isWeekend(viewYear, viewMonth, day);
                    const disabled = past || weekend;

                    return (
                      <button
                        key={day}
                        onClick={() => !disabled && selectDate(day)}
                        disabled={disabled}
                        style={{
                          width: "100%",
                          aspectRatio: "1",
                          borderRadius: 8,
                          border: "none",
                          background: disabled
                            ? "transparent"
                            : "rgba(255,255,255,0.04)",
                          color: disabled
                            ? "rgba(255,255,255,0.15)"
                            : "rgba(255,255,255,0.75)",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          cursor: disabled ? "default" : "pointer",
                          transition: "all 0.15s",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onMouseEnter={(e) => {
                          if (!disabled) {
                            e.currentTarget.style.background = "rgba(37,99,235,0.2)";
                            e.currentTarget.style.color = "white";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!disabled) {
                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                          }
                        }}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <div
                  style={{
                    marginTop: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                    Verfügbar
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: "transparent", border: "1px solid rgba(255,255,255,0.06)" }} />
                    Nicht verfügbar
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {bookingStep !== "confirmed" && (
            <div
              style={{
                padding: "12px 22px 16px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: bookingStep === "calendar" ? "#2563EB" : "rgba(37,99,235,0.3)",
                }}
              />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: bookingStep === "time" ? "#2563EB" : "rgba(37,99,235,0.3)",
                }}
              />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: bookingStep === "details" ? "#2563EB" : "rgba(37,99,235,0.3)",
                }}
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function MiniCalendarVisual() {
  const today = new Date();
  const day = today.getDate();
  const monthShort = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"][today.getMonth()];

  return (
    <div
      style={{
        width: 72,
        height: 80,
        borderRadius: 14,
        background: "linear-gradient(180deg, #2563EB 0%, #1d4ed8 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 8px 24px rgba(37,99,235,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 22,
          background: "rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: "0.55rem",
            fontWeight: 700,
            color: "rgba(255,255,255,0.9)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {monthShort}
        </span>
      </div>
      <div
        style={{
          marginTop: 10,
          fontSize: "1.6rem",
          fontWeight: 800,
          color: "white",
          lineHeight: 1,
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {day}
      </div>
      <div
        style={{
          display: "flex",
          gap: 2,
          marginTop: 4,
        }}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              width: 4,
              height: 4,
              borderRadius: 1,
              background: i === 3 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function BookingCTA({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <div>
      <div className="booking-cta-layout">
        <motion.button
          onClick={onOpenBooking}
          whileHover={{ scale: 1.015, y: -1 }}
          whileTap={{ scale: 0.99 }}
          className="booking-cta-card"
          style={{
            padding: "22px 24px",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            cursor: "pointer",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: 20,
            transition: "all 0.3s ease",
            boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
            e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.12)";
          }}
        >
          <MiniCalendarVisual />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "0.88rem",
                fontWeight: 700,
                color: "white",
                fontFamily: "'Montserrat', sans-serif",
                marginBottom: 6,
                lineHeight: 1.35,
              }}
            >
              Buchen Sie sich direkt einen Beratungstermin
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.5,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Kostenlos & unverbindlich. Wir helfen Ihnen weiter.
            </div>
          </div>
        </motion.button>

        <a
          href="mailto:info@cleanwebag.de"
          className="booking-contact-card"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "18px 16px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            textDecoration: "none",
            transition: "all 0.25s ease",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.1)";
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mail size={17} style={{ color: "rgba(255,255,255,0.5)" }} />
          </div>
          <div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Inter', sans-serif",
                marginBottom: 3,
              }}
            >
              info@cleanwebag.de
            </div>
            <div
              style={{
                fontSize: "0.62rem",
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Unser Postfach
            </div>
          </div>
        </a>

        <a
          href="tel:+491772047113"
          className="booking-contact-card"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "18px 16px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            textDecoration: "none",
            transition: "all 0.25s ease",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.1)";
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Phone size={17} style={{ color: "rgba(255,255,255,0.5)" }} />
          </div>
          <div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Inter', sans-serif",
                marginBottom: 3,
              }}
            >
              +49 177 2047113
            </div>
            <div
              style={{
                fontSize: "0.62rem",
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Agentur Hotline
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
