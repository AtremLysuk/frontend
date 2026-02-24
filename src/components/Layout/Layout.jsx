import {Outlet} from "react-router-dom";
import NavMenu from "../NavMenu";

import styles from './Layout.module.scss'

const Layout = () => {
  return (<div className="container-fluid p-0 bg-body-secondary">

      <header className="sticky-top bg-white shadow-sm">
        <div className="container-fluid py-3 shadow">
          This is Header
        </div>
      </header>

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