import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Team Board',
    description:
      'Collaborative kanban with live updates, role-based access, and analytics.',
    tech: ['React', 'FastAPI', 'MongoDB', 'WebSockets'],
    link: '#',
    accent: 'from-pink-500 to-rose-500',
  },
  {
    title: 'E‑commerce Kit',
    description:
      'Headless storefront with payments, inventory, and serverless webhooks.',
    tech: ['Vite', 'Node', 'Stripe', 'Tailwind'],
    link: '#',
    accent: 'from-indigo-500 to-sky-500',
  },
  {
    title: 'AI Content Studio',
    description:
      'Content pipelines with embeddings, vector search, and moderation.',
    tech: ['Next.js', 'Python', 'OpenAI', 'Pinecone'],
    link: '#',
    accent: 'from-emerald-500 to-teal-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Selected Work
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            A few projects that highlight product sense, performance, and polish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative rounded-xl border border-neutral-200/70 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className={`h-32 w-full bg-gradient-to-tr ${p.accent}`} />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {p.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors" />
                </div>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 text-xs text-neutral-700 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
