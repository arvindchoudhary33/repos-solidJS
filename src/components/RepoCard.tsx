import { Component } from "solid-js";
import { savedRepos, setSavedRepos } from "../pages/SavedRepos";
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

const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()]);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const unSaveRepos = (repoId: string) => {
  const nextState = savedRepos()?.filter((items) => items.id !== repoId);
  setSavedRepos(nextState);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const isRepoSaved = (repoId: string) => {
  const repo = savedRepos()?.filter((items) => items.id === repoId);
  return repo?.length > 0;
};
const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class={styles.repoCardMainContainer}>
      <div class={styles.repoCardHeading}>stars : {repo.stargazers_count}</div>
      <div class={styles.repoCardBody}>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          <strong>{repo.owner?.login}</strong>/{repo.name}
        </a>
        <p class={styles.repoDescription}>{repo.description}</p>

        {isRepoSaved(repo.id) ? (
          <button
            class="commonButton  save"
            onclick={() => unSaveRepos(repo.id)}
          >
            UNSAVE
          </button>
        ) : (
          <button class="commonButton  save" onclick={() => saveRepo(repo)}>
            SAVE
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
