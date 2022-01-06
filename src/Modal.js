import { useContext, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "./Context";

const Modal = () => {

  const escFunction = (e) => {
    if(e.keyCode == 27){
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction)
  }, [])

  const { isModalOpen, closeModal } = useContext(AppContext)
  return (
    <div onClick={closeModal} className={`${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2>Modal Content</h2>
        <button onClick={closeModal} className="btn-close-modal">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
