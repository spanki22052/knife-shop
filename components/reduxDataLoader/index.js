import firebase from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { categoryLoaded, emptyCategoryLoaded, productLoaded, addDataFromLocalstorage } from "../../modules/actions";
import { useEffect } from "react";

export default () => {
	const dispatch = useDispatch();
	useEffect(() => {
		firebase
			.collection("knives-shop")
			.doc("categories")
			.get()
			.then((el) => {
				dispatch(categoryLoaded(el.data().categoriesList))
				dispatch(emptyCategoryLoaded(el.data().emptyCategories))
			});
		firebase
			.collection("knives-shop")
			.doc("products")
			.get()
			.then((el) => {
				dispatch(productLoaded(el.data().productsList));
			});
		if (localStorage.getItem('cartProducts') && JSON.parse(localStorage.getItem('cartProducts').length > 0)) {
			dispatch(addDataFromLocalstorage(JSON.parse(localStorage.getItem('cartProducts'))));
		}
	}, []);

	return <></>;
};
