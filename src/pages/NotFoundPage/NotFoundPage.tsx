import { Link } from "react-router-dom";
import Button from "../../shared/ui/Button";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404 — Page not found</h2>;
      <Link to="/">
        <Button variant="secondary">Back to Home</Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
