'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b630d6b7.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["instruqt-alert.cjs",[[1,"instruqt-alert"]]],["instruqt-button.cjs",[[1,"instruqt-button"]]],["instruqt-section.cjs",[[1,"instruqt-section"]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
