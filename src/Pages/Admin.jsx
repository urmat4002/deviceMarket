import {Container} from 'react-bootstrap'
import {Brands} from '../Components/Modals/Brands'
import {DeviceModal} from '../Components/Modals/DeviceModal'
import {Types} from '../Components/Modals/Types'

export const Admin = () => {
  return (
    <Container>
      <div style={{display: 'flex'}}>
        <Types />
        <Brands />
        <DeviceModal />
      </div>
    </Container>
  )
}
