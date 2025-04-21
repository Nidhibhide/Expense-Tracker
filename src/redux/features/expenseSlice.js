import { createSlice } from "@reduxjs/toolkit";

//create slices

const expenseSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    //state - current array of expenses
    //action-contains new expense object access by payload
    deleteExpense: (state, action) => {
      return state.filter((expense) => action.payload !== expense.id);
    },
  }, //functions which are used to modify states
});

export const { addExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
