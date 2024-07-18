import style from "./Perfil.module.css";

const Perfil = ({ userName }) => {
  return (
    <header className={style.header}>
      <img
        className={style.imageProfile}
        src={`https://github.com/${userName}.png`}
        alt="perfil-avatar"
      />
      <h1 className={style.name}>{userName}</h1>
    </header>
  );
};

export default Perfil;
