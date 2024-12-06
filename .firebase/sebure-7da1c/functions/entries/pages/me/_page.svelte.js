import { e as escape_html } from "../../../chunks/escaping.js";
import { p as pop, a as push } from "../../../chunks/index2.js";
import { a as auth } from "../../../chunks/firebase.js";
import "firebase/auth";
import "firebase/firestore";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<!---->${escape_html(auth.currentUser?.email ?? "No user logged in")} <br> <a class="button" href="/signout">Sign out</a><br> <a class="button" href="/">Home</a>`;
  pop();
}
export {
  _page as default
};
