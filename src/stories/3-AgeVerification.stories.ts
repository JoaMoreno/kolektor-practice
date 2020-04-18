import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {AgeTestingComponent} from '../app/practice/components/age-testing/age-testing.component';

export default {
    title: 'AgeTesting',
    component: AgeTestingComponent,
  };
  // Hola
  export const isRetired = () => ({
    component: AgeTestingComponent,
    props: {
      age: '66',
    },
  });
  export const isNotRetired = () => ({
    component: AgeTestingComponent,
    props: {
      age: '65',
    },
  });
  // Hola
  export const AgeVerificationEmpy = () => ({
    component: AgeTestingComponent,
    props: {
      age: '',
    },
  });