import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { addExpense } from "../redux/features/expenseSlice";
import { useDispatch } from "react-redux";

const ExpenseForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) {
      alert("All fields are required");
      return;
    }
    const expense = {
      id: nanoid(),
      description,
      amount: parseFloat(amount),
    };
    console.log(expense);
    dispatch(addExpense(expense));
    setDescription("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 max-w-lg mx-auto bg-gray-50 rounded-lg shadow-lg  w-full mt-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Add Expense
      </h2>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full placeholder:text-lg px-4 py-3 mb-4 border text-xl border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full px-4 py-3 text-xl border mb-4 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 text-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
