// import { combineReducers, createStore } from 'redux';
// import { cartReducer } from './reducers/cart';

// // Combine all reducers
// const rootReducer = combineReducers({
//     cart: cartReducer,
// });

// // Create and export the Redux store
// export const ourStore = createStore(rootReducer);



import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cart';

const rootReducer = {
    cart: cartReducer,
};

export const ourStore = configureStore({
    reducer: rootReducer,
});

