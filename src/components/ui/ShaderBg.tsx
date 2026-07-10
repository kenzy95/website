import { lazy, Suspense, useEffect, useRef, useState } from 'react';

const ShaderScene = lazy(() => import('./ShaderScene'));

/**
 * Loader leger : ne telecharge le chunk three.js/ShaderGradient que quand la
 * section approche du viewport (600px de marge). Detection par position de
 * scroll (getBoundingClientRect), deliberement PAS d'IntersectionObserver :
 * il ne fire pas dans les fenetres non rendues et depend du compositeur.
 */
export default function ShaderBg() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      {inView && (
        <Suspense fallback={null}>
          <ShaderScene />
        </Suspense>
      )}
    </div>
  );
}
