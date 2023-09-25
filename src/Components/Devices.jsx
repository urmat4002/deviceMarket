import {Card, Image} from 'react-bootstrap'
import {useSelector} from 'react-redux'

export const Devices = () => {
  const devices = useSelector((state) => state.shop.shop.devices)
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {devices &&
        devices.map((item) => (
          <Card key={item.id} style={{width: '18rem', margin: '10px'}}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Image style={{maxWidth: '200px'}} src={item.img} />
              <h3>price:{item.price}</h3>
              <h3>rating:{item.rating}</h3>
            </Card.Body>
          </Card>
        ))}
    </div>
  )
}
