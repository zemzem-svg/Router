import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

export const AddMovie = ({ addmovie }) => {
  const [newmovie, setnewmovie] = useState({})
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setnewmovie({...newmovie,[ e.target.name]: e.target.value})
  }
    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="add-btn"> 
       Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control name="name" type="text" placeholder="Enter name" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Entrer posterurl</Form.Label>
              <Form.Control name="posterurl" type="text" placeholder="Enter posterurl" onChange={handleChange} />
  </Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>description</Form.Label>
              <Form.Control name="description" type="text" placeholder="Enter description" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>rating</Form.Label>
              <Form.Control name="rating" type="number" placeholder="Enter rating" onChange={handleChange} />
  </Form.Group>
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
            <Button variant="primary" onClick={() => { handleClose();addmovie(newmovie)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
