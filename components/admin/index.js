import firebase from "firebase";
import { useEffect, useState } from "react";
import classes from "../../styles/admin.module.scss";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkLogin = (login, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(login, password)
      .then(() => {
        router.push("/adminpanel");
      })
      .catch(() => {
        setPassword("");
        setError("Ошибка, неверный email или пароль");
      });
  };

  const checkPass = (e) => {
    e.preventDefault();
    checkLogin(login, password);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        router.push("/adminpanel");
      }
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>Вход в админ панель</h1>
      <form onSubmit={checkPass}>
        <div className={classes.inputBlock}>
          <p>email</p>
          <input value={login} onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div className={classes.inputBlock}>
          <p>пароль</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className={classes.error}>{error}</p>

        <input
          type="submit"
          className={classes.button}
          value="войти"
        />
      </form>
    </div>
  );
};
