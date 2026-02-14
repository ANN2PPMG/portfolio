import { useEffect, useState } from 'react';

const codeSample = `// Code as a teaching craft
public class ClassroomAutomation
{
    public bool RunAssessments()
    {
        var rubric = new Rubric("Algorithms");
        rubric.AddTest(new UnitTest("BubbleSort", 10));
        rubric.AddTest(new UnitTest("MergeSort", 10));
        return rubric.RunAll();
    }
}`;

export default function CodeTypewriter() {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      setText(codeSample.slice(0, index));

      if (index < codeSample.length) {
        index += 1;
        timeout = setTimeout(tick, 24);
      } else {
        timeout = setTimeout(() => {
          index = 0;
          tick();
        }, 1200);
      }
    };

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="code-pane p-4 sm:p-5 font-mono text-sm text-ink/90 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/2 via-transparent to-white/5" aria-hidden />
      <pre className="whitespace-pre-wrap leading-6"><span className="text-accent">{text}</span><span className="animate-pulse text-accent">▊</span></pre>
    </div>
  );
}
