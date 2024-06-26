import { useEffect, useRef, useState } from "react";
import styles from "./newsletter.module.css";
import Button from "../button/Button";
import Modal from "../modal/Modal";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");

  const dialog = useRef();
  const inputRef = useRef();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dialog.current.showModal();
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <section>
      <Modal ref={dialog} email={inputValue} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Din email:</label>
        <input
          required
          ref={inputRef}
          type='email'
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type='submit' title='Tilmeld' />
      </form>
    </section>
  );
};

export default Newsletter;
