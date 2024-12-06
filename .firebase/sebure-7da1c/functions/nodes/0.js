import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.Cn_MC1w-.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/legacy.CPxRCyUd.js","_app/immutable/chunks/runtime.mkUH6Bax.js","_app/immutable/chunks/template.3bfAoeHZ.js","_app/immutable/chunks/if.DPrhGAF4.js","_app/immutable/chunks/attributes.BTDV-P5f.js","_app/immutable/chunks/input.bhjvIeSf.js","_app/immutable/chunks/store.CD9Z2e80.js","_app/immutable/chunks/gloabalStore.DxGrd_d4.js","_app/immutable/chunks/index.Bswkcv_P.js","_app/immutable/chunks/index-client.BKFV_XPj.js","_app/immutable/chunks/firebase.RQoDCWUs.js","_app/immutable/chunks/Loader.BF-I7cZh.js"];
export const stylesheets = ["_app/immutable/assets/0.CJaStgrO.css"];
export const fonts = [];
