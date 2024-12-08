import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.Dxyalgj8.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/legacy.BP_y8l9i.js","_app/immutable/chunks/runtime.Ddn4xJch.js","_app/immutable/chunks/template.DLBHmnEA.js","_app/immutable/chunks/if.u6MMl4Sn.js","_app/immutable/chunks/lifecycle.B8AWO23D.js","_app/immutable/chunks/events.BtHSOdvu.js","_app/immutable/chunks/attributes.c-TNxzDN.js","_app/immutable/chunks/input.BOWS_y0C.js","_app/immutable/chunks/store.DnEhmf44.js","_app/immutable/chunks/gloabalStore.CxxTfE3j.js","_app/immutable/chunks/index.BfBgywvV.js","_app/immutable/chunks/index-client.CpedM9D5.js","_app/immutable/chunks/firebase.DlvT6PSc.js"];
export const stylesheets = ["_app/immutable/assets/0.CJaStgrO.css"];
export const fonts = [];
