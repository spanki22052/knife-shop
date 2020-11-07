import classes from "../../styles/productPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Form } from "react-bootstrap";
import slide from "../slide";
import { addedToCard, addDataFromLocalstorage } from "../../modules/actions";

export default () => {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu.menuState);
  const closeMenu = () => {
    dispatch(close());
  };
  const [sizeOpen, setSize] = useState(false);
  const data = useSelector((state) => state.data);
  const productList = data.productList;
  const id = useRouter().query.id;
  const product = productList.find((item) => item.productCode === id);

  useEffect(() => {
    const slider = document.querySelector(".photos");
    slide(slider);
  }, []);

  const [currentPhoto, setPhoto] = useState(0);

  const currentPrice = product.isSale
    ? product.price - (product.price * product.sale) / 100
    : product.price;

  const pushToLocalstorage = () => {
    localStorage.setItem("cartProducts", JSON.stringify(data.cartItems));
  };

  useEffect(() => {
    pushToLocalstorage();	
  }, [data.cartItems]);

  return (
    <div
      onClick={() => {
        closeMenu();
        document.querySelector("body").classList.remove("lock");
      }}
      className={
        !menuState ? classes.wrapper : classes.wrapper + " " + classes.blur
      }
    >
      <div className={classes.photosHolder + " photos"} id="photos">
        {product.img.map((el, index) => {
          return (
            <img
              onClick={() => setPhoto(index)}
              key={index}
              src={el}
              alt="product"
            />
          );
        })}
      </div>
      <img src={product.img[currentPhoto]} className={classes.bigPhoto} />
      <div className={classes.productInfo}>
        <h1>{product.title}</h1>
        <span className={classes.productCode}>
          Код продута: {product.productCode}
        </span>

        <div className={classes.priceBlock}>
          <span className={classes.firstPrice}>{currentPrice}RUB</span>
          <span
            className={
              product.isSale ? classes.secondPrice : classes.displayNone
            }
          >
            {product.price}RUB
          </span>
          <span
            className={product.isSale ? classes.discount : classes.displayNone}
          >
            {product.sale}%
          </span>
        </div>
        <div className={classes.selectorHolder}>
          <button
            onClick={() => {
              dispatch(addedToCard(product.productCode));
            }}
          >
            <svg
              className={classes.btnSvg}
              width="30"
              height="30"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25 12V9.05C25 8.13075 24.8189 7.22049 24.4672 6.37121C24.1154 5.52194 23.5998 4.75026 22.9497 4.10025C22.2997 3.45024 21.5281 2.93463 20.6788 2.58284C19.8295 2.23106 18.9193 2.05 18 2.05C17.0807 2.05 16.1705 2.23106 15.3212 2.58284C14.4719 2.93463 13.7003 3.45024 13.0503 4.10025C12.4002 4.75026 11.8846 5.52194 11.5328 6.37121C11.1811 7.22049 11 8.13075 11 9.05V16.05C11 16.3152 11.1054 16.5696 11.2929 16.7571C11.4804 16.9446 11.7348 17.05 12 17.05C12.2652 17.05 12.5196 16.9446 12.7071 16.7571C12.8946 16.5696 13 16.3152 13 16.05V14H21V12H13V9.05C13 7.72392 13.5268 6.45215 14.4645 5.51447C15.4021 4.57678 16.6739 4.05 18 4.05C19.3261 4.05 20.5979 4.57678 21.5355 5.51447C22.4732 6.45215 23 7.72392 23 9.05V16C23 16.2652 23.1054 16.5196 23.2929 16.7071C23.4804 16.8946 23.7348 17 24 17C24.2652 17 24.5196 16.8946 24.7071 16.7071C24.8946 16.5196 25 16.2652 25 16V14H30V32H6V14H9V12H4V32.09C4 32.5966 4.20123 33.0824 4.55943 33.4406C4.91762 33.7988 5.40344 34 5.91 34H30.09C30.5966 34 31.0824 33.7988 31.4406 33.4406C31.7988 33.0824 32 32.5966 32 32.09V12H25Z" />
            </svg>
          </button>
        </div>
        <div className={classes.descriptionBlock}>
          <h1>Описание</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
