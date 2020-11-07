import React, { useEffect } from "react";
import classes from "../../styles/nav.module.scss";
import HamburgerMenu from "react-hamburger-menu";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuState, closeMenu as close, addDataFromLocalstorage } from "../../modules/actions";

const Header = () => {
	const menuState = useSelector((state) => state.menu.menuState);
	const cartProducts = useSelector((state) => state.data.cartItems);
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(changeMenuState());
	};
	const closeMenu = () => {
		dispatch(close());
	};
	let totalProd = 0;
	cartProducts.map(item => {
		totalProd = totalProd + item.amount;
	})
	return (
		<div className={classes.nav}>
			<div className={classes.nav__logo}>
				<div className={classes.nav__burger}>
					<HamburgerMenu
						isOpen={menuState}
						menuClicked={() => {
							handleClick();
							document.querySelector("body").classList.toggle("lock");
						}}
						width={30}
						height={16}
						strokeWidth={2}
						rotate={0}
						color="white"
						borderRadius={0}
						animationDuration={0.5}
					/>
				</div>
				<span className={classes.logo}>
					<Link
						href="/">
						<a onClick={() => {
							closeMenu();
							document.querySelector("body").classList.remove("lock");
						}}>
							Matrazz
            		</a>
					</Link>
				</span>
			</div>
			<div className={classes.nav__menu}>
				<div className={classes.nav__contacts}>
					<div className={classes.phone}>8-800-555-35-35</div>
					<div className={classes.txt}>
						интернет-магази &mdash; круглосуточно
          </div>
				</div>
				<Link href='/cart'><a><svg
					onClick={() => {
						closeMenu();
						document.querySelector("body").classList.remove("lock");
					}} id="Capa_1" fill='white' enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m472 452c0 11.046-8.954 20-20 20h-20v20c0 11.046-8.954 20-20 20s-20-8.954-20-20v-20h-20c-11.046 0-20-8.954-20-20s8.954-20 20-20h20v-20c0-11.046 8.954-20 20-20s20 8.954 20 20v20h20c11.046 0 20 8.954 20 20zm0-312v192c0 11.046-8.954 20-20 20s-20-8.954-20-20v-172h-40v60c0 11.046-8.954 20-20 20s-20-8.954-20-20v-60h-192v60c0 11.046-8.954 20-20 20s-20-8.954-20-20v-60h-40v312h212c11.046 0 20 8.954 20 20s-8.954 20-20 20h-232c-11.046 0-20-8.954-20-20v-352c0-11.046 8.954-20 20-20h60.946c7.945-67.477 65.477-120 135.054-120s127.109 52.523 135.054 120h60.946c11.046 0 20 8.954 20 20zm-121.341-20c-7.64-45.345-47.176-80-94.659-80s-87.019 34.655-94.659 80z" /></g>
				</svg>
					<div className={classes.cartBadge}>{totalProd}</div>
				</a>
				</Link>
			</div>
		</div>
	);
};

export default Header;
