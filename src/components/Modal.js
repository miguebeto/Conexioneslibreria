import '../styles/modal.css'

const Modal = ({ children, isOpen, closeModal }) => {
    const handleContainerClick = (e) => { 
        e.stopPropagation();
    }
    return(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleContainerClick}>
                <button  onClick={closeModal} className="modal-close">X</button>
                {children}
            </div>
        </article>
    )     
  }
  
export default Modal; 