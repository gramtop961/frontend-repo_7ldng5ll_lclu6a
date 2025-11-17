import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute top-24 -right-24 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Custom Rubber Keychains & Patches
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-lg text-blue-200/90 max-w-xl"
          >
            Bring your logo or idea to life in soft, durable PVC. Smooth edges, bold colors, and premium finishes. Bulk-friendly pricing and fast turnaround.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 flex items-center gap-4"
          >
            <a href="#gallery" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl transition">
              See Gallery
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition">
              Start a Project
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40"
        >
          <Spline scene="https://prod.spline.design/TIhNSO9pp2VWyMxS/scene.splinecode" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
