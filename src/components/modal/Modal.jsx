import { IoMdClose } from "react-icons/io";
import { forwardRef } from "react";
import Button from "../button/Button";
import styles from "./modal.module.css";

const Modal = forwardRef(function Modal({ email }, ref) {
  return (
    <dialog ref={ref} className={styles.modal}>
      <form method='dialog'>
        <h2>Du er nu tilmeldt nyhedsbrevet med emailen: {email}</h2>
        <Button title={<IoMdClose size={20} />} />
      </form>
    </dialog>
  );
});

export default Modal;
