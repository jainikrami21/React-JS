import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
 
  name: 'cart',

  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = CartSlice.actions

export default CartSlice.reducer