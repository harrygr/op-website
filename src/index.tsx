import './index.css';
import 'tachyons/css/tachyons.css'
import 'flickity/css/flickity.css'

import helix from 'helix-react'
import log from 'helix-react/lib/log'
import models from './models'
import router from './router'

helix({
  model: models(),
  routes: router,
  mount: document.getElementById('root'),
  plugins: [log],
})
