import { Menu, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 blur-lg bg-blue-500/40 rounded-full" />
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg">
                  RK
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold tracking-tight">RubberKeys Studio</span>
                  <BadgeCheck size={16} className="text-cyan-300" />
                </div>
                <p className="text-xs text-blue-200/70">Keychains & Patches • Made to order</p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-6 text-sm">
              {[
                ["Gallery", "#gallery"],
                ["Process", "#process"],
                ["Materials", "#materials"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="text-blue-200/80 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-xl shadow-lg hover:opacity-90 transition"
              >
                Get a Quote
              </a>
            </div>

            <button className="md:hidden p-2 text-white/80">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
