import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            About
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I’m Be'emnet Yitayh, a full‑stack developer focused on building fast, accessible,
            and resilient web apps. I love turning complex problems into intuitive, elegant
            solutions — and adding delightful interactions along the way.
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            My toolkit includes React, TypeScript, Node, Python, FastAPI and cloud services.
            I care deeply about DX, performance, and sound architecture.
          </p>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="space-y-3"
        >
          {['React + Vite', 'FastAPI + Python', 'MongoDB + SQL', 'Tailwind + Framer Motion', 'AWS + CI/CD'].map((skill) => (
            <li key={skill} className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 px-4 py-3">
              <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{skill}</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
