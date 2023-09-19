import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    like:0
  },

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total = state.total+action.payload.item*action.payload.productt.cost;
    },

    deleteProduct:(state,action)=>{
      state.quantity-=1;
      state.total=state.total-action.payload.item*action.payload.cost;
      state.products=state.products.filter((item)=>item.productt._id!=action.payload.id);
      
    },
    licked:(state)=>{
      state.like+=1;
    },
    unlike:(state)=>{
      state.like-=1;
    }
  },
});

export const { addProduct,deleteProduct,licked,unlike } = cartSlice.actions; 
export default cartSlice.reducer; 
