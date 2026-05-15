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
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        {/* Cones conic-gradient : largeur 30rem (proportions Aceternity original) */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, #1E90FF, transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] text-white"
        >
          <div className="absolute  w-[100%] left-0 bg-[#0F1B3F] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-[#0F1B3F]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, #1E90FF)",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] text-white"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-[#0F1B3F]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-[#0F1B3F] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#0F1B3F] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        {/* Halo trapeze inverse (large) : contraint a la largeur de la barre (30rem) */}
        <div
          className="absolute inset-auto z-30 h-64 w-[30rem] -translate-y-[2rem] pointer-events-none"
          style={{ filter: "blur(20px)" }}
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(30, 144, 255, 0.85) 0%, rgba(30, 144, 255, 0.55) 25%, rgba(30, 144, 255, 0.25) 55%, rgba(30, 144, 255, 0.08) 80%, transparent 100%)",
              clipPath: "polygon(0% 0%, 100% 0%, 72% 100%, 28% 100%)",
            }}
          />
        </div>

        {/* Halo trapeze inverse (etroit, coeur intense) : anim 8 -> 18rem */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "18rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-48 w-[18rem] -translate-y-[2rem] pointer-events-none"
          style={{ filter: "blur(14px)" }}
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(150, 210, 255, 1) 0%, rgba(30, 144, 255, 0.7) 30%, rgba(30, 144, 255, 0.2) 65%, transparent 100%)",
              clipPath: "polygon(0% 0%, 100% 0%, 78% 100%, 22% 100%)",
            }}
          />
        </motion.div>
        {/* Barre : z-50, largeur 30rem (matche la projection) */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[6rem] bg-[#1E90FF] "
        ></motion.div>

        {/* Masque haut : couvre tout au-dessus de la barre */}
        <div className="absolute inset-auto z-40 h-64 w-full -translate-y-[14rem] bg-[#0F1B3F] "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
