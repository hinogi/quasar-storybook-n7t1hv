import ExampleComponent from './ExampleComponent.vue';

export default {
  title: 'Example/ExampleComponent',
  component: ExampleComponent,
};

const Template = (args: unknown) => ({
  components: { ExampleComponent },
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ExampleComponent  v-bind="args" />',
  args: {
    title: 'ExampleComponent',
    todos: [],
    meta: {},
    active: true,
  },
});

export const Primary = Template.bind({});
