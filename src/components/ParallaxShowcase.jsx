import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sample = [
  {
    title: "Soft PVC Keychains",
    desc: "Vibrant colors, clean edges, and flexible feel.",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Velcro Patches",
    desc: "Durable, textured, and ready for uniforms or bags.",
    img: "https://images.unsplash.com/photo-1600086783001-029a9b2e4b1b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Glow & Metallic",
    desc: "Special finishes that pop under any light.",
    img: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ParallaxShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="gallery" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Showcase</h2>
          <p className="text-blue-200/80 max-w-xl">
            A peek at what we can craft. Each piece is molded with precision and finished by hand for that soft-touch feel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sample.map((s, i) => (
            <motion.div key={s.title} style={{ y: i % 2 === 0 ? y1 : y2 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <img src={s.img} alt={s.title} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="text-blue-200/80 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
