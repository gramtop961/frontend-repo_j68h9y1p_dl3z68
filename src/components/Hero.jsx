import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Cursor-follow glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-gradient-to-b from-rose-50 via-white to-rose-100"
    >
      {/* 3D Background (mounted to avoid flashing/mismatch) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {mounted ? (
          <Spline
            scene="https://prod.spline.design/NkU9jwELyhlHLLJo/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(255,192,203,0.35),rgba(255,255,255,0)_60%)]" />
        )}
      </div>

      {/* Ambient shifting light overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      >
        <div className="absolute -top-32 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,182,193,0.35),rgba(255,255,255,0)_60%)] blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100dvh] items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="font-serif text-5xl leading-tight text-rose-900/90 sm:text-6xl md:text-7xl"
          >
            Lush & Glow Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-lg text-rose-900/70 sm:text-xl"
          >
            Redefine Your Style. Refresh Your Soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-10 flex items-center justify-center"
          >
            <a
              href="#book"
              className="group relative inline-flex items-center gap-3 rounded-full bg-rose-500 px-8 py-4 text-white shadow-lg shadow-rose-300/40 transition-transform duration-300 hover:scale-105 focus:outline-none"
            >
              <span className="absolute inset-0 -z-0 rounded-full bg-rose-400 opacity-75 blur-md transition-opacity group-hover:opacity-90" />
              <span className="relative z-10 font-medium tracking-wide">Book an Appointment</span>
              <span className="relative z-10 inline-block h-2 w-2 animate-bounce rounded-full bg-white" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Cursor-follow shimmer */}
      {mounted && (
        <motion.div
          className="pointer-events-none absolute z-20 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,192,203,0.45),rgba(255,192,203,0)_65%)] blur-2xl"
          style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        />
      )}

      {/* Decorative bottom gradient for transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-rose-50" />
    </section>
  );
}

// Extra keyframes via Tailwind plugin-free utility
if (typeof document !== 'undefined' && !document.getElementById('pulse-slow')) {
  const style = document.createElement('style');
  style.id = 'pulse-slow';
  style.innerHTML = `@keyframes pulse-slow{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.animate-pulse-slow{animation:pulse-slow 8s ease-in-out infinite}`;
  document.head.appendChild(style);
}
