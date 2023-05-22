import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expenseSelection) => expenseSelection.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((expenseToDelete) => expenseToDelete.id !== id))}
      />
    </div>
  );
}

export default App;
