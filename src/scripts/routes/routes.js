import FirstPage from '../pages/first-page/first-page';
import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import LeftQuestion from '../pages/question-pages/leftQuestion';
import RightQuestion from '../pages/question-pages/rightQuestion';

const routes = {
  '/': new FirstPage(),
  '/home': new HomePage(),
  '/about': new AboutPage(),
  '/leftQuestion': new LeftQuestion(),
  '/rightQuestion': new RightQuestion(),
};

export default routes;
