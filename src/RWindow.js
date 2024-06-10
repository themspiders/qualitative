import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Window(props) {
  const [show, setShow] = useState(false);

  const handleClose = (() => setShow(false));
  const handleShow = () => {
    props.onClick();
    setShow(true);
  }
  
  const onClickPrimary = () => {
    props.callback();
    setShow(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.name}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
        size={props.size ? "lg" : null}
      >
        <Modal.Header>
          <Modal.Title>{props.title ? 'Correcto!' : 'Incorrecto!'}</Modal.Title>
        </Modal.Header>
        {props.mjrr ?
          <Modal.Body>
            <h4>{'Reacción balanceada:'}</h4>
            <br></br>
            {props.mjrr}
          </Modal.Body>
        : null}
        <Modal.Footer>
          {props.secondary ? <Button variant="secondary" onClick={handleClose}>Intentar de nuevo</Button> : null}
          <Button variant="primary" onClick={onClickPrimary}>Siguiente reacción</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Window;
