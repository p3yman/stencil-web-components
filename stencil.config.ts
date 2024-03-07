import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'instruqt',
  outputTargets: [
    {
      type: 'dist',
      empty: true,
    },
    // {
    //   type: 'dist-custom-elements',
    //   customElementsExportBehavior: 'single-export-module',
    //   empty: true,
    //   generateTypeDeclarations: false,
    //   minify: true,
    // },
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
