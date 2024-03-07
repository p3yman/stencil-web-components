import { p as promiseResolve, b as bootstrapLazy } from './index-8e5c4f45.js';
export { s as setNonce } from './index-8e5c4f45.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.12.5 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["instruqt-alert",[[1,"instruqt-alert"]]],["instruqt-button",[[1,"instruqt-button"]]],["instruqt-section",[[1,"instruqt-section"]]]], options);
});
