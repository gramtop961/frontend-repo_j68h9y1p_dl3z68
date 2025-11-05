import { motion } from 'framer-motion';

const services = [
  {
    title: 'Hair Styling',
    desc: 'Precision cuts and couture finishes.',
    emoji: '💇‍♀️',
  },
  {
    title: 'Facials',
    desc: 'Glow-boosting treatments for every skin.',
    emoji: '🌸',
  },
  {
    title: 'Nail Art',
    desc: 'Elegant manicure designs with care.',
    emoji: '💅',
  },
  {
    title: 'Makeup',
    desc: 'Camera-ready looks for any occasion.',
    emoji: '💄',
  },
];

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-white to-rose-50 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-rose-50/60 to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-rose-900 sm:text-4xl">Signature Services</h2>
          <p className="mt-3 text-rose-900/70">Indulge in treatments tailored to you.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ rotateX: 6, rotateY: -6, translateZ: 4 }}
              className="group relative rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-white/40 backdrop-blur-md"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              {/* Shimmer border */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl p-[1px]">
                <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(110deg,rgba(255,192,203,0.5),rgba(255,255,255,0.2),rgba(255,192,203,0.5))] opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative z-10">
                <div className="text-5xl">{s.emoji}</div>
                <h3 className="mt-4 font-semibold text-rose-900">{s.title}</h3>
                <p className="mt-2 text-sm text-rose-900/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
