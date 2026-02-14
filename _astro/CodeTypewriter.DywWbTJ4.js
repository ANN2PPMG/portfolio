import{j as e}from"./jsx-runtime.ClP7wGfN.js";import{r as i}from"./index.DK-fsZOb.js";const n=`// Code as a teaching craft
public class ClassroomAutomation
{
    public bool RunAssessments()
    {
        var rubric = new Rubric("Algorithms");
        rubric.AddTest(new UnitTest("BubbleSort", 10));
        rubric.AddTest(new UnitTest("MergeSort", 10));
        return rubric.RunAll();
    }
}`;function u(){const[a,o]=i.useState("");return i.useEffect(()=>{let t=0,s;const r=()=>{o(n.slice(0,t)),t<n.length?(t+=1,s=setTimeout(r,24)):s=setTimeout(()=>{t=0,r()},1200)};return r(),()=>clearTimeout(s)},[]),e.jsxs("div",{className:"code-pane p-4 sm:p-5 font-mono text-sm text-ink/90 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none bg-gradient-to-b from-white/2 via-transparent to-white/5","aria-hidden":!0}),e.jsxs("pre",{className:"whitespace-pre-wrap leading-6",children:[e.jsx("span",{className:"text-accent",children:a}),e.jsx("span",{className:"animate-pulse text-accent",children:"▊"})]})]})}export{u as default};
