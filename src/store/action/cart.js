// export const modifyQuantityOfAnItem = (obj) => {
//     return {
//         type: "cart/modifyQuantityOfAnItem",
//         payload: obj,
//     }
// }
// export const addToCart = (product) => {
//     return{
//         type: "cart/addToCart",
//         payload: product,
//     }
// }
// export const removeProductFromCart = (productId) => {
//     return{
//         type:"cart/removeProductFromCart",
//         payload : productId,
//     }
// }
// export const clearCart = () => {
//     return {
//         type: "cart/clearCart",
//     }
// }



import { createAction } from "@reduxjs/toolkit";
export const modifyQuantityOfAnItem = createAction("cart/modifyQuantityOfAnItem");
export const addToCart = createAction("cart/addToCart");
export const removeProductFromCart = createAction ("cart/removeProductFromCart");
export const clearCart = createAction ("cart/clearCart");