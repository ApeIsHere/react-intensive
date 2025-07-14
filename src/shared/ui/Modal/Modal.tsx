import { createPortal } from "react-dom";
import { type ReactNode } from "react";
import styles from "./Modal.module.css";
import { useModalBehavior } from "../../hooks/useModalBehaviour";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

type ModalCompoundProps = {
  children: ReactNode;
};

// Получаем контейнер для модалки
const modalRoot = document.getElementById("modal-root");

function Modal({ children, isOpen, onClose }: ModalProps) {
  // Активируем закрытие на Esc и Scroll-lock страницы
  useModalBehavior(isOpen, onClose);

  if (!isOpen) return null;
  if (!modalRoot) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

Modal.Header = ({ children }: ModalCompoundProps) => {
  return <h2 className={styles.header}>{children}</h2>;
};
Modal.Body = ({ children }: ModalCompoundProps) => {
  return <p className={styles.body}>{children}</p>;
};
Modal.Footer = ({ children }: ModalCompoundProps) => {
  return <div className={styles.footer}>{children}</div>;
};

export default Modal;
