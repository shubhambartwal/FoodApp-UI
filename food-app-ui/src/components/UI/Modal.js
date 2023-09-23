import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";
const Backdrop = () => {
 return <div className={classes.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.context}>{props.children}</div>
    </div>
  );
};
const portalElement=document.getElementById("overlays");
const Modal = (props) => {
 return( <Fragment>
    {ReactDOM.createPortal(<Backdrop />,portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
  </Fragment>)
};
export default Modal;
