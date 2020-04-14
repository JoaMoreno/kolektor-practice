import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {AgeTestingComponent} from '../app/practice/components/age-testing/age-testing.component';

export default {
    title: 'AgeTesting',
    component: AgeTestingComponent,
  };

  export const AgeVerificationOld = () => ({
    component: AgeTestingComponent,
    props: {
      age: '66',
    },
  });
  export const AgeVerificationYoung = () => ({
    component: AgeTestingComponent,
    props: {
      age: '65',
    },
  });