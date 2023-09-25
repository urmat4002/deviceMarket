import {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {createDevice} from '../../http/deviceAPI'

export const DeviceModal = () => {
  const [price, setPrice] = useState(0)
  const [brandId, setBrandId] = useState('')
  const [typeId, setTypeId] = useState('')
  const [description, setDescription] = useState([])
  const [name, setName] = useState('')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const addHandle = () => {
    createDevice(name, price, brandId, typeId, Date.now(), description).then(
      (data) => console.log(data),
      setName(''),
    )
  }
  return (
    <div style={{margin: '20px'}}>
      <Button variant="primary" onClick={handleShow}>
        Add device
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Device</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
