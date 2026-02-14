import { BookOpenCheck, Sparkles, TerminalSquare } from 'lucide-react';

const methods = [
  {
    title: 'Moodle + Code Runner',
    description: 'Автоматизирано оценяване на алгоритми и OOP задачи с C#, Python и Java. CI-подобни проверки в реално време.',
    tech: ['Moodle', 'CodeRunner', 'Unit tests', 'CI pipeline'],
    icon: TerminalSquare
  },
  {
    title: 'H5P интерактивности',
    description: 'Микро-уроци за визуализация на алгоритми, динамични викторини и самооценка, интегрирани в LMS.',
    tech: ['H5P', 'LTI', 'Accessibility-first', 'Learning analytics'],
    icon: Sparkles
  },
  {
    title: 'Проектно-базирано учене',
    description: '“Учене чрез правене” с 4 години менторство – от идея, през прототип, до защита пред жури.',
    tech: ['Agile rituals', 'Peer review', 'Demo days', 'Reflective docs'],
    icon: BookOpenCheck
  }
];

export default function MethodCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {methods.map((method) => {
        const Icon = method.icon;
        return (
          <article
            key={method.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/70 p-5 shadow-glow transition duration-200 hover:-translate-y-1 hover:border-accent"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-accent/15 p-2 text-accent">
                <Icon size={22} />
              </span>
              <h3 className="text-lg font-semibold">{method.title}</h3>
            </div>
            <p className="mt-3 text-sm text-ink/80 leading-6">{method.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/70">
              {method.tech.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl" aria-hidden />
            </div>
          </article>
        );
      })}
    </div>
  );
}
