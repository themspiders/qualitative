import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
        size={props.size ? "lg" : null}
      >
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            {props.body}
          </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onClickPrimary}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Window;
