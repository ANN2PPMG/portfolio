import{j as e}from"./jsx-runtime.ClP7wGfN.js";import{r as i}from"./index.DK-fsZOb.js";import{c as t}from"./createLucideIcon.Dkdu1INU.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],o=t("CircleCheck",r);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],l=t("Play",a);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],x=t("Terminal",d),m=`// Автоматизирано оценяване на C#
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
}`;function h(){const[s,n]=i.useState("idle"),c=()=>{n("running"),setTimeout(()=>n("success"),900)};return e.jsxs("div",{className:"code-pane overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 bg-panel/90 px-4 py-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-ink/80",children:[e.jsx(x,{size:16}),e.jsx("span",{children:"Code Runner"})]}),e.jsxs("button",{type:"button",onClick:c,className:"inline-flex items-center gap-2 rounded-md border border-accent/50 bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent hover:bg-accent/20",disabled:s==="running",children:[e.jsx(l,{size:16})," Run"]})]}),e.jsx("pre",{className:"px-4 py-3 font-mono text-sm text-ink/90 whitespace-pre-wrap leading-6",children:m}),e.jsxs("div",{className:"border-t border-white/10 px-4 py-3",children:[s==="running"&&e.jsx("div",{className:"text-ink/70 text-sm animate-pulse",children:"Running tests..."}),s==="success"&&e.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold text-accent",children:[e.jsx(o,{size:18})," Success: All tests passed!"]}),s==="idle"&&e.jsx("div",{className:"text-ink/60 text-sm",children:"Готово за стартиране."})]})]})}export{h as default};
