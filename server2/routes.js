import AppComponent from './components/app';
import IndexComponent from './components/index';
import SearchComponent from './components/search';
import AboutComponent from './components/about';
import LoginComponent from './components/login';
import RegistrationComponent from './components/register';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: IndexComponent
    },
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/register',
      component: RegistrationComponent
    },
    {
      path: '/search',
      component: SearchComponent
    }
  ]
}

export { routes };
