import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
