import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./features/expenseSlice";

// app store
export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});
