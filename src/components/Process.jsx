import { motion } from "framer-motion";
import { Wrench, Palette, Layers3, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Design & Colors",
    desc: "Send your logo or idea. We help refine it for molded PVC with layered colors.",
  },
  {
    icon: Layers3,
    title: "Mold & Sample",
    desc: "We build the mold and share a physical sample for your approval.",
  },
  {
    icon: Wrench,
    title: "Production",
    desc: "Your order is crafted with durable materials and quality checks.",
  },
  {
    icon: Sparkles,
    title: "Finishing",
    desc: "Choose attachments: keyrings, adhesive backing, Velcro, or sewing channels.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
          <p className="text-blue-200/80 mt-3">Simple steps from idea to finished pieces.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-slate-900/50"
            >
              <s.icon className="text-cyan-300" />
              <h3 className="text-white font-semibold mt-4">{s.title}</h3>
              <p className="text-blue-200/80 text-sm mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
