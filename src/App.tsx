import { Route, Routes } from "solid-app-router";
import { Component, createEffect, createSignal } from "solid-js";

import styles from "./App.module.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";

const [userName, setUserName] = createSignal("arvindchoudhary33");
const [repos, setRepos] = createSignal([]);
const App: Component = () => {
  createEffect(async () => {
    const res = await fetch(
      `https://api.github.com/users/${userName()}/repos?sort=created`
    );
    setRepos(await res.json());
  });

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
export { userName, setUserName, repos };
export default App;
