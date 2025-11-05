import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Download, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] pt-24 overflow-hidden">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-50/60 dark:to-indigo-950/30" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 dark:border-indigo-800 bg-indigo-50/60 dark:bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">
            <Rocket className="h-4 w-4" /> Building delightful full‑stack experiences
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Be'emnet Yitayh
          </h1>
          <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Full‑stack developer crafting modern, performant web apps with React, Node, and cloud‑native backends. I blend solid engineering with playful, interactive design.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 font-semibold shadow hover:shadow-md transition-shadow"
            >
              View Projects
            </a>
            <a
              href="/Beemnet-Yitayh-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-4 py-2 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[560px] w-full"
        >
          <div className="absolute inset-0 rounded-xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
