import React from "react";
import Link from "next/link";
import classes from "../../styles/slideBlock.module.scss";

const SlideBlock = ({ item, classTitle, linkTo }) => {
  return (
    <Link href={linkTo}>
      <div className={classes.proditem + ` ${classTitle}`}>
        <div className={classes.prodImgBlock}>
          <img src={item.img} className={classes.prodImg} />
          <span className={classes.prodBadge}>Новинка</span>
        </div>
        <div className={classes.prodInfo}>
          <div className={classes.prodTitle}>{item.title}</div>
          <div className={classes.prodPrice}>{item.price}P</div>
        </div>
      </div>
    </Link>
  );
};

export default SlideBlock;
