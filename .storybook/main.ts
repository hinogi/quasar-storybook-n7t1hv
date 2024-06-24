import { type StorybookConfig } from '@storybook/vue3-vite';
import VuePlugin from '@vitejs/plugin-vue';
import { mergeConfig } from 'vite';

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
      plugins: [VuePlugin()],
      server: {
        fs: {
          strict: false,
        },
      },
    }),
};

export default config;
