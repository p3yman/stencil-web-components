import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'instruqt',
  outputTargets: [
    {
      type: 'dist',
      empty: true,
    },
  ],
  sourceMap: false,
  testing: {
    browserHeadless: 'new',
  },
  hashFileNames: false,
  devServer: {
    initialLoadUrl: '/src',
  },
};
