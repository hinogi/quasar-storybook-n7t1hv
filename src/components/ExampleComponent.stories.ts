import type { Meta, StoryObj } from '@storybook/vue3';
import ExampleComponent from './ExampleComponent.vue';

const meta: Meta<typeof ExampleComponent> = {
  title: 'Example/ExampleComponent',
  component: ExampleComponent,
};

export default meta;

type Story = StoryObj<typeof ExampleComponent>;

export const Primary: Story = {
  render: (args) => ({
    components: { ExampleComponent },
    setup() {
      return { args };
    },
    template: '<ExampleComponent v-bind="args" />',
  }),
  args: {
    title: 'ExampleComponent',

    meta: {
      totalCount: 4,
    },
    todos: [
      { id: 1, content: 'Hallo' },
      { id: 2, content: 'Hoi' },
    ],
  },
};
