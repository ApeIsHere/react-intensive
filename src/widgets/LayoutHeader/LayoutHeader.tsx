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
      <p className={styles.text}>The most fascinating app in the world</p>
      <span className={styles.switch}>
        <ThemeSwitcher />
      </span>
      <Button variant="secondary" onClick={openModal}>
        About
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>О проекте</h2>
        <p>
          Это учебное приложение, выполненное в рамках курса React-интенсива от Aston.
          Здесь реализованы переключение темы, модалки через портал, FSD и кастомные
          UI-компоненты.
        </p>
      </Modal>
    </header>
  );
}

export default LayoutHeader;
