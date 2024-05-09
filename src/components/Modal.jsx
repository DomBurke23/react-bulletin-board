import classes from "./Modal.module.css";

// children is a reserved prop name , we could pass in props and then reference prop.children instead
// open defaults as true, open is required due to the dialog
function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
