import FirstPage from '../pages/first-page/first-page';
import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import Login from '../data/login/login';
import Register from '../data/register/register';
import QuestionOne from '../pages/Question/question-one';
import ProfilePage from '../pages/dashboard/profile-page';

const routes = {
  '/': new FirstPage(),
  '/home': new HomePage(),
  '/about': new AboutPage(),
  '/login': new Login(),
  '/register': new Register(),
  '/quiz': new QuestionOne(),
  '/dashboard': new ProfilePage(),
};

export default routes;
