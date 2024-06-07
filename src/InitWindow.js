import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Window(props) {
  const [show, setShow] = useState(true);
  const handleClose = (() => setShow(false));
  
  const onClickPrimary = () => {
    props.callback();
    setShow(false);
  }

  const text = "\
    El juego selecciona una reacción arbitraria de todas las que hay, pero no la muestra completamente.\
    Algunos reactivos o productos o colores (como por ser el de precipitado o solución) de la reacción elegida\
    también ya se preseleccionan arbitrariamente,\
    y la idea es elegir las demás cosas que faltan para completarla. En caso de rendirse, apretar el botón \"reset\"\
    para avanzar a otra reacción. Para que la aplicación se visualice bien, es\
    mejor abrirla desde la computadora o sino con el celular pero con la pantalla de costado. Está en construcción y pueden surgir errores.\
    \"debug\" es solo un botón para ver qué puede suceder en caso de surgir algún error.\
  ";

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header>
          <Modal.Title>{'El juego de mesa'}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            {text}
          </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onClickPrimary}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Window;
