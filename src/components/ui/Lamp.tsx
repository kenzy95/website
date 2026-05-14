"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";

/**
 * Port direct du composant Aceternity "Lamp Effect" en couleurs charte
 * Agence Simple (bleu #1E90FF sur fond encre #0F1B3F).
 *
 * Le LampContainer ENVELOPPE son contenu : le titre du hero doit etre
 * passe en children pour beneficier du -translate-y-80 et apparaitre
 * sous la barre lumineuse, eclaire par les cones.
 */

const BLUE = "#1E90FF";
const INK = "#0F1B3F";

const conicLeft = `conic-gradient(from 70deg at center top, ${BLUE}, transparent, transparent)`;
const conicRight = `conic-gradient(from 290deg at center top, transparent, transparent, ${BLUE})`;

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
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full z-0",
        className,
      )}
      style={{ backgroundColor: INK }}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Cone gauche */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: conicLeft }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] text-white"
        >
          <div
            className="absolute w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{ backgroundColor: INK }}
          />
          <div
            className="absolute w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"
            style={{ backgroundColor: INK }}
          />
        </motion.div>

        {/* Cone droit */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: conicRight }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] text-white"
        >
          <div
            className="absolute w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"
            style={{ backgroundColor: INK }}
          />
          <div
            className="absolute w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{ backgroundColor: INK }}
          />
        </motion.div>

        {/* Voile inferieur pour le fade bas */}
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"
          style={{ backgroundColor: INK }}
        />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Halo lumineux principal (gros blob bleu) */}
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
          style={{ backgroundColor: BLUE }}
        />

        {/* Halo central plus serre (grow au scroll) */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
          style={{ backgroundColor: BLUE }}
        />

        {/* Barre lumineuse horizontale */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]"
          style={{ backgroundColor: BLUE }}
        />

        {/* Masque haut (cache ce qui depasse au-dessus de la barre) */}
        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]"
          style={{ backgroundColor: INK }}
        />
      </div>

      {/* Contenu (titre + CTA) remonte sous la barre */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
