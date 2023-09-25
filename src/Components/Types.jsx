import {ListGroup} from 'react-bootstrap'
import {useSelector} from 'react-redux'

export const Types = () => {
  const types = useSelector((state) => state.shop.shop.types)

  return (
    <ListGroup horizontal>
      {types &&
        types.map((item) => (
          <ListGroup.Item style={{height: '50px'}} key={item.id}>
            {item.name}
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}
