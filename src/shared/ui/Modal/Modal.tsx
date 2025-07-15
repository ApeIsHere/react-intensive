import { createPortal } from "react-dom";
import { type ReactNode } from "react";
import styles from "./Modal.module.css";
import Header from "./ui/Header";
import Body from "./ui/Body";
import Footer from "./ui/Fotter";
import { useModalBehavior } from "../../hooks/useModalBehaviour";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
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

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
