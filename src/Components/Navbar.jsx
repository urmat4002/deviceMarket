import {Container, Nav, Navbar} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {setIsAuth} from '../store/slice'

export const NavBar = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.shop.isAuth)
  const navigate = useNavigate()
  const exit = () => {
    dispatch(setIsAuth(false))
    localStorage.removeItem('token')
  }
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>Home</Navbar.Brand>
        <Nav className="me-auto">
          {isAuth ? (
            <>
              <Nav.Link onClick={() => navigate('/admin')}>
                Admin panel
              </Nav.Link>
              <Nav.Link onClick={exit}>Exit</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => navigate('/login')}>Авторизация</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}
