import { useState } from 'react';
import { CheckCircle2, Play, Terminal } from 'lucide-react';

const code = `// Автоматизирано оценяване на C#
[TestFixture]
public class SortingSpecs
{
    [Test]
    public void BubbleSort_ReturnsSorted()
    {
        var input = new[] { 5, 1, 4, 2 };
        var result = Sorter.Bubble(input);
        Assert.That(result, Is.Ordered);
    }
}`;

type Status = 'idle' | 'running' | 'success';

export default function CodeRunnerDemo() {
  const [status, setStatus] = useState<Status>('idle');

  const handleRun = () => {
    setStatus('running');
    setTimeout(() => setStatus('success'), 900);
  };

  return (
    <div className="code-pane overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 bg-panel/90 px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-ink/80">
          <Terminal size={16} />
          <span>Code Runner</span>
        </div>
        <button
          type="button"
          onClick={handleRun}
          className="inline-flex items-center gap-2 rounded-md border border-accent/50 bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent hover:bg-accent/20"
          disabled={status === 'running'}
        >
          <Play size={16} /> Run
        </button>
      </div>
      <pre className="px-4 py-3 font-mono text-sm text-ink/90 whitespace-pre-wrap leading-6">{code}</pre>
      <div className="border-t border-white/10 px-4 py-3">
        {status === 'running' && <div className="text-ink/70 text-sm animate-pulse">Running tests...</div>}
        {status === 'success' && (
          <div className="flex items-center gap-2 text-sm font-semibold text-accent">
            <CheckCircle2 size={18} /> Success: All tests passed!
          </div>
        )}
        {status === 'idle' && <div className="text-ink/60 text-sm">Готово за стартиране.</div>}
      </div>
    </div>
  );
}
