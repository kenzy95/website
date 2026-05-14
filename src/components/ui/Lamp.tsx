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
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "42rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, #1E90FF, transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[42rem] text-white"
        >
          <div className="absolute  w-[100%] left-0 bg-[#0F1B3F] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-[#0F1B3F]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "42rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, #1E90FF)",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[42rem] text-white"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-[#0F1B3F]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-[#0F1B3F] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#0F1B3F] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[38rem] -translate-y-[2rem] rounded-full bg-[#1E90FF] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "22rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-[22rem] -translate-y-[3rem] rounded-full bg-[#1E90FF] blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "20rem" }}
          whileInView={{ width: "42rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[42rem] -translate-y-[4rem] bg-[#1E90FF] "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[9.5rem] bg-[#0F1B3F] "></div>
      </div>

      <div className="relative z-50 flex -translate-y-72 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
