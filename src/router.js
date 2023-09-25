import {Admin} from './Pages/Admin'
import {Auth} from './Pages/Auth'
import {Basket} from './Pages/Basket'
import {Device} from './Pages/Device'
import {Shop} from './Pages/Shop'
import {Test} from './Pages/Test'

export const publicRoutes = [
  {path: '/', component: <Shop />},
  {path: '/device', component: <Device />},
  {path: '/login', component: <Auth />},
  {path: '/registration', component: <Auth />},
  {path: '/test', component: <Test />},
]

export const priviteRoutes = [
  {path: '/basket', component: <Basket />},
  {path: '/admin', component: <Admin />},
  {path: '/test', component: <Test />},
]
