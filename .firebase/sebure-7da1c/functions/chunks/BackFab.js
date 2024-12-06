import { f as fallback, b as bind_props, p as pop, c as stringify, a as push } from "./index2.js";
import { a as attr } from "./attributes.js";
function ArrowLeftIcon($$payload, $$props) {
  push();
  let size = fallback($$props["size"], "24");
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let customClass = fallback($$props["class"], "");
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr("class", `feather feather-arrow-left ${stringify(customClass)}`)}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;
  bind_props($$props, { size, strokeWidth, class: customClass });
  pop();
}
function BackFab($$payload) {
  $$payload.out += `<div class="fixed bottom-3 end-3 z-10"><a href="/back" class="back-button btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full">`;
  ArrowLeftIcon($$payload, { class: "size-6" });
  $$payload.out += `<!----></a></div>`;
}
export {
  BackFab as B
};
