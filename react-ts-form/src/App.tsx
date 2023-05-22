import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Gas", amount: 10, category: "Utilities" },
    { id: 2, description: "HEB", amount: 200, category: "Groceries" },
    { id: 3, description: "Netflix", amount: 10, category: "Entertainment" },
    { id: 4, description: "Electricity", amount: 150, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expenseSelection) => expenseSelection.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) => setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])}
        />
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
