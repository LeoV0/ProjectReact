import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="search" id="" name="" placeholder="Search" />
      <div className={styles.logoSearch}>
        <Search size={20} />
      </div>
    </div>
  );
}
