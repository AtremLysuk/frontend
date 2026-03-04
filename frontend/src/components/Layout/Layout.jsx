import {Outlet, useLocation} from "react-router-dom";
import NavMenu from "../NavMenu/index.js";
import PageTransition from "../PageTransition/PageTransition.jsx";
import Header from "../Header/Header.jsx";
import styles from './Layout.module.scss'

const Layout = () => {
  const location = useLocation()
  return (<div className="container-fluid p-0 bg-body-secondary">

    <Header />

    <div className="row g-0">

      <aside className="col-12 col-md-3 col-lg-2 bg-light vh-100 position-sticky top-0 shadow">
        <NavMenu  />
      </aside>


      <main className={`col-12 col-md-9 col-lg-10 bg-body-secondary ${styles['main']}`}>
        <div key={location.pathname} className={styles.page}>
          <Outlet />
        </div>
      </main>

    </div>
  </div>);
};
export default Layout;