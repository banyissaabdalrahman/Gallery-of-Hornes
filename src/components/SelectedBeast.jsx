import React, { Component } from "react"
import { Button, Modal, Card } from "react-bootstrap"
class SelectedBeast extends Component {
  state = {}
  render() {
    const { show, onClose, title, url, description } = this.props
    return (
      <>
        <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img className="beastImg" variant="top" src={url} />
          </Modal.Body>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast
