import { useState } from "react";
import { motion } from "framer-motion";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${BACKEND_URL}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data?.message ? "success" : "error");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get a custom quote</h2>
            <p className="text-blue-200/80 mt-3">Tell us about your design, quantity, and extra options. We'll reply fast.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/50" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/50" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your project (sizes, quantity, colors)" rows={5} className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/50" />
              <button disabled={status === "loading"} className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold shadow-lg disabled:opacity-60">
                {status === "loading" ? "Sending..." : "Send Inquiry"}
              </button>
              {status === "success" && <p className="text-green-300">Thanks! We'll be in touch shortly.</p>}
              {status === "error" && <p className="text-red-300">Something went wrong. Please try again.</p>}
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
          >
            <h3 className="text-white font-semibold">Why choose us</h3>
            <ul className="list-disc list-inside text-blue-200/80 mt-3 space-y-2">
              <li>Pantone-matched colors and crisp detailing</li>
              <li>Sturdy attachments and premium finishes</li>
              <li>Low minimum order quantities</li>
              <li>Fast sampling and production lead times</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
