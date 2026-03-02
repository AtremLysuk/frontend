import {Outlet} from "react-router-dom";
import NavMenu from "../NavMenu/index.js";

import styles from './Layout.module.scss'
import Header from "../Header/Header.jsx";

const Layout = () => {
  return (<div className="container-fluid p-0 bg-body-secondary">

      <Header   />

      <div className="row g-0">

        <aside className="col-12 col-md-3 col-lg-2 bg-light vh-100 position-sticky top-0 shadow" >
          <NavMenu />
        </aside>

        <main className={`col-12 col-md-9 col-lg-10 bg-body-secondary ${styles['main']}`}>
          <Outlet />
        </main>
      </div>
    </div>);
};
export default Layout;