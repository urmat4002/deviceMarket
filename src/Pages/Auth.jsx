import {useState} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {login, registration} from '../http/userAPI'
import {setIsAuth} from '../store/slice'

export const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const auth = () => {
    if (pathname === '/login')
      login(userName, password).then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          dispatch(setIsAuth(true))
          navigate('/')
          console.log(data.token)
          return
        }
        console.log(data)
      })
    else
      registration(userName, password).then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          dispatch(setIsAuth(true))
          navigate('/')
          console.log(data.token)
          return
        }
        console.log(data)
      })
  }
  return (
    <Container>
      <Card style={{maxWidth: '400px', padding: '20px', margin: '20px'}}>
        <h2>{pathname == '/login' ? 'login' : 'registration'}</h2>
        <Form>
          <Form.Label>User name:</Form.Label>
          <Form.Control
            style={{margin: '10px'}}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter user name"
          />

          <Form.Label>Password:</Form.Label>
          <Form.Control
            style={{margin: '10px'}}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button onClick={auth}>
              {pathname === '/login' ? 'log in' : 'registration'}
            </Button>
            <Form.Text>
              {pathname === '/login' ? (
                <Link to="/registration">Registration</Link>
              ) : (
                <Link to="/login">Log in</Link>
              )}
            </Form.Text>
          </div>
        </Form>
      </Card>
    </Container>
  )
}
