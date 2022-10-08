import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const categorySlice = createSlice({
     name: 'category',
     initialState: {
          categoryItems: [],
     },
     reducers: {
          getItemsCategori: (state, action) => {
               state.categoryItems = action.payload;
          }
     }
});

export const getItemsDataCategory = (category) => async (dispatch) => {
     try {
          const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
          dispatch(getItemsCategori(res.data))
     } catch (err) {
          throw new Error(err);
     }
}

export const { getItemsCategori } = categorySlice.actions
export default categorySlice.reducer