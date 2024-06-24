import EssentialLink from './EssentialLink.vue';

export default {
  title: 'Example/EssentialLink',
  component: EssentialLink,
};

const Template = (args: any) => ({
  components: { EssentialLink },
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<essentialLink v-bind="args" />',
});

export const Primary = Template.bind({});
