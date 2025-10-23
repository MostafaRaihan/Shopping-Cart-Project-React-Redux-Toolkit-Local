// export const cartReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'cart/addToCart': {
//         const existingProduct = state.find(item => item.id === action.payload.id);
//         if (existingProduct) {
//             return state.map(item =>
//             item.id === existingProduct.id
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item
//             );
//         } else {
//             return [...state, { ...action.payload, quantity: 1 }];
//         }
//         }
//         case 'cart/removeProductFromCart': {
//         return state.filter(item => item.id !== action.payload);
//         }
//         case 'cart/modifyQuantityOfAnItem': {
//         return state.map(item =>
//             item.id === action.payload.id
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         );
//         }
//         case 'cart/clearCart': {
//         return [];
//         }
//         default:
//         return state;
//     }
// };



import { createReducer } from "@reduxjs/toolkit";
import {modifyQuantityOfAnItem, addToCart, removeProductFromCart, clearCart } from "../action/cart"

export const cartReducer = createReducer([], (builder) => {
    builder
        .addCase(addToCart, (state, action) => {
            const existingProduct = state.find(
                (item) => item.id === action.payload.id
            );
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        })
        .addCase(removeProductFromCart, (state, action) => {
            return state.filter((item) => item.id != action.payload);
        })
        .addCase(modifyQuantityOfAnItem, (state, action) => {
            const targetProductIndex = state.findIndex(item => item.id === action.payload.id);
            state[targetProductIndex].quantity = action.payload.quantity;
        })
        .addCase(clearCart, () => {
            return [];
        })
});