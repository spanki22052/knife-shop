import classes from "../../styles/productList.module.scss";
import { useDispatch, useSelector, useStore } from "react-redux";
import { closeMenu as close } from "../../modules/actions";
import { useState } from "react";
import { useRouter } from "next/router";
import ProdBlock from "./productBlock";


const tagOptions = [
	{
		key: "Important",
		text: "Important",
		value: "Important",
		label: { color: "red", empty: true, circular: true },
	},
];

const categoryss = [
	{
		category: "Категория",
	}
];

const prices = [
	{
		category: "Цена",
		subCategory: ["До 3000 рублей", "От 3000 до 5000 рублей", "От 5000 рублей"],
	},
];

const byField = (field) => {
	if (field === 'sale') {
		return (a, b) => a[field] > b[field] ? -1 : 1;
	}
	return (a, b) => a[field] > b[field] ? 1 : -1;
}

const ProductList = () => {
	const translations = {
		men: "Мужская обувь",
		kids: "Детская обувь",
		women: "Женская обувь",
	};
	const dispatch = useDispatch();
	const menuState = useSelector((state) => state.menu.menuState);
	const dataState = useSelector((state) => state.data);
	let products = dataState.productList;
	let categorys = dataState.categoryList
	categorys = categorys.filter(item => item.category !== 'Акции')
	const closeMenu = () => {
		dispatch(close());
	};
	const router = useRouter().query.id;
	const [choosenFilter, setFilter] = useState("");
	const [choosenCategory, setCategory] = useState("Все");
	const [firstPrice, changeFirstPrice] = useState(0);
	const [lastPrice, changeLastPrice] = useState(100000);
	const [sortBy, changeSort] = useState('price');

	const checBox = (event) => {
		let addArr = [...sizeArray, event.target.value];
		let remArr = sizeArray.filter((item) => item !== event.target.value);
		event.target.checked
			? sizeArray.length !== 0
				? sizeArray.find((item) => item === event.target.value)
					? changeArr(sizeArray)
					: changeArr(addArr)
				: changeArr(addArr)
			: changeArr(remArr);
		console.log();
	};

	if (firstPrice !== 0 || lastPrice !== 100000) {
		products = products.filter(item => {
			let priceWithSale = item.price - item.price * (item.sale / 100);
			return item.isSale ?
				priceWithSale > firstPrice && priceWithSale < lastPrice
				: item.price > firstPrice && item.price < lastPrice
		});
	}

	if (choosenCategory !== 'Все') {
		products = products.filter(item => item.category === choosenCategory);
	}

	const checPrice = (event) => {
		event.target.checked
			? event.target.value === "Любая"
				? (changeFirstPrice(0), changeLastPrice(100000))
				: event.target.value === "До 3000 рублей"
					? (changeFirstPrice(0), changeLastPrice(3000))
					: event.target.value === "От 3000 до 5000 рублей"
						? (changeFirstPrice(3000), changeLastPrice(5000))
						: (changeFirstPrice(5000), changeLastPrice(100000))
			: (changeFirstPrice(0), changeLastPrice(10000));
	};

	const categoryList = categoryss.map((item, id) => {
		return (
			<div key={id} className={classes.categoryItem}>
				<div
					onClick={() => {
						choosenFilter === 'Категория'
							? setFilter("")
							: setFilter('Категория');
					}}
					className={classes.categoryTitle}
				>
					Категория
					<svg
						className={
							choosenFilter !== 'Категория'
								? classes.categoryIcon
								: classes.categoryIcon + " " + classes.activeIcon
						}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="black"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="#92140C" />
					</svg>
				</div>
				<div
					className={
						choosenFilter !== 'Категория'
							? classes.subCategory
							: classes.subCategory + " " + classes.activeContent
					}
				>
					<ul className={classes.subCategoryList}>
						<li
							onClick={() => {
								setCategory("Все");
							}}
							className={
								choosenCategory !== "Все"
									? classes.subCategoryItem
									: classes.subCategoryItem + " " + classes.activeSubCategory
							}
						>
							Все
            		</li>
						{categorys.map((category, idx) => {
							return (
								<React.Fragment key={idx} >
									{
										category.subcategory.map((item, id) => {
											return (
												< li
													key={id}
													className={
														choosenCategory !== item.title
															? classes.subCategoryItem
															: classes.subCategoryItem + " " + classes.activeSubCategory
													}
													onClick={() => {
														setCategory(item.title);
														console.log(choosenCategory)
													}}
												>
													{item.title}
												</li>
											)
										})
									}
								</React.Fragment>
							);
						})}
					</ul>
				</div>
			</div >
		);
	});

	const priceList = prices.map((item, id) => {
		return (
			<div key={id} className={classes.filterItem}>
				<div
					onClick={() => {
						choosenFilter === item.category
							? setFilter("")
							: setFilter(item.category);
					}}
					className={classes.filterName}
				>
					{item.category}
					<svg
						className={
							choosenFilter !== item.category
								? classes.filterIcon
								: classes.filterIcon + " " + classes.activeIcon
						}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="black"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="#92140C" />
					</svg>
				</div>
				<div
					className={
						choosenFilter !== item.category
							? classes.subFilter
							: classes.subFilter + " " + classes.activeContent
					}
				>
					<div className={classes.subFilterList}>
						<div className={classes.imputBlock}>
							<input
								onChange={checPrice}
								className={classes.filterInput}
								type="radio"
								name="price"
								value="Любая"
							/>
              Любая
            </div>
						{item.subCategory.map((item, idx) => {
							return (
								<div key={idx} className={classes.imputBlock}>
									<input
										onChange={checPrice}
										className={classes.filterInput}
										type="radio"
										name="price"
										value={item}
									/>
									{item}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	});

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
			<div className={classes.productPageText}>
				<h1>{translations[router]}</h1>
			</div>
			<div className={classes.filter}>
				{categoryList}
				{priceList}
				<div className={classes.sortBy}>
					Сортировать по:
          <div
						onClick={() => {
							changeSort("price");
						}}
						className={
							sortBy !== "price"
								? classes.price
								: classes.price + " " + classes.activeSort
						}
					>
						цене
          </div>
					<div
						onClick={() => {
							changeSort("sale");
						}}
						className={
							sortBy !== "sale"
								? classes.sale
								: classes.sale + " " + classes.activeSort
						}
					>
						скидке
          </div>
				</div>
			</div>
			<div className={classes.productList}>
				{products.sort(byField(sortBy)).map((item, id) => {
					return (
						<ProdBlock style={{ cursor: "pointer" }} key={id} product={item} />
					);
				})}
			</div>
		</div>
	);
};

export default ProductList;
