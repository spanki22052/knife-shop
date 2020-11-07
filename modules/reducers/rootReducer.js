import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import dataReducer from './laodedData';

const rootReducer = combineReducers({
	menu: menuReducer,
	data: dataReducer
});

export default rootReducer;