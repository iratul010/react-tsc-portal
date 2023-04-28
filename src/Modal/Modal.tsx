 import  ReactDOM  from 'react-dom';
 import classes from './Modal.module.css';
interface ModalProps{
    show:boolean;
    closeModal:()=>void;
}
const Modal = ({show,closeModal}:ModalProps) => {
 
     if(!show) return null;
    return ReactDOM.createPortal(
        <div className={classes.modal}>
            <div className={classes.overlay} onClick={closeModal}> </div>
            <div  className={classes.content}>
                <h2>Content</h2>
                <button onClick={closeModal}>close</button>
            </div>
            
        </div>,document.getElementById('portal')as HTMLElement
    );
};

export default Modal;