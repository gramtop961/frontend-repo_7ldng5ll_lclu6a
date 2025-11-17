import { motion } from "framer-motion";

const chips = [
  "Soft PVC", "Glow-in-the-dark", "Metallic Ink", "Pantone Match", "3D Layers", "Velcro Backing", "Peel-n-stick", "Double-sided"
];

export default function Materials() {
  return (
    <section id="materials" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Materials & Options</h2>
          <p className="text-blue-200/80 mt-3">Select finishes and attachments to suit your use.</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {chips.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-4 py-2 rounded-full border border-white/10 bg-slate-900/60 text-blue-100"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
