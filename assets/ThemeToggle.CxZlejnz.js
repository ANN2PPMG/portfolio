import{j as o}from"./jsx-runtime.ClP7wGfN.js";import{r as a}from"./index.DK-fsZOb.js";import{c as s}from"./createLucideIcon.Dkdu1INU.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],m=s("Moon",d);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],l=s("Sun",h),c="theme-preference",p=()=>{if(typeof window>"u")return"dark";const e=localStorage.getItem(c);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"};function f(){const[e,r]=a.useState("dark");a.useEffect(()=>{const t=p();r(t),document.documentElement.setAttribute("data-theme",t)},[]);const i=()=>{const t=e==="dark"?"light":"dark";r(t),document.documentElement.setAttribute("data-theme",t),localStorage.setItem(c,t)},n=e==="light";return o.jsxs("button",{type:"button",onClick:i,className:"inline-flex items-center gap-2 rounded-lg border border-white/10 bg-panel/70 px-3 py-2 text-sm font-semibold text-ink shadow-glow transition hover:border-accent","aria-label":n?"Смени на тъмен режим":"Смени на светъл режим",children:[n?o.jsx(m,{size:16}):o.jsx(l,{size:16}),o.jsx("span",{children:n?"Тъмна тема":"Светла тема"})]})}export{f as default};
