import classes from "../../styles/catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import Link from "next/link";

const Catalog = () => {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu.menuState);
  const closeMenu = () => {
    dispatch(close());
  };
  return (
    <div
      className={
        !menuState ? classes.wrapper : classes.wrapper + " " + classes.blur
      }
      onClick={() => {
        closeMenu();
        document.querySelector("body").classList.remove("lock");
      }}
    >
      <h1 className={classes.catalogText}>Каталог</h1>
      <div className={classes.photosHolder}>
        <Link href="/catalog/men">
          <div className={classes.photoBlock}>
            <img src="/man.jpg" alt="man" />
            <h1>МУЖЧИНАМ</h1>
          </div>
        </Link>
        <Link href="/catalog/women">
          <div className={classes.photoBlock}>
            <img src="/woman.jpg" alt="man" />
            <h1>ЖЕНЩИНАМ</h1>
          </div>
        </Link>
        <Link href="/catalog/kids">
          <div className={classes.photoBlock}>
            <img src="/kid.jpg" alt="man" />
            <h1>ДЕТЯМ</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
