import {useSelector} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import {priviteRoutes, publicRoutes} from '../router'

export const Routers = () => {
  const isAuth = useSelector((state) => state.shop.isAuth)
  return (
    <Routes>
      {publicRoutes.map((item, index) => (
        <Route key={index} path={item.path} element={item.component} />
      ))}
      {isAuth &&
        priviteRoutes.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
    </Routes>
  )
}
