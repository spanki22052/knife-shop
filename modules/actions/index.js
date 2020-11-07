const changeMenuState = () => {
	return {
		type: "CHANGE_MENU_STATE",
	};
};

const closeMenu = () => {
	return {
		type: "SET_FALSE_STATE",
	};
};

//load data
const productLoaded = (newProduct) => {
	return {
		type: "PRODUCT_LOADED",
		list: newProduct
	};
};

const categoryLoaded = (newProduct) => {
	return {
		type: "CATEGORY_LOADED",
		list: newProduct
	};
};


const emptyCategoryLoaded = (newProduct) => {
	return {
		type: "EMPTY_CATEGORY_LOADED",
		list: newProduct
	};
};

const addedToCard = (id) => {
	return {
		type: 'ITEM_ADD_TO_CARD',
		payload: id
	};
};

const deleteFromCard = (id) => {
	return {
		type: 'ITEM_REMOVE_FROM_CARD',
		payload: id
	};
};

const incAmount = (id) => {
	return {
		type: 'AMOUNT_INC',
		payload: id
	};
};

const decAmount = (id) => {
	return {
		type: 'AMOUNT_DEC',
		payload: id
	};
};

const addDataFromLocalstorage = (data) => {
	return {
		type: 'ADD_DATA_FROM_LOCALSTORAGE',
		payload: data
	}
}

export {
	changeMenuState,
	closeMenu,
	productLoaded,
	emptyCategoryLoaded,
	categoryLoaded,
	addedToCard,
	deleteFromCard,
	incAmount,
	decAmount,
	addDataFromLocalstorage
}