import mainLayout from './layouts/main'

import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/not-found';

const router = {
  '/': mainLayout(Home),
  '/about': mainLayout(About),
  notFound: () => mainLayout(NotFound).view,
}

export default router
