import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className={styles.navbar}>
          <p>Navbar</p>
        </div>
      </div>
    </>
  );
}
