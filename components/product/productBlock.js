import React from "react";
import Link from "next/link";
import classes from "../../styles/prodBlock.module.scss";

const ProdBlock = ({ product }) => {
  return (
    <Link href={"/product/" + product.productCode}>
      <div className={classes.product}>
        <div className={classes.freeBlock}></div>
        <div className={classes.prodImgBlock}>
          <img src={product.img[0]} className={classes.prodImg} />
          <div className={classes.BadgeBlock}>
            <span
              className={
                product.new ? classes.prodBadgeNew : classes.displayNone
              }
            >
              Новинка
            </span>
            <span
              className={
                product.isSale ? classes.prodBadgeSale : classes.displayNone
              }
            >
              {product.sale}% скидка
            </span>
          </div>
        </div>
        <div className={classes.prodInfo}>
          <div className={classes.prodTitle}>{product.title}</div>
          <div className={classes.prodPrice}>
            {product.isSale
              ? product.price - product.price * (product.sale / 100)
              : product.price}{" "}
            P <span>{product.isSale && product.price + "р"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProdBlock;
