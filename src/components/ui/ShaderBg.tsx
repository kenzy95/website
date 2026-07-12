import { lazy, Suspense, useEffect, useRef, useState } from 'react';

const ShaderScene = lazy(() => import('./ShaderScene'));

/**
 * Loader leger : ne telecharge le chunk three.js/ShaderGradient que quand
 * necessaire. Deux modes :
 * - 'scroll' (defaut) : quand la section approche du viewport (600px de
 *   marge), detection par position de scroll (PAS d'IntersectionObserver :
 *   il ne fire pas dans les fenetres non rendues).
 * - 'idle' : pour les fonds above-the-fold. Monte a la premiere interaction
 *   ou apres load + 3.8s, JAMAIS sous minWidth px (un poster statique fait
 *   le rendu a la place). Evite que three.js bloque le main thread pendant
 *   le chargement initial (TBT/Speed Index mobile).
 */
export default function ShaderBg({
  urlString,
  mode = 'scroll',
  minWidth = 0,
}: {
  urlString?: string;
  mode?: 'scroll' | 'idle';
  minWidth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (minWidth && window.matchMedia(`(max-width: ${minWidth - 1}px)`).matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (mode === 'idle') {
      let armed = true;
      let timer: ReturnType<typeof setTimeout>;
      const fire = () => {
        if (!armed) return;
        armed = false;
        setInView(true);
        events.forEach((e) => window.removeEventListener(e, fire));
        clearTimeout(timer);
      };
      const events = ['pointerdown', 'scroll', 'keydown', 'touchstart'] as const;
      events.forEach((e) => window.addEventListener(e, fire, { passive: true, once: true }));
      timer = setTimeout(fire, document.readyState === 'complete' ? 2500 : 3800);
      return () => {
        events.forEach((e) => window.removeEventListener(e, fire));
        clearTimeout(timer);
      };
    }

    const el = ref.current;
    if (!el) return;
    let armed = true;
    const check = () => {
      if (!armed) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 600 && r.bottom > -600) {
        armed = false;
        setInView(true);
        window.removeEventListener('scroll', check);
        window.removeEventListener('resize', check);
      }
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [mode, minWidth]);

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      {inView && (
        <Suspense fallback={null}>
          <ShaderScene urlString={urlString} />
        </Suspense>
      )}
    </div>
  );
}
