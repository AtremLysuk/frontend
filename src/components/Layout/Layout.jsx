import clsx from "clsx";
import styles from "./Layout.module.scss";
import {Outlet} from 'react-router-dom';


const Layout = () => {

  return (<div className={styles.layout}>
      <div>NavBar</div>

      <div
        className={clsx(styles.layout__main)}
      >

        <main className={styles.layout__content}>
          <div className="container-fluid">
            <Outlet />
          </div>
        </main>
      </div>


    </div>);
};
export default Layout;