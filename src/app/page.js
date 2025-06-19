import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Card/Card";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SearchBar />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
}
