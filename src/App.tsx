import { Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";

import styles from "./App.module.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";
const App: Component = () => {
  return (
    <div class={styles.App}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedrepos" element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export default App;
