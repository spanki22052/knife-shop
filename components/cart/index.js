import React from 'react';
import classes from '../../styles/cart.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import CartBlock from './cartBlock';
import Link from "next/link";

const byField = (field) => {
	return (a, b) => a[field] > b[field] ? 1 : -1;
}

const CartPage = () => {
	const dispatch = useDispatch();
	const menuState = useSelector((state) => state.menu.menuState);
	const cartProducts = useSelector((state) => state.data.cartItems);
	const closeMenu = () => {
		dispatch(close());
	};
	let total = 0;
	cartProducts.map((item) => {
		return total = total + item.price * item.amount;
	})
	let totalWithSale = 0;

	cartProducts.map((item) => {
		if (item.isSale) {
			let sale = item.price * (item.sale / 100);
			return totalWithSale = totalWithSale + (item.price - sale) * item.amount;
		}
		return totalWithSale = totalWithSale + item.price * item.amount;
	})

	return (
		<div
			onClick={() => {
				closeMenu();
				document.querySelector("body").classList.remove("lock");
			}}
			className={!menuState ? classes.cart : classes.cart + ' ' + classes.blur}>
			<div className={classes.cartTitle}>
				Корзина
			</div>
			<div className={classes.cartContent}>
				{cartProducts.length > 0 ?
					<>
						<div className={classes.cartItems}>
							{cartProducts.sort(byField('title')).map((item, id) => {
								return <CartBlock prod={item} key={id} />
							})}
						</div>
						<div className={classes.cartInfo}>
							<div className={classes.cartSum}>
								<span className={classes.sumTitle}>Сумма заказа:</span>
								<span className={classes.sumNum}>{total} Р</span>
							</div>
							<div className={classes.cartFinalSum}>
								<span className={classes.finalSum}>Итоговая сумма со скидкой:</span>
								<span className={classes.finalSumNum}>{totalWithSale} Р</span>
							</div>
							<a className={classes.cartButton}>Перейти к оформлению заказа</a>
						</div>
					</> :
					<div className={classes.freeCart}>
						<div>В корзину ничего не добавлено</div>
						<Link href='/catalog'><a className={classes.catalogLink}>Перейти в каталог</a></Link>
					</div>
				}
			</div>
		</div>
	)
}

export default CartPage;