var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=n);var l=n("iQIUW");const r={form:document.querySelector(".form"),labels:document.querySelectorAll("label"),inputs:document.querySelectorAll("input")};function i(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}r.labels.forEach((e=>{e.style.display="inline-block"})),r.inputs.forEach((e=>{e.style.display="block"})),r.form.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget,o=Number(t.elements.delay.value),n=Number(t.elements.step.value),r=Number(t.elements.amount.value);for(let e=1;e<=r;e++){i(e,o+(e-1)*n).then((({position:e,delay:t})=>{l.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{l.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),t.reset()}}));
//# sourceMappingURL=03-promises.0ab7e9b1.js.map
