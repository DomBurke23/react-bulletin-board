import classes from "./Modal.module.css";

// children is a reserved prop name , we could pass in props and then reference prop.children instead
function Modal({ children }) {
  // open defaults as true, open is required due to the dialog
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
