import nodePath from 'node:path';

import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';

import { Config } from 'tailwindcss';

import baseConfig from '../../tailwind.preset';

const config: Config = {
  presets: [baseConfig],
  content: [
    nodePath.join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,css,scss}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
};

export default config;
