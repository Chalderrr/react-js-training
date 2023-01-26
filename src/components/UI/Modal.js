import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    // This component renders a div with the class "backdrop" and an onClick event that triggers the onClose prop
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
    // This component renders a div with the class "modal" and another div with the class "content" containing the children props
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

// Get the DOM element with the id "overlays"
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    // This component renders both the Backdrop and ModalOverlay components within a React Portal, which allows them to be rendered outside of the current React tree.
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
