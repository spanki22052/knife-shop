import classes from "../../styles/adminpanel.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase";
import AddCategory from "./addCategory";
import AddProduct from "./addProduct";
import AddPodcategory from "./addPodcategory";

export default () => {
  const router = useRouter();
  const [currentState, setState] = useState("1");

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("YAS");
      } else {
        router.push("/");
      }
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      <span className={classes.welcome}>Добро пожаловать</span>
      <div className={classes.buttonsBlock}>
        <button onClick={() => setState("1")}>категория</button>
        <button onClick={() => setState("2")}>подкатегория</button>
        <button onClick={() => setState("3")}>товар</button>
      </div>
      {currentState === "1" && <AddCategory />}
      {currentState === "2" && <AddPodcategory />}
      {currentState === "3" && <AddProduct />}
      <a href="#" onClick={() => firebase.auth().signOut()}>
        Выйти из админ панели
      </a>
    </div>
  );
};
