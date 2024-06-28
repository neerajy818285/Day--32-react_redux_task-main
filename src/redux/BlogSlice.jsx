import { createSlice } from "@reduxjs/toolkit";

function findIndex(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) return i;
  }
  return -1; // Return -1 if not found, rather than null
}

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    saveAllBlogs: (state, action) => {
      return action.payload;
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const index = findIndex(state, id);
      if (index !== -1) {
        state[index].quantity = (state[index].quantity || 1) + 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const index = findIndex(state, id);
      if (index !== -1 && state[index].quantity > 1) {
        state[index].quantity -= 1;
      }
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      return state.filter((product) => product.id !== id);
    },
  },
});

export const {
  saveAllBlogs,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} = blogSlice.actions;

export default blogSlice.reducer;
