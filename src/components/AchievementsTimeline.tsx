import { Bot, Sparkle, Trophy } from 'lucide-react';

const milestones = [
  {
    year: '2025',
    title: 'II място на НОИТ',
    detail: 'Подготовка и менторство на отбори с акцент върху структури от данни и чист код.',
    icon: Trophy
  },
  {
    year: '2025',
    title: 'Школа по роботика',
    detail: 'Школа по роботика с Lego Mindstorm и Spike; участваме в състезания с акцент върху екипната работа.',
    icon: Bot
  },
  {
    year: '2023',
    title: 'Интерактивни курсове',
    detail: 'Въвеждане на H5P и адаптивни тестове в 8-12 клас.',
    icon: Sparkle
  }
];

export default function AchievementsTimeline() {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-white/20 to-accent/30" aria-hidden />
      <div className="space-y-6">
        {milestones.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.year} className="relative rounded-xl border border-white/10 bg-panel/70 p-4 shadow-glow">
              <span className="absolute -left-6 top-4 grid h-10 w-10 place-items-center rounded-full bg-surface border border-accent/50 text-accent shadow-glow">
                <Icon size={18} />
              </span>
              <div className="text-xs uppercase tracking-[0.18em] text-ink/60">{item.year}</div>
              <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
              <p className="text-sm text-ink/80 mt-1 leading-6">{item.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
