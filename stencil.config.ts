import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-alias-imports',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  transformAliasedImportPaths: true
};
