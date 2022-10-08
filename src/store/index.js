import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';
import categorySlice from './slices/categorySlice';
const reducer = {
     auth: authSlice,
     cart: cartSlice,
     product: productSlice,
     category: categorySlice
}

const store = configureStore({
     reducer: reducer,
     devTools: true
})

export default store;