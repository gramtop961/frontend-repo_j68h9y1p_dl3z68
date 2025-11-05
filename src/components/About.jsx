import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-10%] top-[-10%] h-96 w-96 rounded-full bg-rose-100/80 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-10%] h-96 w-96 rounded-full bg-rose-200/70 blur-3xl" />
      </div>

      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl"
        >
          <Spline
            scene="https://prod.spline.design/05C4s2cJf9x2dYkZ/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="font-serif text-3xl text-rose-900 sm:text-4xl">About Lush & Glow Studio</h2>
          <p className="text-rose-900/80">
            At Lush & Glow Studio, our expert stylists bring out your best look with personalized care,
            luxury products, and artistic precision. Step into a sanctuary of calm where soft light,
            refined textures, and thoughtful details elevate every visit.
          </p>
          <div>
            <a
              href="#experts"
              className="inline-flex items-center rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-300/40 transition-transform hover:scale-[1.02]"
            >
              Meet Our Experts
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
