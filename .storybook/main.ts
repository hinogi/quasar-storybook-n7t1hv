import { type StorybookConfig } from '@storybook/vue3-vite';
import VuePlugin from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import { mergeConfig } from 'vite';
import * as hq from 'alias-hq';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite',
  },
  viteFinal: (config, { configType }) =>
    mergeConfig(config, {
      plugins: [
        VuePlugin({
          template: { transformAssetUrls },
        }),
        quasar({
          sassVariables: 'src/css/quasar.variables.sass',
        }),
      ],
      server: {
        fs: {
          strict: false,
        },
      },
      resolve: {
        alias: hq.get('rollup'),
      },
    }),
};

export default config;
