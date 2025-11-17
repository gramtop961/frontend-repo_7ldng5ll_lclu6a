import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParallaxShowcase from "./components/ParallaxShowcase";
import Process from "./components/Process";
import Materials from "./components/Materials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.08),transparent_35%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <ParallaxShowcase />
        <Process />
        <Materials />
        <Contact />

        <footer className="py-10 text-center text-blue-200/70 border-t border-white/10 mt-10">
          <p>© {new Date().getFullYear()} RubberKeys Studio — Crafted in PVC</p>
        </footer>
      </main>
    </div>
  )
}

export default App
