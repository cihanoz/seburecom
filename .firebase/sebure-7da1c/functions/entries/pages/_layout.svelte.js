import { s as store_get, u as unsubscribe_stores, p as pop, a as push, d as slot } from "../../chunks/index2.js";
import { g as globalStore } from "../../chunks/gloabalStore.js";
import { a as attr } from "../../chunks/attributes.js";
import { onAuthStateChanged } from "firebase/auth";
import { a as auth } from "../../chunks/firebase.js";
function DarkModeSwitch($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="fixed top-[120px] -left-2 z-3"><span class="relative inline-block rotate-90"><input type="checkbox" class="checkbox opacity-0 absolute" id="chk"${attr("checked", store_get($$store_subs ??= {}, "$globalStore", globalStore).darkMode, true)}> <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-700 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk"><i class="uil uil-moon text-[20px] text-yellow-500 mt-1"></i> <i class="uil uil-sun text-[20px] text-yellow-500 mt-1"></i> <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] start-[2px] size-7"></span></label></span></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Loader($$payload) {
  $$payload.out += `<div id="preloader"><div id="status"><div class="spinner"><div class="double-bounce1"></div> <div class="double-bounce2"></div></div></div></div>`;
}
function _layout($$payload, $$props) {
  push();
  let firebaseInitialized = false;
  onAuthStateChanged(auth, (user) => {
    if (!firebaseInitialized) {
      firebaseInitialized = true;
    }
  });
  if (firebaseInitialized) {
    $$payload.out += "<!--[-->";
    DarkModeSwitch($$payload);
    $$payload.out += `<!----> <!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    Loader($$payload);
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _layout as default
};
