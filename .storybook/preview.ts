import { setup } from '@storybook/vue3';
import { Quasar } from 'quasar';

import '@quasar/extras/roboto-font/roboto-font.css';

import '@quasar/extras/material-icons/material-icons.css';

import 'quasar/dist/quasar.sass';

import 'src/css/app.sass';

setup((app) => {
  app.use(Quasar, {});
});
