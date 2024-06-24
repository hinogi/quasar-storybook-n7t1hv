import EssentialLink from './EssentialLink.vue';

export default {
  title: 'Example/EssentialLink',
  component: EssentialLink,
};

const Template = (args: unknown) => ({
  components: { EssentialLink },
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<EssentialLink v-bind="args" />',
  args: {
    title: 'EssentialLink',
    caption: 'Caption',
    link: 'http://',
    icon: '',
  },
});

export const Primary = Template.bind({});
