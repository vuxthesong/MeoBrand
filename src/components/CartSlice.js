import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    ADDITEM: (state, action) => {
      const exits = state.find((product) => product.id === action.payload.id);
      if (exits) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: product.qty + 1 }
            : product
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }
    },
    DELETEITEM: (state, action) => {
      const exits = state.find((product) => product.id === action.payload.id);
      if (exits.qty === 1) {
        return state.filter((product) => product.id !== exits.id);
      } else {
        return state.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                qty: product.qty - 1,
              }
            : product
        );
      }
    },
  },
});

export default cartSlice;
