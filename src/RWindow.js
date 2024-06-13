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
    setShow(false);
    props.callback();
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
        size={props.size() ? "lg" : null}
      >
        <Modal.Header>
          <Modal.Title>{props.schema() ? 'Correcto!' : 'Incorrecto!'}</Modal.Title>
        </Modal.Header>
        {props.schema() ?
          <Modal.Body>
            <h4>{'Reacción balanceada:'}</h4>
            <br></br>
            {props.mjrr()}
          </Modal.Body>
        : null}
        <Modal.Footer class={props.schema() ? "modal-footer justify-content-between" : "modal-footer justify-content-end"}>
          {props.schema() ? props.mjps() : null}
          <div className="footerButtons">
            {props.secondary() ? <Button variant="secondary" onClick={handleClose}>{props.schema() ? "Volver" : "Reintentar"}</Button> : null}
           <Button variant="primary" onClick={onClickPrimary}>Siguiente</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Window;
