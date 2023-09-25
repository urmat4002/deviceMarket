import {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {createBrand, createType} from '../../http/deviceAPI'

export const Brands = () => {
  const [name, setName] = useState('')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const addHandle = () => {
    createBrand(name).then((data) => console.log(data))
  }
  return (
    <div style={{margin: '20px'}}>
      <Button variant="primary" onClick={handleShow}>
        Add brand
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control onChange={(e) => setName(e.target.value)} />
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
