'use client';

import { animate, motion, useMotionValue } from 'framer-motion';
import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface InfiniteSliderProps {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Infinite marquee horizontal en framer-motion (lib stable).
 * Mesure native via ref+ResizeObserver, children duplique 2x pour boucle seamless.
 */
function InfiniteSlider({
  children,
  gap = 32,
  speed = 60,
  speedOnHover,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const innerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (!innerRef.current) return;
    const measure = () => {
      if (!innerRef.current) return;
      const halfWidth = innerRef.current.scrollWidth / 2;
      setContentWidth(halfWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (contentWidth === 0) return;
    const from = reverse ? -contentWidth : 0;
    const to = reverse ? 0 : -contentWidth;
    const distance = Math.abs(to - from);
    const duration = distance / currentSpeed;

    let controls;
    if (isTransitioning) {
      const remaining = Math.abs(translation.get() - to);
      const transitionDuration = remaining / currentSpeed;
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setResetKey((k) => k + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      });
    }
    return () => controls?.stop();
  }, [resetKey, translation, currentSpeed, contentWidth, isTransitioning, reverse]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        ref={innerRef}
        className="flex w-max"
        style={{ x: translation, gap: `${gap}px` }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

interface BlurredInfiniteSliderProps extends InfiniteSliderProps {
  fadeWidth?: number;
  containerClassName?: string;
}

export function BlurredInfiniteSlider({
  children,
  fadeWidth = 120,
  containerClassName,
  ...sliderProps
}: BlurredInfiniteSliderProps) {
  const maskStyle: CSSProperties = {
    maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
    WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
  };
  return (
    <div className={cn('relative w-full', containerClassName)} style={maskStyle}>
      <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
    </div>
  );
}

export { InfiniteSlider };
