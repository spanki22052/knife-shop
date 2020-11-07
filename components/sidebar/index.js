import React, { useState } from "react";
import classes from "../../styles/sidebar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import Link from "next/link";

const Sidebar = () => {
	const menuState = useSelector((state) => state.menu.menuState);
	const dataState = useSelector((state) => state.data);
	const [choosenCategoty, setCategory] = useState("");
	const dispatch = useDispatch();
	const closeMenu = () => {
		dispatch(close());
	};
	const categorys = dataState.categoryList;
	const emptyCategories = dataState.emptyCategoryList;

	const categoryList = categorys.map((item, id) => {
		return (
			<li key={id} className={classes.sideItem}>
				<div
					onClick={() => {
						choosenCategoty === item.category
							? setCategory("")
							: setCategory(item.category);
					}}
					className={
						choosenCategoty !== item.category
							? classes.sidetitle
							: classes.sidetitle + " " + classes.activeTitle
					}
				>
					<div className={classes.sideItemTitle}>{item.category}</div>
					<div
						className={
							choosenCategoty !== item.category
								? classes.sideicon
								: classes.sideicon + " " + classes.activeIcon
						}
					></div>
				</div>
				<div
					className={
						choosenCategoty !== item.category
							? classes.sideItemContent
							: classes.sideItemContent + " " + classes.activeContent
					}
				>
					<ul className={classes.sublist}>
						{item.subcategory.map((item, idx) => {
							return (
								<li key={idx} className={classes.subitem}>
									<Link href={item.url}>
										<a
											onClick={() => {
												closeMenu();
												document.querySelector("body").classList.remove("lock");
											}}
										>
											{item.title}
										</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</li>
		);
	});
	return (
		<div
			className={
				!menuState ? classes.sidebar : classes.sidebar + " " + classes.active
			}
		>
			<ul className={classes.sidelist}>
				{categoryList}
				{emptyCategories.map((el, index) => {
					return (
						<li
							key={index}
							className={classes.sideItem}
							onClick={() => {
								closeMenu();
								document.querySelector("body").classList.remove("lock");
							}}
						>
							<div className={classes.sidetitle}>
								<Link href={el.url}>
									<div className={classes.sideItemTitle}>{el.title}</div>
								</Link>
							</div>
						</li>
					);
				})}
			</ul>
			<div className={classes.searhbar}>
				<input placeholder="Что вы ищите?" type="text" />
				<svg
					width="25"
					height="20"
					viewBox="0 0 25 25"
					fill="#92140C"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M24.9249 23.203L16.8093 15.0874C18.0687 13.4593 18.7499 11.4687 18.7499 9.37496C18.7499 6.86872 17.7718 4.51873 16.0031 2.74686C14.2343 0.974996 11.8781 0 9.37496 0C6.87185 0 4.5156 0.978121 2.74686 2.74686C0.974996 4.5156 0 6.86872 0 9.37496C0 11.8781 0.978121 14.2343 2.74686 16.0031C4.5156 17.7749 6.86872 18.7499 9.37496 18.7499C11.4687 18.7499 13.4562 18.0687 15.0843 16.8124L23.1999 24.9249C23.2237 24.9487 23.252 24.9676 23.2831 24.9805C23.3141 24.9934 23.3475 25 23.3811 25C23.4148 25 23.4481 24.9934 23.4792 24.9805C23.5103 24.9676 23.5386 24.9487 23.5624 24.9249L24.9249 23.5655C24.9487 23.5417 24.9676 23.5135 24.9805 23.4824C24.9934 23.4513 25 23.4179 25 23.3843C25 23.3506 24.9934 23.3173 24.9805 23.2862C24.9676 23.2551 24.9487 23.2268 24.9249 23.203ZM14.3249 14.3249C12.9999 15.6468 11.2437 16.3749 9.37496 16.3749C7.50622 16.3749 5.74998 15.6468 4.42498 14.3249C3.10311 12.9999 2.37499 11.2437 2.37499 9.37496C2.37499 7.50622 3.10311 5.74685 4.42498 4.42498C5.74998 3.10311 7.50622 2.37499 9.37496 2.37499C11.2437 2.37499 13.0031 3.09999 14.3249 4.42498C15.6468 5.74998 16.3749 7.50622 16.3749 9.37496C16.3749 11.2437 15.6468 13.0031 14.3249 14.3249Z" />
				</svg>
			</div>
			<div className={classes.phonesBlock}>
				<div className={classes.phones}>
					<div className={classes.phoneTitle}>Интернет-магазин</div>
					<div className={classes.phoneNumber}>8-800-555-35-35</div>
					<div className={classes.phoneSub}>круглосуточно</div>
				</div>
				<div className={classes.phones}>
					<div className={classes.phoneTitle}>Поддержка покупателей</div>
					<div className={classes.phoneNumber}>8-800-555-35-35</div>
					<div className={classes.phoneSub}>с 9:00 до 21:00</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
