import clsx from 'clsx'
import styles from './NavMenu.module.scss';

import {NavLink} from "react-router-dom";
import {IoIosSettings} from "react-icons/io";

const NavMenu = () => {
  const user = {
    name: "Иван", avatar: '/images/avatar.jpeg',
  }
  const menuItems = [{path: "/orders", label: "Приход"}, {
    path: "/groups", label: "Группы"
  }, {path: "/products", label: "Продукты"}, {
    path: "/users", label: "Пользователи"
  }, {path: "/settings", label: "Настройки"},];
  return (<div
    className={styles.sidebar}

  >
    <div className={styles['sidebar__user']}>
      <img

        src={user.avatar}
        alt={`Аватар пользователя ${user.name}`}
        className={styles['sidebar__user-avatar']}
        width={90}
        height={90}
        loading="lazy"
      />

      <button
        type="button"
        className={styles['sidebar__user-settings']}
        aria-label="Настройки профиля"
      >
        <IoIosSettings
          className={styles['sidebar__user-icon']}
          aria-hidden="true"
          focusable="false"
        />
      </button>
    </div>
    <nav
      className={styles['sidebar__nav']}
      aria-label="Основная навигация"
    >
      <ul className={styles['sidebar__menu']}>
        {menuItems.map((el) => (<li
          className={styles['sidebar__menu-item']}
          key={el.label}
        >
          <NavLink
            to={el.path}
            className={({isActive}) => clsx(styles['sidebar__menu-link'], isActive && styles['sidebar__menu-link--active'])}
          >
            {el.label.toUpperCase()}
          </NavLink>
        </li>))}

      </ul>
    </nav>
  </div>)
}
export default NavMenu