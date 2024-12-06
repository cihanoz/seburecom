import { w as writable } from "./index.js";
const defaultValue = {
  darkMode: false,
  mobileNavOpen: false,
  svgLogo: "/alsaki-logo.svg",
  svgLogoDarkMode: "/alsaki-logo-darkmode.svg"
};
const initialValue = defaultValue;
const globalStore = writable(initialValue);
globalStore.subscribe((value) => {
});
export {
  globalStore as g
};
