import React from 'react';
import Header from '../components/nav';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import CartPage from '../components/cart';
import classes from '../styles/cart.module.scss';

const Cart = () => {
	return (
		<div className={classes.cartWrapper}>
			<Header />
			<Sidebar />
			<CartPage />
			<Footer />
		</div>
	)
}

export default Cart