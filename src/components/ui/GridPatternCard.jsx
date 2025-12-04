import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const gridEllipsisPattern = {
  backgroundImage: `
    radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2px),
    radial-gradient(circle, rgba(255,255,255,0.12) 2px, transparent 2px),
    linear-gradient(135deg, rgba(255,255,255,0.04), rgba(0,0,0,0.55))
  `,
  backgroundSize: "38px 38px, 38px 38px, 100% 100%",
  backgroundPosition: "0 0, 19px 19px, 0 0",
  backgroundColor: "rgba(255,255,255,0.04)",
};

const patternFadeMask = {
  WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 65%, transparent 100%)",
  maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 65%, transparent 100%)",
};

export function GridPatternCard({
  children,
  className,
  patternClassName,
  gradientClassName,
}) {
  return (
    <motion.div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl shadow-[0_35px_120px_rgba(0,0,0,0.55)]",
        "bg-black/95",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={cn("absolute inset-0", patternClassName)}
        style={{ ...gridEllipsisPattern, ...patternFadeMask }}
      />
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          gradientClassName
        )}
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 70%), radial-gradient(circle at 0% 50%, rgba(0,0,0,0.85), transparent 70%), radial-gradient(circle at 100% 50%, rgba(0,0,0,0.85), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function GridPatternCardBody({ className, ...props }) {
  return (
    <div
      className={cn(
        "text-left px-5 md:px-6 py-6 space-y-5 text-base md:text-lg text-gray-200 leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

