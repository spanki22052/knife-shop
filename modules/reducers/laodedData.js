const initialState = {
	productList: [],
	categoryList: [],
	emptyCategoryList: [],
	cartItems: [],
};

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		//data
		case "PRODUCT_LOADED":
			return {
				...state,
				productList: action.list,
			};
		case "CATEGORY_LOADED":
			return {
				...state,
				categoryList: action.list,
			};
		case "EMPTY_CATEGORY_LOADED":
			return {
				...state,
				emptyCategoryList: action.list,
			};
		//card
		case 'ADD_DATA_FROM_LOCALSTORAGE':
			return {
				...state,
				cartItems: action.payload
			}
		case "ITEM_ADD_TO_CARD":
			const newItem = state.productList.find(
				(item) => item.productCode === action.payload
			);
			if (state.cartItems.findIndex((item) => item.productCode === newItem.productCode) !== -1) {
				const clone = state.cartItems.find((item) => item.productCode === newItem.productCode);
				if (clone.amount === 5) {
					return {
						...state
					}
				}
				const newCart = state.cartItems.filter(
					(item) => item.productCode !== newItem.productCode
				);
				clone.amount = clone.amount + 1;
				newCart.push(clone);
				return {
					...state,
					cartItems: newCart,
				};
			} else {
				newItem.amount = 1;
				return {
					...state,
					cartItems: [...state.cartItems, newItem],
				};
			}
		case "ITEM_REMOVE_FROM_CARD":
			const removedProd = action.payload;
			const newCart = state.cartItems.filter((item) => item.productCode !== removedProd);
			return {
				...state,
				cartItems: newCart,
			};
		case 'AMOUNT_INC':
			const incProd = state.cartItems.find(prod => prod.productCode === action.payload);
			if (incProd.amount === 5) {
				return {
					...state
				};
			}
			incProd.amount = incProd.amount + 1;
			const incCart = state.cartItems.filter(item => item.productCode !== incProd.productCode);
			incCart.push(incProd);
			return {
				...state,
				cartItems: incCart
			};
		case 'AMOUNT_DEC':
			const decProd = state.cartItems.find(prod => prod.productCode === action.payload);
			if (decProd.amount === 1) {
				return {
					...state
				};
			}
			decProd.amount = decProd.amount - 1;
			const decCart = state.cartItems.filter(item => item.productCode !== decProd.productCode);
			decCart.push(decProd);
			return {
				...state,
				cartItems: decCart
			};
		default:
			return state;
	}
};

export default dataReducer;
