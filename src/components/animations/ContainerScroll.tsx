'use client';

import { useRef, useState, useEffect, type ReactNode } from 'react';
import { useScroll, useTransform, motion, type MotionValue } from 'motion/react';

interface ContainerScrollProps {
  children: ReactNode;
}

/**
 * Container Scroll Animation (inspire d'Aceternity UI).
 * Adapte palette Agence Simple : encre #0F1B3F borders, crème intérieur.
 * Le titre est laisse en Astro pur AU-DESSUS du composant (pas dans la prop).
 */
export function ContainerScroll({ children }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scaleDimensions = (): [number, number] => (isMobile ? [0.72, 0.92] : [0.92, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  return (
    <div
      ref={containerRef}
      className="h-[44rem] md:h-[60rem] flex items-center justify-center relative p-2 md:p-8"
    >
      <div className="w-full relative" style={{ perspective: '1200px' }}>
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
}

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px rgba(0,0,0,0.35), 0 37px 37px rgba(0,0,0,0.3), 0 84px 50px rgba(0,0,0,0.2), 0 149px 60px rgba(0,0,0,0.08), 0 233px 65px rgba(0,0,0,0.02)',
      }}
      className="max-w-6xl mx-auto h-[28rem] md:h-[38rem] w-full border-4 border-[#1a2750] p-2 md:p-3 bg-[#0F1B3F] rounded-[30px]"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#FAF7F2]">{children}</div>
    </motion.div>
  );
}
