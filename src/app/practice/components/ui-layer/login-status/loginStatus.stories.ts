import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { LoginStatusComponent } from './login-status.component';
LoginStatusComponent
export default {
    title: 'LoginStatus',
    component: LoginStatusComponent,
  };

  export const isLogged = () => ({
    component: LoginStatusComponent,
    props: {
      isLogged: true,
      actions: [
        {name: "Configuration", goTo:"/config", separatedBottom: true},
        {name: "Other Action", goTo:"#"},
        {name: "Another Action", goTo:"#"},
        {name: "Logout", goTo:"#", separatedTop: true}
      ]
    }, 
  });

  export const isGuestUser = () => ({
    component: LoginStatusComponent,
    props: {
      isLogged: false,
    },
  });

  export const DropdownRight = () => ({
    component: LoginStatusComponent,
    props: {
      status: 'Right',
      rightAligned: true
    },
  });