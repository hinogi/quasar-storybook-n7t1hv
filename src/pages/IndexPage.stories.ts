import type { Meta, StoryObj } from '@storybook/vue3';
import IndexPage from './IndexPage.vue';
import { QLayout, QPageContainer } from 'quasar';

const meta: Meta<typeof IndexPage> = {
  title: 'Example/IndexPage',
  component: IndexPage,
  decorators: [
    (story) => ({
      components: { story, QLayout, QPageContainer },
      template: '<QLayout><QPageContainer><story /></QPageContainer></QLayout>',
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof IndexPage>;

export const Primary: Story = {
  render: (args) => ({
    components: { IndexPage },
    setup() {
      return { args };
    },
    template: '<IndexPage v-bind="args" />',
  }),
  args: {},
};
