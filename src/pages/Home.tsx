import { Component, createEffect } from "solid-js";
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

  createEffect(() => {
    console.log("inside home", repos());
  });

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
    </div>
  );
};
export default Home;
