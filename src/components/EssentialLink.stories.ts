import type { Meta, StoryObj } from '@storybook/vue3';
import EssentialLink from './EssentialLink.vue';

const meta: Meta<typeof EssentialLink> = {
  title: 'Example/EssentialLink',
  component: EssentialLink,
};

export default meta;

type Story = StoryObj<typeof EssentialLink>;

export const Primary: Story = {
  render: (args) => ({
    components: { EssentialLink },
    setup() {
      return { args };
    },
    template: '<EssentialLink v-bind="args" />',
  }),
  args: {
    title: 'EssentialLink',
    caption: 'Caption',
    link: 'http://',
    icon: '',
  },
};
