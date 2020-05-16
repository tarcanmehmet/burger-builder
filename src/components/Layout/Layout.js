import React from "react";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
