import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { removeError } from "../../store/actions";
import styles from "./ErrorModal.module.css";

export default function (props) {
  const errorMessage = useSelector(({ error }) => error.errorMessage);
  const dispatch = useDispatch();
  return (
    <Modal
      {...props}
      show={!!errorMessage}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
      onHide={() => dispatch(removeError())}
      backdropClassName={styles.Backdrop}
    >
      <Modal.Body className={styles.Modal}>
        <p className={styles.Error}>{errorMessage}</p>

        <Button
          className={styles.Button}
          onClick={() => dispatch(removeError())}
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
}
