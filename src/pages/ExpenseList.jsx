import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteExpense } from "../redux/features/expenseSlice";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  // Calculate total of expenses
  // const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalAmount = expenses.reduce(
    (total, currexpense) => total +currexpense.amount,
    0
  );
  console.log(totalAmount);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Expenses History
      </h2>

      {expenses.length > 0 ? (
        <>
          <ul className="space-y-4">
            {expenses.map((expense) => (
              <li
                key={expense.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition"
              >
                <div className="text-gray-700 text-lg font-medium">
                  {expense.description} -{" "}
                  <span className="font-semibold">{expense.amount} Rs</span>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition active:scale-95"
                  onClick={() => {
                    dispatch(deleteExpense(expense.id));
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total Amount Section */}
          <div className="mt-6 flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
            <span className="text-xl font-semibold text-gray-700">
              Total Amount:
            </span>
            <span className="text-xl font-bold text-green-500">
              {totalAmount} Rs
            </span>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No expenses added yet!</p>
      )}
    </div>
  );
};

export default ExpenseList;
