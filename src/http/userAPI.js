import axios from 'axios'

export const login = async (email, password) => {
  const {data} = await axios.post('http://localhost:5000/api/user/login', {
    email,
    password,
  })
  return data
}

export const registration = async (email, password) => {
  const {data} = await axios.post(
    'http://localhost:5000/api/user/registration',
    {
      email,
      password,
      role: 'admin',
    },
  )
  return data
}

export const auth = async () => {
  const {data} = await axios.get('http://localhost:5000/api/user/auth', {
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
  })
  return data
}
