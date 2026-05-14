'use client';

import { useRef, useState, useEffect, type ReactNode } from 'react';
import { useScroll, useTransform, motion, type MotionValue } from 'motion/react';

interface ContainerScrollProps {
  children: ReactNode;
}

/**
 * Container Scroll Animation (inspire d'Aceternity UI).
 * Adapte palette Agence Simple : encre #0F1B3F borders, creme interieur.
 * Offset explicite : ['start end', 'end start'] pour avoir une animation
 * etalee sur tout le passage du container dans le viewport.
 */
export function ContainerScroll({ children }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation se joue sur le passage 0.0 -> 0.5, puis statique
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? [25, 0, 0] : [28, 0, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? [0.75, 0.95, 0.95] : [0.85, 1, 1]
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? [60, 0, 0] : [80, 0, 0]
  );

  return (
    <div
      ref={containerRef}
      className="min-h-[120vh] flex items-center justify-center relative px-4 sm:px-8 py-12"
    >
      <div className="w-full sticky top-24" style={{ perspective: '1200px' }}>
        <Card rotate={rotate} scale={scale} translateY={translateY}>
          {children}
        </Card>
      </div>
    </div>
  );
}

function Card({
  rotate,
  scale,
  translateY,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translateY: MotionValue<number>;
  children: ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        y: translateY,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px rgba(0,0,0,0.35), 0 37px 37px rgba(0,0,0,0.3), 0 84px 50px rgba(0,0,0,0.2), 0 149px 60px rgba(0,0,0,0.08), 0 233px 65px rgba(0,0,0,0.02)',
        transformStyle: 'preserve-3d',
      }}
      className="max-w-6xl mx-auto h-[28rem] md:h-[36rem] w-full border-4 border-[#1a2750] p-2 md:p-3 bg-[#0F1B3F] rounded-[28px]"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#FAF7F2]">{children}</div>
    </motion.div>
  );
}
