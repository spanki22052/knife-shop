import classes from "../../styles/category.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { emptyCategoryLoaded } from "../../modules/actions";
import { useState } from "react";
import cyrillicToTranslit from "cyrillic-to-translit-js";
import firebase from "firebase";

export default () => {
  const data = useSelector((state) => state.data);
  const categoryList = data.categoryList;
  const emptyCategoryList = data.emptyCategoryList;
  const dispatch = useDispatch();
  const [categoryInput, setInput] = useState("");

  const translit = (el) => cyrillicToTranslit().transform(el);
  const lower = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const sendData = (e) => {
    const result = [
      ...emptyCategoryList,
      {
        title: lower(categoryInput.toLowerCase()),
        url: `/${translit(categoryInput).toLowerCase()}`,
      },
    ];

    
      firebase.firestore().collection("knives-shop").doc("categories").set({
        categoriesList: categoryList,
        emptyCategories: result,
      });

     dispatch(emptyCategoryLoaded(result));
    setInput("");
    e.preventDefault();
  };

  return (
    <form onSubmit={categoryInput.length > 3 && sendData} className={classes.wrapper}>
      <input placeholder="введите категорию" value={categoryInput} onChange={(e) => setInput(e.target.value)} />
      <input className={classes.button} type="submit" />
    </form>
  );
};
