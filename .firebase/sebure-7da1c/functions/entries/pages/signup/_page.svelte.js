import { a as attr } from "../../../chunks/attributes.js";
import { p as pop, a as push } from "../../../chunks/index2.js";
import "../../../chunks/client.js";
import { B as BackFab } from "../../../chunks/BackFab.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
import "firebase/firestore";
function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  let passwordConfirm = "";
  let termsAndConditions = false;
  let firstName = "";
  let lastName = "";
  $$payload.out += `<section class="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image"><div class="absolute inset-0 image-wrap z-1 bg-[url('/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover"></div> <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2" id="particles-snow"></div> <div class="container relative z-3"><div class="flex justify-center"><div class="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md"><a href="index.html"><img src="assets/images/logo-icon-64.png" class="mx-auto" alt=""></a> <h5 class="my-6 text-xl font-semibold">Signup</h5> <form class="text-start"><div class="grid grid-cols-1"><div class="mb-4"><label class="font-semibold" for="fname">First Name:</label> <input id="fname" type="text" class="form-input mt-3" placeholder="Harry"${attr("value", firstName)}></div> <div class="mb-4"><label class="font-semibold" for="lname">Last Name:</label> <input id="lname" type="text" class="form-input mt-3" placeholder="Potter"${attr("value", lastName)}></div> <div class="mb-4"><label class="font-semibold" for="email">Email Address:</label> <input id="email" type="email" class="form-input mt-3" placeholder="name@example.com"${attr("value", email)}></div> <div class="mb-4"><label class="font-semibold" for="password">Password:</label> <input id="password" type="password" class="form-input mt-3" placeholder="Password:"${attr("value", password)}></div> <div class="mb-4"><label class="font-semibold" for="passwordConfirm">Confirm Password:</label> <input id="passwordConfirm" type="password" class="form-input mt-3" placeholder="Confirm Password:"${attr("value", passwordConfirm)}></div> <div class="mb-4"><div class="flex items-center mb-0"><input class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-green-600 focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 me-2" type="checkbox"${attr("checked", termsAndConditions, true)}> <label class="form-check-label text-slate-400" for="AcceptT&amp;C">I Accept <a href="/terms-and-conditions" class="text-green-600">Terms And Condition</a></label></div></div> <div class="mb-4"><button class="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Register</button></div> <div class="text-center"><span class="text-slate-400 me-2">Already have an account ?</span> <a href="/login" class="text-black dark:text-white font-bold">Sign in</a></div></div></form></div></div></div></section> `;
  BackFab($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
