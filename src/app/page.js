import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Card/Card";
import Sidebar from "../components/Sidebar/Sidebar";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SearchBar />
      <div className={styles.container}>
        <div className={styles.flexCard}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Sidebar />
      </div>
    </main>
  );
}
