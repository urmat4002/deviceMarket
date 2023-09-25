import {ListGroup} from 'react-bootstrap'
import {useSelector} from 'react-redux'

export const Brands = () => {
  const brands = useSelector((state) => state.shop.shop.brands)

  return (
    <ListGroup style={{maxWidth: '300px'}} as="ul">
      {brands &&
        brands.map((item) => (
          <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
        ))}
    </ListGroup>
  )
}
