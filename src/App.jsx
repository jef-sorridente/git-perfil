import "./global.css";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  return (
    <>
      <Perfil userName="jef-sorridente" />
      <ReposList />
    </>
  );
}

export default App;
