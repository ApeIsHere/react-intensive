import { useState } from "react";
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import Button from "../../shared/ui/Button";
import Modal from "../../shared/ui/Modal";
import styles from "./LayoutHeader.module.css";

function LayoutHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>The most fascinating app in the world</h2>
      <div className={styles.side}>
        <span className={styles.theme}>
          <ThemeSwitcher />
        </span>

        <Button variant="secondary" onClick={openModal}>
          About
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Modal.Header>О проекте</Modal.Header>
        <Modal.Body>
          Это учебное приложение, выполненное в рамках курса React-интенсива от Aston.
          Здесь реализованы переключение темы, модалки через портал, FSD и кастомные
          UI-компоненты.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={closeModal}>
            Хорошо
          </Button>
          <Button variant="danger" onClick={closeModal}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}

export default LayoutHeader;
