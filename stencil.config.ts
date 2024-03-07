import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'instruqt',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'www',
    },
  ],
  sourceMap: false,
  testing: {
    browserHeadless: 'new',
  },
  hashFileNames: false,
  devServer: {
    initialLoadUrl: '/www',
  },
};
