import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./verticalModal.css";

function VerticalModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Thank you for signing up to our newsletter!</h4>
        <p>
          We're excited to share our best-loved recipes and expert tips with
          you.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticalModal;
