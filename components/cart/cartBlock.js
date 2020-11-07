import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';
import classes from '../../styles/cartBlock.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCard, incAmount, decAmount } from '../../modules/actions';


const CartBlock = ({ prod }) => {

	const dispatch = useDispatch();
	const [amount, setAmount] = useState(1);
	const currentPrice = prod.isSale ? prod.price - (prod.price * prod.sale) / 100 : prod.price;


	const data = useSelector(state => state.data);
	const pushToLocalstorage = () => {
		localStorage.setItem('cartProducts', JSON.stringify(data.cartItems));
	}

	useEffect(() => {
		pushToLocalstorage();
	}, [data.cartItems]);

	return (
		<div className={classes.cartProd}>
			<div className={classes.prodCont}>
				<div className={classes.prodImg}>
					<img src={prod.img[0]} />
				</div>
				<div className={classes.prodTitle}>
					{prod.title}
					<span className={classes.prodColor}>{prod.color}</span>
				</div>
			</div>
			<div className={classes.prodInfo}>
				<div className={classes.prodAmount}>
					<span className={prod.amount === 1 ? '' : classes.active} onClick={() => { dispatch(decAmount(prod.productCode)); }}>-</span>
					<div>{prod.amount}</div>
					<span className={prod.amount === 5 ? '' : classes.active} onClick={() => { dispatch(incAmount(prod.productCode)); }}>+</span>
				</div>
				<div className={classes.prodPrice}>
					<span className={prod.isSale ? classes.firstPrice : classes.displayNone}>{prod.price} P</span>
					<span className={classes.secondPrice}>{currentPrice} P</span>
				</div>
				<div
					onClick={() => { dispatch(deleteFromCard(prod.productCode)); localStorage.clear() }}
					className={classes.prodRemove}>
				</div>
			</div>
		</div >
	)
}

export default CartBlock;