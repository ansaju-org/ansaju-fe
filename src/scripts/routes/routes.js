import FirstPage from '../pages/first-page/first-page';
import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import Login from '../pages/login-register-page/login';
import Register from '../pages/login-register-page/register';

const routes = {
  '/': new FirstPage(),
  '/home': new HomePage(),
  '/about': new AboutPage(),
  '/login': new Login(),
  '/register': new Register(),
};

export default routes;
