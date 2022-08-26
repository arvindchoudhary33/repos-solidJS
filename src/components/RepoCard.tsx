import { Component } from "solid-js";
import styles from "./RepoCard.module.css";
export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
};

interface Props {
  repo: Repo;
}

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class={styles.repoCardMainContainer}>
      <div class={styles.repoCardHeading}>stars : {repo.stargazers_count}</div>
      <div class={styles.repoCardBody}>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          <strong>{repo.owner?.login}</strong>/{repo.name}
        </a>
        <p class={styles.repoDescription}>{repo.description}</p>
        <button class="commonButton save">SAVE</button>
      </div>
    </div>
  );
};
