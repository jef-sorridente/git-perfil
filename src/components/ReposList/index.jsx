import style from "./ReposList.module.css";
import { useEffect, useState } from "react";

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [load, setLoad] = useState(true);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/jef-sorridente/repos")
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       setTimeout(() => {
  //         setLoad(false);
  //         setRepos(resJson);
  //       }, 1000);
  //     });
  // }, []);

  return (
    <>
      {load ? (
        <h2 className={style.load}>Carregando...</h2>
      ) : (
        <ul className={style.list}>
          {repos.map((id, name, language, html_url) => (
            <li className={style.listItem} key={id}>
              <div className={style.itemName}>
                <b>Nome:</b>
                {name}
              </div>
              <div className={style.itemLanguage}>
                <b>Linguagem:</b>
                {language}
              </div>
              <a className={style.itemLink} target="_blank" href={html_url}>
                Visitar no Github
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReposList;
