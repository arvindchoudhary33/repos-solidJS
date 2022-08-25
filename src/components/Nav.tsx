import { Component } from "solid-js";
import { NavLink } from "solid-app-router";
import styles from "./Nav.module.css";
const Nav: Component = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <nav class={styles.navContainer}>
        <NavLink
          href="/"
          class={styles.navLinkButton}
          end
          activeClass={styles.navLinkActive}
        >
          Home
        </NavLink>
        <NavLink
          href="/savedrepos"
          class={styles.navLinkButton}
          activeClass={styles.navLinkActive}
        >
          Saved : 5
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
