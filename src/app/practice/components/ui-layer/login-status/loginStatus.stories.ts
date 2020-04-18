import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { LoginStatusComponent } from './login-status.component';
LoginStatusComponent
export default {
    title: 'LoginStatus',
    component: LoginStatusComponent,
  };

  export const LogIn = () => ({
    component: LoginStatusComponent,
    props: {
      status: 'Loged',
    }, 
  });
  
  export const LogOut = () => ({
    component: LoginStatusComponent,
    props: {
      status: 'unloged',
    },
  });

  export const Empy = () => ({
    component: LoginStatusComponent,
    props: {
      status: '',
    },
  });