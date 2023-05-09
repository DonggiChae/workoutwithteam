import Link from "next/link";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <div className={styles.link}>Go back home</div>
      </Link>
    </div>
  );
};

export default Custom404;
