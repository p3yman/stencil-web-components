import { b as bootstrapLazy } from './index-8e5c4f45.js';
export { s as setNonce } from './index-8e5c4f45.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["instruqt-alert",[[1,"instruqt-alert"]]],["instruqt-button",[[1,"instruqt-button"]]],["instruqt-section",[[1,"instruqt-section"]]]], options);
};

export { defineCustomElements };
