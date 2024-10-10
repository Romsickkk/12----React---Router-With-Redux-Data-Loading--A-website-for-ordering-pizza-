import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import caetReduce from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: caetReduce,
  },
});

export default store;
