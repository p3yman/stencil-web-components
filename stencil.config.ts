import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'instruqt',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      empty: true,
      generateTypeDeclarations: false,
      minify: true,
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
