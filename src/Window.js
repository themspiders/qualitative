import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Main.css"

function Window(props) {
  const [show, setShow] = useState(props.show ? props.show : false);
  const handleClose = (() => setShow(false));
  const handleShow = () => {
    setShow(true);
  }
  const onClickPrimary = () => {
    props.callback && props.callback();
    setShow(false);
  }
  return (
    <>
      {props.clickable
      ? <Button variant="primary" onClick={handleShow}>
          {props.name}
        </Button>
      : null}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
        size={props.size && props.size() ? "lg" : null}
      >
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            {props.body}
          </Modal.Body>
        {props.footer ?
          <Modal.Footer class="modal-footer justify-content-between">
            <Button variant="primary" onClick={onClickPrimary}>Cerrar</Button>
          </Modal.Footer>
        : null}
      </Modal>
    </>
  );
}

export default Window;
