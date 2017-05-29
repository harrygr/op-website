import mainLayout from './layouts/main'

import Home from './pages/home';
import About from './pages/about';
import Post from './pages/post';
import Posts from './pages/posts';
import NotFound from './pages/not-found';

const router = {
  '/': mainLayout(Home),
  '/about': mainLayout(About),
  '/posts/:category': mainLayout(Posts),
  '/posts/:category/:slug': mainLayout(Post),
  notFound: () => mainLayout(NotFound).view,
}

export default router
