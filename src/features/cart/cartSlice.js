import { createSlice } from "@reduxjs/toolkit";
const initialState={
  cart:[]
}
const cartSlice=createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addItem(state,action){
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.productId !== action.payload);
    },

  }
})
export const {
  addItem,
  deleteItem
}= cartSlice.actions

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
export const getSubTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
