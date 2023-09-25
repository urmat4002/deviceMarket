import {useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import {NavBar} from './Components/Navbar'
import {Routers} from './Components/Routers'
import {auth} from './http/userAPI'
import {Shop} from './Pages/Shop'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import {setIsAuth} from './store/slice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    auth()
      .then((data) => {
        if (data.token) {
          const user = jwt_decode(data.token)
          if (user) dispatch(setIsAuth(true))

          return
        }
        console.log(data)
      })
      .catch((e) => console.log(e.message))
  }, [])
  return (
    <div>
      <NavBar />
      <Routers />
    </div>
  )
}

export default App
