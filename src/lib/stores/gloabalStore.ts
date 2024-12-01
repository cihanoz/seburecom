import { browser } from '$app/environment';
import type { GlobalStore } from '$lib/models/GlobalStoreType';
import { writable } from 'svelte/store';

const defaultValue: GlobalStore = {
  darkMode: false,
  svgLogo: '/alsaki-logo.svg',
  svgLogoDarkMode: '/alsaki-logo-darkmode.svg'
};
const initialValue = browser ?
  window.localStorage.getItem('globalStore') ?
    JSON.parse(window.localStorage.getItem('globalStore') || "") : defaultValue : defaultValue;

const globalStore = writable<GlobalStore>(initialValue);

globalStore.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('globalStore', JSON.stringify(value));
  }
});

export default globalStore;