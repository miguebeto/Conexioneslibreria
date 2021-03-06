import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    // const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
      <div>
          <button className="btn-danger" onClick={openModal1}>ver detalle</button>
          <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 2</h3>
            <p>Hola este es el contenido de mi modal 2</p>
            <img src="https://placeimg.com/400/400/nature" alt="Nature"/>
          </Modal>
          {/* <button onClick={openModal2}>ver detalle</button>
          <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <h3>Modal 2</h3>
            <p>Hola este es el contenido de mi modal 2</p>
            <img src="https://placeimg.com/400/400/nature" alt="Nature"/>
          </Modal> */}
      </div>
  )     
}

export default Modals;  