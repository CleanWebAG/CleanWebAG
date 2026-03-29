import { motion, useInView, useReducedMotion } from "framer-motion";
import { useId, useRef } from "react";

const CHART_PATH =
  "M0,180 C20,175 40,170 60,160 C80,150 100,155 120,145 C140,135 160,140 180,125 C200,110 220,115 240,105 C260,95 280,100 300,85 C320,70 340,80 360,65 C380,50 400,55 420,45 C440,35 460,50 480,40 C500,30 520,35 540,25 C560,15 580,20 600,10";

export function AnimatedChartBackground() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();
  const gradientId = useId();

  const shouldAnimate = isInView && !prefersReducedMotion;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.12]" aria-hidden="true">
      <svg
        ref={ref}
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d={CHART_PATH}
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
          animate={shouldAnimate || (isInView && prefersReducedMotion) ? { pathLength: 1 } : { pathLength: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
        />

        <motion.path
          d={`${CHART_PATH} L600,200 L0,200 Z`}
          fill={`url(#${gradientId})`}
          initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.5, delay: 0.8, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
