import ReactDOM from "react-dom";
import { useEffect, type ReactNode } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ children, isOpen, onClose }: ModalProps) {
  // Закрываем модалку на Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
