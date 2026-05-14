"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";

/**
 * Composant Aceternity "Lamp Effect" - port strict.
 * Couleurs adaptees a la charte Agence Simple :
 *   cyan-500/cyan-400  -> #1E90FF (color-bleu)
 *   slate-950          -> #0F1B3F (color-encre)
 * Aucune autre modification par rapport au composant d'origine.
 */
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0F1B3F] w-full rounded-md z-0",
        className,
      )}
    >
      {/* Gradient orange-rose gauche (forme tachee floue) */}
      <div
        aria-hidden="true"
        className="absolute -left-[20rem] top-[10%] h-[60rem] w-[60rem] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle at 60% 50%, rgba(255, 200, 168, 0.55) 0%, rgba(244, 123, 63, 0.50) 20%, rgba(255, 111, 181, 0.45) 45%, transparent 70%)",
          filter: "blur(80px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Gradient orange-rose droit (symetrique, plus petit, plus bas) */}
      <div
        aria-hidden="true"
        className="absolute -right-[15rem] top-[30%] h-[50rem] w-[50rem] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle at 40% 50%, rgba(255, 215, 180, 0.50) 0%, rgba(244, 123, 63, 0.42) 22%, rgba(255, 111, 181, 0.38) 50%, transparent 72%)",
          filter: "blur(80px)",
          mixBlendMode: "screen",
        }}
      />

      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "30rem" }}
          whileInView={{ opacity: 1, width: "70rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, #1E90FF, transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[70rem] text-white"
        >
          <div className="absolute  w-[100%] left-0 bg-[#0F1B3F] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-[#0F1B3F]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "30rem" }}
          whileInView={{ opacity: 1, width: "70rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, #1E90FF)",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[70rem] text-white"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-[#0F1B3F]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-[#0F1B3F] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#0F1B3F] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-56 w-[60rem] -translate-y-[3rem] rounded-full bg-[#1E90FF] opacity-70 blur-3xl"></div>
        <motion.div
          initial={{ width: "14rem" }}
          whileInView={{ width: "32rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-40 w-[32rem] -translate-y-[4rem] rounded-full bg-[#1E90FF] blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "30rem" }}
          whileInView={{ width: "70rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[70rem] -translate-y-[6rem] bg-[#1E90FF] "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[11.5rem] bg-[#0F1B3F] "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
