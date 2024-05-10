import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom"; // hook

// children is a reserved prop name , we could pass in props and then reference prop.children instead
// open defaults as true, open is required due to the dialog
function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    // relative path , to go up to parent route
    navigate("..");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
