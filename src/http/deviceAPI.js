import axios from 'axios'

export const fetchBrands = async () => {
  const {data} = await axios.get('http://localhost:5000/api/brand')
  return data
}

export const createBrand = async (name) => {
  const {data} = await axios.post(
    'http://localhost:5000/api/brand',
    {name},
    {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}},
  )
  return data
}

export const fetchTypes = async () => {
  const {data} = await axios.get('http://localhost:5000/api/type')
  return data
}

export const createType = async (name) => {
  const {data} = await axios.post(
    'http://localhost:5000/api/type',
    {name},
    {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}},
  )
  return data
}

export const fetchDevices = async (brandId, typeId, page, limit) => {
  const {data} = await axios.get('http://localhost:5000/api/device', {
    params: {brandId, typeId, page, limit},
  })
  return data
}

export const createDevice = async (
  name,
  price,
  brandId,
  typeId,
  id,
  description,
) => {
  const {data} = await axios.post(
    'http://localhost:5000/api/device',
    {name, price, brandId, typeId, id, description},
    {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}},
  )
  return data
}
