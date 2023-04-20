import styles from "./Searchbar.module.css";

const Searchbar = ({ searchHandler }) => {
  return (
    <nav className={styles["searchbar_wrapper"]}>
      <div
        className={`${styles["searchbar_container"]} focus-within:border-green-500 border`}
      >
        <img
          className={styles["search_icon"]}
          src="/assets/search.png"
          alt=""
        />
        <input
          onChange={(e) => searchHandler(e)}
          className={styles["searchbar"]}
          type="text"
          placeholder="Search users..."
        />
      </div>
    </nav>
  );
};

export default Searchbar;
