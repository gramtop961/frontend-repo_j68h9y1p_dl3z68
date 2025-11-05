import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const gallery = [
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514369118554-e20d93546b30?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
];

const testimonials = [
  {
    name: 'Alicia',
    quote: 'Absolutely transformative — I left glowing and confident.',
  },
  {
    name: 'Maya',
    quote: 'Every detail feels premium. My new go-to salon.',
  },
  {
    name: 'Zara',
    quote: 'The ambience, the care, the finish — exquisite.',
  },
];

export default function Showcase() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      const cont = containerRef.current;
      if (!track || !cont) return;
      const overflow = track.scrollWidth - cont.clientWidth;
      setConstraints({ left: -Math.max(0, overflow), right: 0 });
    }
    measure();
    const handle = () => measure();
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  // Scroll-to-top visibility
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-rose-50 to-rose-100/50">
      {/* Gallery */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl text-rose-900 sm:text-4xl">Gallery</h2>
          <p className="mt-2 text-rose-900/70">A glimpse into our world of elegance.</p>
        </div>
        <div ref={containerRef} className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 p-4 backdrop-blur-md">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.1}
            className="flex gap-6"
          >
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] w-[22rem] shrink-0 overflow-hidden rounded-2xl shadow-xl"
              >
                <img src={src} alt="Salon showcase" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 text-center">
          <h3 className="font-serif text-3xl text-rose-900">What Clients Say</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl bg-white/40 p-6 backdrop-blur-xl ring-1 ring-white/50"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 shadow-inner" />
                <div className="font-medium text-rose-900">{t.name}</div>
              </div>
              <motion.p
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="overflow-hidden whitespace-nowrap border-l-2 border-rose-300 pl-4 font-light text-rose-900/80"
              >
                {t.quote}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div id="book" className="relative isolate overflow-hidden px-6 py-28 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(255,192,203,0.7),rgba(255,255,255,0),rgba(255,192,203,0.7))] blur-3xl animate-spin-slow" />
        </div>
        <h3 className="font-serif text-3xl text-rose-900">Your transformation starts here.</h3>
        <div className="mt-8">
          <a
            href="#"
            className="relative inline-flex items-center justify-center rounded-full bg-rose-600 px-10 py-4 text-white shadow-xl shadow-rose-400/40 transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full bg-rose-400 opacity-70 blur-xl" />
            <span className="relative z-10 text-lg">Book Now</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-rose-950 text-rose-50">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-lg font-medium">Lush & Glow Studio</div>
            <nav className="flex items-center gap-6 text-rose-100/80">
              <a href="#" className="transition-transform hover:-translate-y-0.5 hover:text-white">Home</a>
              <a href="#" className="transition-transform hover:-translate-y-0.5 hover:text-white">Services</a>
              <a href="#" className="transition-transform hover:-translate-y-0.5 hover:text-white">Gallery</a>
              <a href="#" className="transition-transform hover:-translate-y-0.5 hover:text-white">Contact</a>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm text-rose-200/70">© {new Date().getFullYear()} Lush & Glow Studio. All rights reserved.</div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 rounded-full bg-rose-600 p-3 text-white shadow-lg transition hover:scale-105"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </section>
  );
}

// keyframes for slow spin
if (typeof document !== 'undefined' && !document.getElementById('spin-slow')) {
  const style = document.createElement('style');
  style.id = 'spin-slow';
  style.innerHTML = `@keyframes spin-slow{from{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}.animate-spin-slow{animation:spin-slow 18s linear infinite}`;
  document.head.appendChild(style);
}
