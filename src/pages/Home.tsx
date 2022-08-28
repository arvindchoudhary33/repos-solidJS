import { Component, For } from "solid-js";
import RepoCard, { Repo } from "../components/RepoCard";
import styles from "./home.module.css";
import { repos, setUserName, userName } from "../App";

const Home: Component = () => {
  const refetchWithUserName = (event: Event) => {
    event.preventDefault();
    const userInput = document.querySelector(
      "#userNameInputField"
    ) as HTMLInputElement;
    setUserName(userInput.value);
  };

  return (
    <div>
      <form
        class={styles.homeContainer}
        onSubmit={(event) => refetchWithUserName(event)}
      >
        <input
          type="text"
          id="userNameInputField"
          class={styles.userNameInputField}
          required
        />
        <button class={styles.userNameSubmitButton}>Fetch</button>
      </form>
      <h2>Github repos for {userName()} </h2>
      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};
export default Home;
