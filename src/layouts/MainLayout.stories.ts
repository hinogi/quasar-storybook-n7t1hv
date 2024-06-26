import type { Meta, StoryObj } from '@storybook/vue3';
import MainLayout from './MainLayout.vue';

const meta: Meta<typeof MainLayout> = {
  title: 'Example/MainLayout',
  component: MainLayout,
};

export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Primary: Story = {
  render: (args) => ({
    components: { MainLayout },
    setup() {
      return { args };
    },
    template: '<MainLayout v-bind="args" />',
  }),
  args: {},
};
