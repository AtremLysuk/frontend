
import styles from './Header.module.scss';
import Clock from "./components/Clock/Clock.jsx";


const Header = () => {

  return (<header className={`${styles['header']} bg-light shadow`}>

    <div className={styles.header__logo}>
      <div className={styles.header__logoIcon}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2L3 7v10l9 5 9-5V7L12 2z"
            fill="#48c36b"
            stroke="#48c36b"
            strokeWidth="1"
          />
          <path
            d="M12 2v20M3 7l9 5 9-5"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className={styles.header__logoText}>INVENTORY</span>
    </div>

    <div className={styles.header__search}>
      <input
        type="search"
        placeholder="Поиск"
        className={`${styles.header__searchInput} bg-body-secondary`}
        aria-label="Поиск"
      />
    </div>


    <Clock />

  </header>);
};
export default Header;