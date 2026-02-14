import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

const storageKey = 'theme-preference';

const getPreferred = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem(storageKey) as Theme | null;
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const initial = getPreferred();
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(storageKey, next);
  };

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-panel/70 px-3 py-2 text-sm font-semibold text-ink shadow-glow transition hover:border-accent"
      aria-label={isLight ? 'Смени на тъмен режим' : 'Смени на светъл режим'}
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
      <span>{isLight ? 'Тъмна тема' : 'Светла тема'}</span>
    </button>
  );
}
