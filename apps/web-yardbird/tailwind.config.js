const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const baseConfig = require('../../tailwind.config.base.js');
const deepMerge = require('deepmerge');

const tailwindConfig = deepMerge(baseConfig, {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

module.exports = tailwindConfig;
