import classes from "../../styles/sameproducts.module.scss";
import { useEffect, useState } from "react";
import slide from "../slide";
import { useSelector } from "react-redux";
import Link from "next/link";

export default ({ linkTo }) => {
  let mnState = useSelector((state) => state.data);
  const [menuState, setMenu] = useState(mnState);

  console.log(menuState);

  const products = [
    {
      title: 'Матрас "Флекс"',
      description:
        "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
      price: 3300,
      discountSize: 10,
      color: "коричневый",
      images: [
        "https://sonum.ru/upload/iblock/5af/5af06a56c2ad840e54b9de0d74d20da8.jpg",
        "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
        "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
      ],
      isDiscount: true,
      sizes: [35, 36, 37, 38, 39],
      productCode: "101999k",
    },
    {
      title: 'Матрас "Флекс"',
      description:
        "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
      price: 3300,
      discountSize: 10,
      color: "коричневый",
      images: [
        "https://sonum.ru/upload/iblock/5af/5af06a56c2ad840e54b9de0d74d20da8.jpg",
        "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
        "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
      ],
      isDiscount: true,
      sizes: [35, 36, 37, 38, 39],
      productCode: "101999k",
    },
    {
      title: 'Матрас "Флекс"',
      description:
        "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
      price: 3300,
      discountSize: 10,
      color: "коричневый",
      images: [
        "https://sonum.ru/upload/iblock/5af/5af06a56c2ad840e54b9de0d74d20da8.jpg",
        "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
        "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
      ],
      isDiscount: true,
      sizes: [35, 36, 37, 38, 39],
      productCode: "101999k",
    },
    {
      title: 'Матрас "Флекс"',
      description:
        "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
      price: 3300,
      discountSize: 10,
      color: "коричневый",
      images: [
        "https://sonum.ru/upload/iblock/5af/5af06a56c2ad840e54b9de0d74d20da8.jpg",
        "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
        "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
      ],
      isDiscount: true,
      sizes: [35, 36, 37, 38, 39],
      productCode: "101999k",
    },
    {
      title: 'Матрас "Флекс"',
      description:
        "Новая модель черных ботинок выполнена в насыщенном черном цвете. Демисезонные туфли выполнены из натуральной кожи, имеют удобную колодку и стандартную полноту. Отличный вариант для деловых встреч и торжественных мероприятий, хорошо сочетаются с брюками и подходят на каждый день.",
      price: 3300,
      discountSize: 10,
      color: "коричневый",
      images: [
        "https://sonum.ru/upload/iblock/5af/5af06a56c2ad840e54b9de0d74d20da8.jpg",
        "https://static.ralf.ru/upload/resize_cache/iblock/ef4/750_9999_1/ef40a89e13ee12ffe592280f37110596.jpg",
        "https://static.ralf.ru/upload/iblock/b25/b25cc92eca9624b2fb564cdcf7622cbd.jpg",
      ],
      isDiscount: true,
      sizes: [35, 36, 37, 38, 39],
      productCode: "101999k",
    },
  ];

  useEffect(() => {
    const slider = document.querySelector(".phot");

    slide(slider);
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>ПОХОЖИЕ ТОВАРЫ</h1>

      <div className={classes.productsBlock + " phot"}>
        {menuState["productList"].map((el, index) => {
          return (
            index < 4 && (
              <Link href={`/product/${el.productCode}`}>
                <div key={index} className={classes.productBlock}>
                  <img src={el.img[0]} />
                  <h2>{el.title}</h2>
                  <h1>
                    {el.isSale
                      ? el.price - (el.price * el.sale) / 100
                      : el.price}
                    р<span> {el.price}р</span>
                  </h1>
                </div>
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};
