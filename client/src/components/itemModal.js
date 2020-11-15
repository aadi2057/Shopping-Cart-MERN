import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

const ItemModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newItem = {
      name: name,
    };
    props.addItem(newItem);
    // alert(`Adding item ${name}`, name);
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Button className="mb-5" onClick={() => setIsOpen(!isOpen)} color="dark">
        Add Item
      </Button>
      <Modal isOpen={isOpen}>
        <ModalHeader className="bg-warning" toggle={() => setIsOpen(!isOpen)}>
          Add an Item to Shopping List
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Row>
                <Label md={2} for="name">
                  Name
                </Label>
                <Col md={9}>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Add an Item"
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="offset-md-2">
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                  <Button
                    className="ml-2"
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    color="secondary"
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
