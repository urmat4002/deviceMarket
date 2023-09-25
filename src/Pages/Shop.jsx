import {useEffect, useState} from 'react'
import {Container, Pagination} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {Brands} from '../Components/Brands'
import {Devices} from '../Components/Devices'
import {Types} from '../Components/Types'
import {fetchBrands, fetchDevices, fetchTypes} from '../http/deviceAPI'
import {setBrands, setDevice, setTypes} from '../store/slice'

export const Shop = () => {
  const dispatch = useDispatch()
  const [pages, setPages] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchTypes()
      .then((data) => dispatch(setTypes(data)))
      .catch((e) => console.log(e))
    fetchBrands()
      .then((data) => dispatch(setBrands(data)))
      .catch((e) => console.log(e))
    fetchDevices(null, null, page, 2)
      .then((data) => {
        dispatch(setDevice(data.row))

        let pages = Math.ceil(data.count / 2)

        let temp = []

        for (let i = 1; i <= pages; i++) {
          temp.push(i)
        }
        setPages(temp)
      })
      .catch((e) => console.log(e.message))
  }, [])

  useEffect(() => {
    fetchDevices(null, null, page, 2)
      .then((data) => {
        dispatch(setDevice(data.row))
      })
      .catch((e) => console.log(e))
  }, [page])

  return (
    <Container>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Brands />
        <Types />
      </div>
      <Devices />
      <Pagination>
        {pages.map((item, index) => (
          <Pagination.Item onClick={() => setPage(item)} key={index}>
            {item}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  )
}
